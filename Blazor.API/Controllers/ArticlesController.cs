using Microsoft.AspNetCore.Mvc;
using ReverAPI.Models;
using ReverAPI.Services;

namespace ReverAPI.Controllers;

[ApiController]
[Route("api/[controller]")]
public class ArticlesController : ControllerBase
{
    private readonly IArticleDataService _articleService;
    private readonly ILogger<ArticlesController> _logger;

    public ArticlesController(IArticleDataService articleService, ILogger<ArticlesController> logger)
    {
        _articleService = articleService;
        _logger = logger;
    }

    /// <summary>
    /// Get all articles
    /// </summary>
    [HttpGet]
    public async Task<ActionResult<List<Article>>> GetAllArticles()
    {
        var articles = await _articleService.GetAllArticlesAsync();
        return Ok(articles);
    }

    /// <summary>
    /// Get featured articles
    /// </summary>
    [HttpGet("featured")]
    public async Task<ActionResult<List<Article>>> GetFeaturedArticles()
    {
        var articles = await _articleService.GetFeaturedArticlesAsync();
        return Ok(articles);
    }

    /// <summary>
    /// Get articles by category
    /// </summary>
    [HttpGet("category/{category}")]
    public async Task<ActionResult<List<Article>>> GetArticlesByCategory(string category)
    {
        if (string.IsNullOrEmpty(category))
            return BadRequest("Category is required");

        var articles = await _articleService.GetArticlesByCategoryAsync(category);
        return Ok(articles);
    }

    /// <summary>
    /// Get article by ID
    /// </summary>
    [HttpGet("{id}")]
    public async Task<ActionResult<Article>> GetArticleById(int id)
    {
        if (id <= 0)
            return BadRequest("Invalid article ID");

        var article = await _articleService.GetArticleByIdAsync(id);
        if (article == null)
            return NotFound();

        return Ok(article);
    }

    /// <summary>
    /// Create new article
    /// </summary>
    [HttpPost]
    public async Task<ActionResult<Article>> CreateArticle([FromBody] Article article)
    {
        if (article == null)
            return BadRequest("Article data is required");

        if (string.IsNullOrEmpty(article.Title) || string.IsNullOrEmpty(article.Content))
            return BadRequest("Title and Content are required");

        try
        {
            var createdArticle = await _articleService.CreateArticleAsync(article);
            return CreatedAtAction(nameof(GetArticleById), new { id = createdArticle.Id }, createdArticle);
        }
        catch (Exception ex)
        {
            _logger.LogError(ex, "Error creating article");
            return StatusCode(500, "Error creating article");
        }
    }

    /// <summary>
    /// Update article
    /// </summary>
    [HttpPut("{id}")]
    public async Task<ActionResult<Article>> UpdateArticle(int id, [FromBody] Article article)
    {
        if (id <= 0)
            return BadRequest("Invalid article ID");

        if (article == null || article.Id != id)
            return BadRequest("Article ID mismatch");

        var existingArticle = await _articleService.GetArticleByIdAsync(id);
        if (existingArticle == null)
            return NotFound();

        try
        {
            var updatedArticle = await _articleService.UpdateArticleAsync(article);
            return Ok(updatedArticle);
        }
        catch (Exception ex)
        {
            _logger.LogError(ex, "Error updating article {id}", id);
            return StatusCode(500, "Error updating article");
        }
    }

    /// <summary>
    /// Delete article (soft delete)
    /// </summary>
    [HttpDelete("{id}")]
    public async Task<ActionResult> DeleteArticle(int id)
    {
        if (id <= 0)
            return BadRequest("Invalid article ID");

        var result = await _articleService.DeleteArticleAsync(id);
        if (!result)
            return NotFound();

        return NoContent();
    }
}
