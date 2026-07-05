# V0 + Claude Workflow Guide

## Phân chia công việc

### V0 (Frontend - Blazor WebAssembly)
- ✅ Tạo UI components (.razor)
- ✅ Styling với Tailwind CSS
- ✅ Layout & responsive design
- ✅ User interactions & state
- ✅ HttpClient API calls (skeleton)

### Claude (Backend - API Optimization)
- ✅ API endpoints (Controllers)
- ✅ Database schema & migrations
- ✅ Authentication & authorization
- ✅ Business logic & validation
- ✅ Error handling & logging
- ✅ Performance optimization
- ✅ Testing & documentation

---

## Project Structure (Blazor Full-Stack)

```
ReverBlazor/
├── Blazor/                          # Frontend (V0 creates this)
│   ├── Program.cs                   # Entry point
│   ├── App.razor                    # Root component
│   ├── wwwroot/
│   │   ├── css/
│   │   │   └── app.css             # Tailwind CSS
│   │   ├── index.html              # HTML shell
│   │   └── js/
│   ├── Shared/
│   │   ├── MainLayout.razor        # Main layout
│   │   └── NavMenu.razor           # Navigation
│   ├── Components/                 # V0 creates these
│   │   ├── Header.razor
│   │   ├── Footer.razor
│   │   ├── HeroSearch.razor
│   │   ├── FeaturesSection.razor
│   │   ├── PropertyCard.razor
│   │   ├── PropertiesSection.razor
│   │   ├── NewsSection.razor
│   │   ├── AppDownloadSection.razor
│   │   └── ...
│   ├── Pages/
│   │   ├── Index.razor             # Homepage
│   │   ├── WhyChooseRever.razor    # About page
│   │   └── ...
│   ├── Services/
│   │   ├── PropertyService.cs      # HTTP calls to API
│   │   └── ArticleService.cs
│   └── Models/
│       ├── Property.cs
│       └── Article.cs
│
├── Blazor.API/                      # Backend (Claude optimizes this)
│   ├── Program.cs                   # API configuration
│   ├── Data/
│   │   └── ReverDbContext.cs       # EF Core context
│   ├── Models/
│   │   └── ApiModels.cs            # Database entities
│   ├── Controllers/
│   │   ├── PropertiesController.cs
│   │   └── ArticlesController.cs
│   ├── Services/
│   │   ├── IPropertyDataService.cs
│   │   └── PropertyDataService.cs  # Business logic
│   ├── Middleware/
│   │   └── ErrorHandling.cs        # Global error handling
│   ├── appsettings.json            # Config
│   └── appsettings.Development.json
│
└── ReverBlazor.sln                  # Solution file
```

---

## Workflow Steps

### Phase 1: V0 Frontend Development (Current)
1. **Hoàn thiện Blazor Components**
   - [x] Header.razor (Header navigation)
   - [x] Footer.razor (Footer with links)
   - [x] HeroSearch.razor (Search banner)
   - [x] FeaturesSection.razor (4-feature grid)
   - [x] PropertyCard.razor (Single property)
   - [x] PropertiesSection.razor (Property grid)
   - [ ] AppDownloadSection.razor (App promotion)
   - [ ] RecentlyViewedSection.razor (Recently viewed)
   - [ ] NewsSection.razor (Articles/news)
   - [ ] LocationBrowseSection.razor (Location links)

2. **Pages**
   - [x] Index.razor (Homepage)
   - [ ] WhyChooseRever.razor (About page)
   - [ ] Property detail page
   - [ ] Search results page

3. **Services**
   - [x] PropertyService.cs (API calls)
   - [x] ArticleService.cs (Article API calls)
   - [ ] Add authentication service
   - [ ] Add caching service

### Phase 2: Claude Backend Optimization (Next)
1. **Database Setup**
   - Design schema migrations
   - Implement seed data
   - Add indices & constraints

2. **API Enhancement**
   - Add validation & error handling
   - Implement caching layer
   - Add logging & monitoring
   - Security hardening

3. **Features**
   - User authentication (JWT)
   - Search/filtering optimization
   - Image upload handling
   - Email notifications

4. **Testing & Documentation**
   - Unit tests
   - Integration tests
   - API documentation (Swagger)

---

## Integration Points

### Frontend → Backend Communication

**PropertyService.cs** (Frontend makes HTTP calls):
```csharp
// V0 creates this
public class PropertyService
{
    private readonly HttpClient _httpClient;
    
    public async Task<List<Property>> GetPropertiesAsync()
    {
        return await _httpClient.GetFromJsonAsync<List<Property>>("/api/properties");
    }
}
```

**PropertiesController.cs** (Backend responds):
```csharp
// Claude optimizes this
[ApiController]
[Route("api/[controller]")]
public class PropertiesController : ControllerBase
{
    [HttpGet]
    public async Task<ActionResult<List<Property>>> GetProperties()
    {
        // Business logic here
    }
}
```

### Configuration Exchange Points
- **Base API URL**: Frontend points to Backend
- **Authentication tokens**: JWT stored in browser
- **CORS settings**: Allow frontend domain
- **Error codes**: Consistent error handling

---

## Development Checklist

### For V0 (Frontend)
- [ ] All components created (.razor files)
- [ ] Responsive design tested (mobile, tablet, desktop)
- [ ] Styling complete with Tailwind CSS
- [ ] Service calls ready (pointing to /api/*)
- [ ] Pages routable and working
- [ ] No console errors
- [ ] Project builds successfully

### For Claude (Backend)
- [ ] API endpoints tested
- [ ] Database migrations working
- [ ] Authentication implemented
- [ ] Input validation added
- [ ] Error handling complete
- [ ] Logging implemented
- [ ] Tests passing (unit + integration)
- [ ] Swagger docs generated
- [ ] Performance optimized
- [ ] Security audit passed

---

## Running Locally

### Prerequisites
- .NET 9 SDK
- Visual Studio / VS Code with C# extension
- SQL Server (or LocalDB)

### Frontend (Blazor WebAssembly)
```bash
cd Blazor
dotnet run
# Access at http://localhost:5000
```

### Backend (ASP.NET Core API)
```bash
cd Blazor.API
dotnet run
# API at http://localhost:5001
```

### Both Together
```bash
# Terminal 1: Backend
cd Blazor.API && dotnet run

# Terminal 2: Frontend
cd Blazor && dotnet run
```

---

## File Handoff to Claude

When done with V0 frontend, provide Claude with:

1. **Project Files**
   - ReverBlazor.sln
   - All .razor files
   - appsettings.json

2. **Key Info**
   - Database schema design
   - API endpoint requirements
   - Authentication approach
   - Performance targets
   - Security requirements

3. **Reference**
   - This workflow document
   - Component interaction diagrams
   - API contract specs

---

## Tips for Smooth Integration

1. **Keep Frontend & Backend Separate**
   - Frontend calls `/api/*` endpoints only
   - Backend doesn't render UI

2. **Use DTOs for API Responses**
   - Don't expose database models directly
   - Cleaner API contracts

3. **Consistent Naming**
   - Property IDs match between frontend & backend
   - API response field names match model properties

4. **Documentation**
   - Keep API endpoints documented
   - Component interfaces clear
   - Service method signatures stable

5. **Testing Early**
   - Test API endpoints before frontend integration
   - Use Postman/Insomnia for API testing
   - Integration tests for full flow

---

## Next Steps

1. ✅ V0 completes all Blazor frontend components
2. ✅ Test frontend thoroughly
3. → Hand off to Claude for backend optimization
4. → Claude sets up database & API
5. → Integration & end-to-end testing
6. → Deploy to production
