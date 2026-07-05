namespace ReverAPI.Models;

/// <summary>
/// Represents a property listing in the database
/// </summary>
public class Property
{
    public int Id { get; set; }
    public string Title { get; set; } = string.Empty;
    public string Address { get; set; } = string.Empty;
    public string District { get; set; } = string.Empty;
    public decimal Price { get; set; }
    public string PriceDisplay { get; set; } = string.Empty;
    public decimal Area { get; set; }
    public int Bedrooms { get; set; }
    public int Bathrooms { get; set; }
    public string ImageUrl { get; set; } = string.Empty;
    public bool IsExclusive { get; set; }
    public decimal? Discount { get; set; }
    public string PropertyType { get; set; } = "apartment"; // apartment, house, land, etc.
    public string ListingType { get; set; } = "buy"; // buy, rent
    public DateTime CreatedDate { get; set; }
    public DateTime UpdatedDate { get; set; }
    public string Description { get; set; } = string.Empty;
    public string ContactName { get; set; } = string.Empty;
    public string ContactPhone { get; set; } = string.Empty;
    public string ContactEmail { get; set; } = string.Empty;
    public int ViewCount { get; set; }
    public bool IsActive { get; set; } = true;
}

/// <summary>
/// Represents an article or news post
/// </summary>
public class Article
{
    public int Id { get; set; }
    public string Title { get; set; } = string.Empty;
    public string Description { get; set; } = string.Empty;
    public string Content { get; set; } = string.Empty;
    public string ThumbnailUrl { get; set; } = string.Empty;
    public string FeaturedImageUrl { get; set; } = string.Empty;
    public DateTime PublishedDate { get; set; }
    public DateTime? UpdatedDate { get; set; }
    public string Author { get; set; } = string.Empty;
    public string Category { get; set; } = string.Empty;
    public bool IsFeatured { get; set; }
    public int ViewCount { get; set; }
    public bool IsActive { get; set; } = true;
}

/// <summary>
/// Represents a user account
/// </summary>
public class User
{
    public int Id { get; set; }
    public string Email { get; set; } = string.Empty;
    public string FullName { get; set; } = string.Empty;
    public string PasswordHash { get; set; } = string.Empty;
    public string PhoneNumber { get; set; } = string.Empty;
    public string UserType { get; set; } = "customer"; // customer, agent, admin
    public DateTime CreatedDate { get; set; }
    public DateTime? LastLoginDate { get; set; }
    public bool IsActive { get; set; } = true;
    public string? ProfileImageUrl { get; set; }
    public string? Bio { get; set; }
}
