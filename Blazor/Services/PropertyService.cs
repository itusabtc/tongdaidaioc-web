using ReverBlazor.Models;

namespace ReverBlazor.Services;

public interface IPropertyService
{
    Task<List<Property>> GetBuyPropertiesAsync();
    Task<List<Property>> GetRentPropertiesAsync();
    Task<Property?> GetPropertyByIdAsync(int id);
    Task<List<Property>> SearchPropertiesAsync(string location, string type, decimal? minPrice, decimal? maxPrice);
    Task<bool> CreatePropertyAsync(Property property);
    Task<bool> UpdatePropertyAsync(Property property);
    Task<bool> DeletePropertyAsync(int id);
}

public class PropertyService : IPropertyService
{
    private readonly HttpClient _httpClient;
    private const string ApiBaseUrl = "https://api.rever.vn";

    public PropertyService(HttpClient httpClient)
    {
        _httpClient = httpClient;
    }

    public async Task<List<Property>> GetBuyPropertiesAsync()
    {
        try
        {
            return await _httpClient.GetFromJsonAsync<List<Property>>(
                $"{ApiBaseUrl}/api/properties?type=buy&limit=12") ?? new List<Property>();
        }
        catch (Exception ex)
        {
            Console.WriteLine($"Error fetching buy properties: {ex.Message}");
            return new List<Property>();
        }
    }

    public async Task<List<Property>> GetRentPropertiesAsync()
    {
        try
        {
            return await _httpClient.GetFromJsonAsync<List<Property>>(
                $"{ApiBaseUrl}/api/properties?type=rent&limit=12") ?? new List<Property>();
        }
        catch (Exception ex)
        {
            Console.WriteLine($"Error fetching rent properties: {ex.Message}");
            return new List<Property>();
        }
    }

    public async Task<Property?> GetPropertyByIdAsync(int id)
    {
        try
        {
            return await _httpClient.GetFromJsonAsync<Property>(
                $"{ApiBaseUrl}/api/properties/{id}");
        }
        catch (Exception ex)
        {
            Console.WriteLine($"Error fetching property {id}: {ex.Message}");
            return null;
        }
    }

    public async Task<List<Property>> SearchPropertiesAsync(string location, string type, decimal? minPrice, decimal? maxPrice)
    {
        try
        {
            var query = $"{ApiBaseUrl}/api/properties/search?location={Uri.EscapeDataString(location)}&type={type}";
            
            if (minPrice.HasValue)
                query += $"&minPrice={minPrice}";
            if (maxPrice.HasValue)
                query += $"&maxPrice={maxPrice}";

            return await _httpClient.GetFromJsonAsync<List<Property>>(query) ?? new List<Property>();
        }
        catch (Exception ex)
        {
            Console.WriteLine($"Error searching properties: {ex.Message}");
            return new List<Property>();
        }
    }

    public async Task<bool> CreatePropertyAsync(Property property)
    {
        try
        {
            var response = await _httpClient.PostAsJsonAsync($"{ApiBaseUrl}/api/properties", property);
            return response.IsSuccessStatusCode;
        }
        catch (Exception ex)
        {
            Console.WriteLine($"Error creating property: {ex.Message}");
            return false;
        }
    }

    public async Task<bool> UpdatePropertyAsync(Property property)
    {
        try
        {
            var response = await _httpClient.PutAsJsonAsync($"{ApiBaseUrl}/api/properties/{property.Id}", property);
            return response.IsSuccessStatusCode;
        }
        catch (Exception ex)
        {
            Console.WriteLine($"Error updating property: {ex.Message}");
            return false;
        }
    }

    public async Task<bool> DeletePropertyAsync(int id)
    {
        try
        {
            var response = await _httpClient.DeleteAsync($"{ApiBaseUrl}/api/properties/{id}");
            return response.IsSuccessStatusCode;
        }
        catch (Exception ex)
        {
            Console.WriteLine($"Error deleting property: {ex.Message}");
            return false;
        }
    }
}
