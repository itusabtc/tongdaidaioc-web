using Microsoft.AspNetCore.Mvc;
using ReverAPI.Models;
using ReverAPI.Services;

namespace ReverAPI.Controllers;

[ApiController]
[Route("api/[controller]")]
public class PropertiesController : ControllerBase
{
    private readonly IPropertyDataService _propertyService;
    private readonly ILogger<PropertiesController> _logger;

    public PropertiesController(IPropertyDataService propertyService, ILogger<PropertiesController> logger)
    {
        _propertyService = propertyService;
        _logger = logger;
    }

    /// <summary>
    /// Get all properties
    /// </summary>
    [HttpGet]
    public async Task<ActionResult<List<Property>>> GetAllProperties()
    {
        var properties = await _propertyService.GetAllPropertiesAsync();
        return Ok(properties);
    }

    /// <summary>
    /// Get properties by type (buy/rent)
    /// </summary>
    [HttpGet("by-type/{type}")]
    public async Task<ActionResult<List<Property>>> GetPropertiesByType(string type)
    {
        if (string.IsNullOrEmpty(type) || (type.ToLower() != "buy" && type.ToLower() != "rent"))
        {
            return BadRequest("Type must be 'buy' or 'rent'");
        }

        var properties = await _propertyService.GetPropertiesByTypeAsync(type);
        return Ok(properties);
    }

    /// <summary>
    /// Search properties with filters
    /// </summary>
    [HttpGet("search")]
    public async Task<ActionResult<List<Property>>> SearchProperties(
        [FromQuery] string? location,
        [FromQuery] string? type,
        [FromQuery] decimal? minPrice,
        [FromQuery] decimal? maxPrice)
    {
        var properties = await _propertyService.SearchPropertiesAsync(location, type, minPrice, maxPrice);
        return Ok(properties);
    }

    /// <summary>
    /// Get featured properties
    /// </summary>
    [HttpGet("featured")]
    public async Task<ActionResult<List<Property>>> GetFeaturedProperties()
    {
        var properties = await _propertyService.GetFeaturedPropertiesAsync();
        return Ok(properties);
    }

    /// <summary>
    /// Get property by ID
    /// </summary>
    [HttpGet("{id}")]
    public async Task<ActionResult<Property>> GetPropertyById(int id)
    {
        if (id <= 0)
            return BadRequest("Invalid property ID");

        var property = await _propertyService.GetPropertyByIdAsync(id);
        if (property == null)
            return NotFound();

        // Increment view count
        await _propertyService.IncrementViewCountAsync(id);

        return Ok(property);
    }

    /// <summary>
    /// Create new property
    /// </summary>
    [HttpPost]
    public async Task<ActionResult<Property>> CreateProperty([FromBody] Property property)
    {
        if (property == null)
            return BadRequest("Property data is required");

        if (string.IsNullOrEmpty(property.Title) || string.IsNullOrEmpty(property.Address))
            return BadRequest("Title and Address are required");

        try
        {
            var createdProperty = await _propertyService.CreatePropertyAsync(property);
            return CreatedAtAction(nameof(GetPropertyById), new { id = createdProperty.Id }, createdProperty);
        }
        catch (Exception ex)
        {
            _logger.LogError(ex, "Error creating property");
            return StatusCode(500, "Error creating property");
        }
    }

    /// <summary>
    /// Update existing property
    /// </summary>
    [HttpPut("{id}")]
    public async Task<ActionResult<Property>> UpdateProperty(int id, [FromBody] Property property)
    {
        if (id <= 0)
            return BadRequest("Invalid property ID");

        if (property == null || property.Id != id)
            return BadRequest("Property ID mismatch");

        var existingProperty = await _propertyService.GetPropertyByIdAsync(id);
        if (existingProperty == null)
            return NotFound();

        try
        {
            var updatedProperty = await _propertyService.UpdatePropertyAsync(property);
            return Ok(updatedProperty);
        }
        catch (Exception ex)
        {
            _logger.LogError(ex, "Error updating property {id}", id);
            return StatusCode(500, "Error updating property");
        }
    }

    /// <summary>
    /// Delete property (soft delete)
    /// </summary>
    [HttpDelete("{id}")]
    public async Task<ActionResult> DeleteProperty(int id)
    {
        if (id <= 0)
            return BadRequest("Invalid property ID");

        var result = await _propertyService.DeletePropertyAsync(id);
        if (!result)
            return NotFound();

        return NoContent();
    }

    /// <summary>
    /// Get total property count
    /// </summary>
    [HttpGet("count")]
    public async Task<ActionResult<int>> GetPropertyCount([FromQuery] string? type)
    {
        var count = await _propertyService.GetTotalPropertyCountAsync(type);
        return Ok(count);
    }
}
