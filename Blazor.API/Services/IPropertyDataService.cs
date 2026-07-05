using ReverAPI.Models;

namespace ReverAPI.Services;

public interface IPropertyDataService
{
    // Read operations
    Task<List<Property>> GetAllPropertiesAsync();
    Task<List<Property>> GetPropertiesByTypeAsync(string type); // "buy" or "rent"
    Task<List<Property>> GetPropertiesByPropertyTypeAsync(string propertyType);
    Task<Property?> GetPropertyByIdAsync(int id);
    Task<List<Property>> SearchPropertiesAsync(string? location, string? type, decimal? minPrice, decimal? maxPrice);
    Task<List<Property>> GetFeaturedPropertiesAsync();
    Task<int> GetTotalPropertyCountAsync(string? type = null);

    // Write operations
    Task<Property> CreatePropertyAsync(Property property);
    Task<Property> UpdatePropertyAsync(Property property);
    Task<bool> DeletePropertyAsync(int id);

    // Analytics
    Task IncrementViewCountAsync(int propertyId);
}

public interface IArticleDataService
{
    Task<List<Article>> GetAllArticlesAsync();
    Task<Article?> GetArticleByIdAsync(int id);
    Task<List<Article>> GetFeaturedArticlesAsync();
    Task<List<Article>> GetArticlesByCategoryAsync(string category);
    Task<Article> CreateArticleAsync(Article article);
    Task<Article> UpdateArticleAsync(Article article);
    Task<bool> DeleteArticleAsync(int id);
}
