using Microsoft.EntityFrameworkCore;
using ReverAPI.Data;
using ReverAPI.Models;

namespace ReverAPI.Services;

public class PropertyDataService : IPropertyDataService
{
    private readonly ReverDbContext _context;
    private readonly ILogger<PropertyDataService> _logger;

    public PropertyDataService(ReverDbContext context, ILogger<PropertyDataService> logger)
    {
        _context = context;
        _logger = logger;
    }

    public async Task<List<Property>> GetAllPropertiesAsync()
    {
        try
        {
            return await _context.Properties
                .Where(p => p.IsActive)
                .OrderByDescending(p => p.CreatedDate)
                .ToListAsync();
        }
        catch (Exception ex)
        {
            _logger.LogError(ex, "Error fetching all properties");
            return new List<Property>();
        }
    }

    public async Task<List<Property>> GetPropertiesByTypeAsync(string type)
    {
        try
        {
            return await _context.Properties
                .Where(p => p.IsActive && p.ListingType == type.ToLower())
                .OrderByDescending(p => p.CreatedDate)
                .Take(12)
                .ToListAsync();
        }
        catch (Exception ex)
        {
            _logger.LogError(ex, "Error fetching properties by type: {type}", type);
            return new List<Property>();
        }
    }

    public async Task<List<Property>> GetPropertiesByPropertyTypeAsync(string propertyType)
    {
        try
        {
            return await _context.Properties
                .Where(p => p.IsActive && p.PropertyType == propertyType.ToLower())
                .OrderByDescending(p => p.CreatedDate)
                .ToListAsync();
        }
        catch (Exception ex)
        {
            _logger.LogError(ex, "Error fetching properties by property type: {type}", propertyType);
            return new List<Property>();
        }
    }

    public async Task<Property?> GetPropertyByIdAsync(int id)
    {
        try
        {
            return await _context.Properties
                .FirstOrDefaultAsync(p => p.Id == id && p.IsActive);
        }
        catch (Exception ex)
        {
            _logger.LogError(ex, "Error fetching property {id}", id);
            return null;
        }
    }

    public async Task<List<Property>> SearchPropertiesAsync(string? location, string? type, decimal? minPrice, decimal? maxPrice)
    {
        try
        {
            var query = _context.Properties.Where(p => p.IsActive);

            if (!string.IsNullOrEmpty(location))
            {
                query = query.Where(p => 
                    p.Address.Contains(location) || 
                    p.District.Contains(location));
            }

            if (!string.IsNullOrEmpty(type))
            {
                query = query.Where(p => p.ListingType == type.ToLower());
            }

            if (minPrice.HasValue)
            {
                query = query.Where(p => p.Price >= minPrice.Value);
            }

            if (maxPrice.HasValue)
            {
                query = query.Where(p => p.Price <= maxPrice.Value);
            }

            return await query
                .OrderByDescending(p => p.CreatedDate)
                .Take(50)
                .ToListAsync();
        }
        catch (Exception ex)
        {
            _logger.LogError(ex, "Error searching properties");
            return new List<Property>();
        }
    }

    public async Task<List<Property>> GetFeaturedPropertiesAsync()
    {
        try
        {
            return await _context.Properties
                .Where(p => p.IsActive && p.IsExclusive)
                .OrderByDescending(p => p.ViewCount)
                .Take(6)
                .ToListAsync();
        }
        catch (Exception ex)
        {
            _logger.LogError(ex, "Error fetching featured properties");
            return new List<Property>();
        }
    }

    public async Task<int> GetTotalPropertyCountAsync(string? type = null)
    {
        try
        {
            var query = _context.Properties.Where(p => p.IsActive);
            if (!string.IsNullOrEmpty(type))
            {
                query = query.Where(p => p.ListingType == type.ToLower());
            }
            return await query.CountAsync();
        }
        catch (Exception ex)
        {
            _logger.LogError(ex, "Error counting properties");
            return 0;
        }
    }

    public async Task<Property> CreatePropertyAsync(Property property)
    {
        try
        {
            property.CreatedDate = DateTime.UtcNow;
            property.UpdatedDate = DateTime.UtcNow;
            property.IsActive = true;

            _context.Properties.Add(property);
            await _context.SaveChangesAsync();

            _logger.LogInformation("Property created: {id}", property.Id);
            return property;
        }
        catch (Exception ex)
        {
            _logger.LogError(ex, "Error creating property");
            throw;
        }
    }

    public async Task<Property> UpdatePropertyAsync(Property property)
    {
        try
        {
            property.UpdatedDate = DateTime.UtcNow;
            _context.Properties.Update(property);
            await _context.SaveChangesAsync();

            _logger.LogInformation("Property updated: {id}", property.Id);
            return property;
        }
        catch (Exception ex)
        {
            _logger.LogError(ex, "Error updating property {id}", property.Id);
            throw;
        }
    }

    public async Task<bool> DeletePropertyAsync(int id)
    {
        try
        {
            var property = await _context.Properties.FindAsync(id);
            if (property == null) return false;

            property.IsActive = false;
            await _context.SaveChangesAsync();

            _logger.LogInformation("Property deleted (soft): {id}", id);
            return true;
        }
        catch (Exception ex)
        {
            _logger.LogError(ex, "Error deleting property {id}", id);
            return false;
        }
    }

    public async Task IncrementViewCountAsync(int propertyId)
    {
        try
        {
            var property = await _context.Properties.FindAsync(propertyId);
            if (property != null)
            {
                property.ViewCount++;
                await _context.SaveChangesAsync();
            }
        }
        catch (Exception ex)
        {
            _logger.LogError(ex, "Error incrementing view count for property {id}", propertyId);
        }
    }
}

public class ArticleDataService : IArticleDataService
{
    private readonly ReverDbContext _context;
    private readonly ILogger<ArticleDataService> _logger;

    public ArticleDataService(ReverDbContext context, ILogger<ArticleDataService> logger)
    {
        _context = context;
        _logger = logger;
    }

    public async Task<List<Article>> GetAllArticlesAsync()
    {
        try
        {
            return await _context.Articles
                .Where(a => a.IsActive)
                .OrderByDescending(a => a.PublishedDate)
                .ToListAsync();
        }
        catch (Exception ex)
        {
            _logger.LogError(ex, "Error fetching articles");
            return new List<Article>();
        }
    }

    public async Task<Article?> GetArticleByIdAsync(int id)
    {
        try
        {
            return await _context.Articles
                .FirstOrDefaultAsync(a => a.Id == id && a.IsActive);
        }
        catch (Exception ex)
        {
            _logger.LogError(ex, "Error fetching article {id}", id);
            return null;
        }
    }

    public async Task<List<Article>> GetFeaturedArticlesAsync()
    {
        try
        {
            return await _context.Articles
                .Where(a => a.IsActive && a.IsFeatured)
                .OrderByDescending(a => a.PublishedDate)
                .Take(5)
                .ToListAsync();
        }
        catch (Exception ex)
        {
            _logger.LogError(ex, "Error fetching featured articles");
            return new List<Article>();
        }
    }

    public async Task<List<Article>> GetArticlesByCategoryAsync(string category)
    {
        try
        {
            return await _context.Articles
                .Where(a => a.IsActive && a.Category == category)
                .OrderByDescending(a => a.PublishedDate)
                .ToListAsync();
        }
        catch (Exception ex)
        {
            _logger.LogError(ex, "Error fetching articles by category: {category}", category);
            return new List<Article>();
        }
    }

    public async Task<Article> CreateArticleAsync(Article article)
    {
        try
        {
            article.PublishedDate = DateTime.UtcNow;
            article.IsActive = true;

            _context.Articles.Add(article);
            await _context.SaveChangesAsync();

            _logger.LogInformation("Article created: {id}", article.Id);
            return article;
        }
        catch (Exception ex)
        {
            _logger.LogError(ex, "Error creating article");
            throw;
        }
    }

    public async Task<Article> UpdateArticleAsync(Article article)
    {
        try
        {
            article.UpdatedDate = DateTime.UtcNow;
            _context.Articles.Update(article);
            await _context.SaveChangesAsync();

            _logger.LogInformation("Article updated: {id}", article.Id);
            return article;
        }
        catch (Exception ex)
        {
            _logger.LogError(ex, "Error updating article {id}", article.Id);
            throw;
        }
    }

    public async Task<bool> DeleteArticleAsync(int id)
    {
        try
        {
            var article = await _context.Articles.FindAsync(id);
            if (article == null) return false;

            article.IsActive = false;
            await _context.SaveChangesAsync();

            _logger.LogInformation("Article deleted (soft): {id}", id);
            return true;
        }
        catch (Exception ex)
        {
            _logger.LogError(ex, "Error deleting article {id}", id);
            return false;
        }
    }
}
