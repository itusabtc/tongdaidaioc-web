using ReverBlazor.Models;

namespace ReverBlazor.Services;

public interface IArticleService
{
    Task<List<Article>> GetArticlesAsync();
    Task<Article?> GetArticleByIdAsync(int id);
    Task<List<Article>> GetFeaturedArticlesAsync();
}

public class ArticleService : IArticleService
{
    private readonly HttpClient _httpClient;
    private const string ApiBaseUrl = "https://api.rever.vn";

    public ArticleService(HttpClient httpClient)
    {
        _httpClient = httpClient;
    }

    public async Task<List<Article>> GetArticlesAsync()
    {
        try
        {
            return await _httpClient.GetFromJsonAsync<List<Article>>(
                $"{ApiBaseUrl}/api/articles?limit=10") ?? new List<Article>();
        }
        catch (Exception ex)
        {
            Console.WriteLine($"Error fetching articles: {ex.Message}");
            return new List<Article>();
        }
    }

    public async Task<Article?> GetArticleByIdAsync(int id)
    {
        try
        {
            return await _httpClient.GetFromJsonAsync<Article>(
                $"{ApiBaseUrl}/api/articles/{id}");
        }
        catch (Exception ex)
        {
            Console.WriteLine($"Error fetching article {id}: {ex.Message}");
            return null;
        }
    }

    public async Task<List<Article>> GetFeaturedArticlesAsync()
    {
        try
        {
            return await _httpClient.GetFromJsonAsync<List<Article>>(
                $"{ApiBaseUrl}/api/articles/featured") ?? new List<Article>();
        }
        catch (Exception ex)
        {
            Console.WriteLine($"Error fetching featured articles: {ex.Message}");
            return new List<Article>();
        }
    }
}
