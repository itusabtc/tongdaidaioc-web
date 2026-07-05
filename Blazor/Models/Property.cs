namespace ReverBlazor.Models;

/// <summary>
/// Represents a real estate property listing
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
    public string PropertyType { get; set; } = "apartment";
    public string ListingType { get; set; } = "buy";
    public DateTime CreatedDate { get; set; }
    public string Description { get; set; } = string.Empty;
    public string ContactName { get; set; } = string.Empty;
    public string ContactPhone { get; set; } = string.Empty;
    public string ContactEmail { get; set; } = string.Empty;
}
