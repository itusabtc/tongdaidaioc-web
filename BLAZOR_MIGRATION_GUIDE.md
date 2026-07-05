# Rever Blazor WebAssembly Migration Guide

Hướng dẫn chuyển đổi từ Next.js React sang C# Blazor WebAssembly (Full-Stack .NET)

## 📋 Tổng Quan

Dự án đã được chuyển đổi từ **Next.js React** sang **Blazor WebAssembly + .NET API**. Kiến trúc mới bao gồm:

- **Frontend:** Blazor WebAssembly (.NET 9) - Chạy trong trình duyệt
- **Backend:** ASP.NET Core API - Cung cấp dữ liệu
- **Database:** SQL Server / PostgreSQL (tùy chọn)
- **Styling:** Tailwind CSS (giữ nguyên từ React version)

## 🏗️ Project Structure

```
ReverBlazor/
├── Blazor/
│   ├── Components/
│   │   ├── Header.razor
│   │   ├── Footer.razor
│   │   ├── HeroSearch.razor
│   │   ├── FeaturesSection.razor
│   │   ├── PropertiesSection.razor
│   │   ├── NewsSection.razor
│   │   ├── AppDownloadSection.razor
│   │   ├── RecentlyViewedSection.razor
│   │   ├── LocationBrowseSection.razor
│   │   └── PropertyCard.razor
│   ├── Pages/
│   │   ├── Index.razor (Homepage)
│   │   ├── WhyChooseRever.razor
│   │   └── PropertyDetail.razor
│   ├── Shared/
│   │   └── MainLayout.razor
│   ├── Models/
│   │   ├── Property.cs
│   │   └── Article.cs
│   ├── Services/
│   │   ├── PropertyService.cs
│   │   └── ArticleService.cs
│   ├── App.razor (Root component)
│   ├── Program.cs (Dependency Injection setup)
│   └── ReverBlazor.csproj
├── API/ (Backend - tạo sau)
│   ├── Controllers/
│   │   ├── PropertiesController.cs
│   │   └── ArticlesController.cs
│   ├── Models/
│   ├── Data/
│   └── appsettings.json
└── README.md
```

## 🚀 Bắt Đầu

### 1. Cài đặt .NET 9 SDK
```bash
# Windows
winget install Microsoft.DotNet.SDK.9

# macOS
brew install dotnet@9

# Linux
sudo apt-get install dotnet-sdk-9.0
```

### 2. Tạo Solution
```bash
dotnet new globaljson --sdk-version 9.0.0 --roll-forward latestFeature
```

### 3. Chạy Blazor WebAssembly App
```bash
cd Blazor
dotnet watch run
```

Ứng dụng sẽ chạy tại: `https://localhost:5001`

## 📚 Key Components Conversion

### React → Blazor Conversion Patterns

#### React Component
```jsx
export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  
  return (
    <header>
      <nav>...</nav>
    </header>
  );
}
```

#### Blazor Component (.razor)
```csharp
@page "/header"

<header>
    <nav>...</nav>
</header>

@code {
    private bool IsOpen = false;
    
    private void ToggleMenu() {
        IsOpen = !IsOpen;
    }
}
```

### Key Differences

| Aspect | React | Blazor |
|--------|-------|--------|
| File Extension | `.jsx` / `.tsx` | `.razor` |
| Imports | `import` statements | `@using` directives |
| Props | Function parameters | `[Parameter]` public properties |
| State | `useState()` hook | `@code` block variables |
| Effects | `useEffect()` hook | `OnInitializedAsync()` method |
| Styling | className | `class` or `@style` |
| Events | `onClick`, `onChange` | `@onclick`, `@onchange` |
| Rendering | JSX | HTML + C# mix |

## 🔄 Component Migration

### Header Component
- ✅ Dark background with dropdown menus
- ✅ Mobile responsive navigation
- ✅ Logo and auth buttons
- ✅ Language selector

**File:** `Components/Header.razor`

### Footer Component
- ✅ Contact section (top with 5 columns)
- ✅ Company info & links
- ✅ Service & product links
- ✅ Social media icons

**File:** `Components/Footer.razor`

### Hero Search Component
- ✅ Full-height banner with background image
- ✅ Buy/Rent tabs
- ✅ Location search input
- ✅ Quick filter pills with remove functionality
- ✅ Property count display

**File:** `Components/HeroSearch.razor` (to be created)

### Features Section
- ✅ 4-column grid with icons
- ✅ "Learn More" button
- ✅ Responsive on mobile

**File:** `Components/FeaturesSection.razor` (to be created)

### Properties Listing
- ✅ Grid layout (4 cols → 2 cols → 1 col)
- ✅ Property cards with images
- ✅ Price, area, beds/baths with icons
- ✅ Exclusive badges
- ✅ Hover effects

**File:** `Components/PropertiesSection.razor` & `Components/PropertyCard.razor` (to be created)

## 🔌 Services & Data Management

### PropertyService
Handles all property-related API calls:
- `GetBuyPropertiesAsync()` - Fetch buy listings
- `GetRentPropertiesAsync()` - Fetch rent listings
- `SearchPropertiesAsync()` - Search with filters
- `GetPropertyByIdAsync()` - Get single property details
- `CreatePropertyAsync()` - Create new listing
- `UpdatePropertyAsync()` - Update property
- `DeletePropertyAsync()` - Delete property

### ArticleService
Handles article/news API calls:
- `GetArticlesAsync()` - Fetch all articles
- `GetArticleByIdAsync()` - Get single article
- `GetFeaturedArticlesAsync()` - Fetch featured articles

**Usage in Components:**
```csharp
@inject IPropertyService PropertyService

@code {
    private List<Property> Properties = new();

    protected override async Task OnInitializedAsync()
    {
        Properties = await PropertyService.GetBuyPropertiesAsync();
    }
}
```

## 🔐 Authentication (Next Steps)

Add authentication using:
- **Option 1:** Blazor authentication with JWT tokens
- **Option 2:** Azure AD / Identity Server
- **Option 3:** Third-party OAuth (Google, Facebook)

## 🗄️ Backend API Setup (Next Steps)

Create ASP.NET Core API project:

```bash
dotnet new webapi -n ReverAPI
cd ReverAPI
```

### Controllers to Create
1. **PropertiesController** - CRUD operations for properties
2. **ArticlesController** - CRUD for articles
3. **AuthController** - User authentication
4. **SearchController** - Advanced search functionality

### Example API Endpoint
```csharp
[ApiController]
[Route("api/[controller]")]
public class PropertiesController : ControllerBase
{
    private readonly IPropertyService _service;

    [HttpGet]
    public async Task<ActionResult<List<Property>>> GetProperties()
    {
        var properties = await _service.GetAllAsync();
        return Ok(properties);
    }

    [HttpPost]
    public async Task<ActionResult<Property>> CreateProperty(Property property)
    {
        await _service.CreateAsync(property);
        return CreatedAtAction(nameof(GetPropertyById), new { id = property.Id }, property);
    }
}
```

## 📱 Responsive Design

Tailwind CSS classes used:
- `grid-cols-1` → mobile
- `md:grid-cols-2` → tablet
- `lg:grid-cols-4` → desktop
- `hidden lg:flex` → show on large screens

## 🎨 Styling

### Colors (Rever Brand)
- **Primary Red:** `#D32F2F` (`bg-red-600`, `text-red-600`)
- **Dark Bg:** `#000000` (`bg-black`)
- **Text Primary:** `#1A1A1A` (`text-gray-900`)
- **Accent Cyan:** `#00BCD4` (`text-cyan-400`)

### Tailwind Classes vs Inline Styles
```csharp
<!-- ✅ Preferred: Tailwind classes -->
<div class="px-4 py-2 bg-red-600 text-white rounded">Button</div>

<!-- ❌ Avoid: Inline styles -->
<div style="padding: 8px 16px; background: red; color: white;">Button</div>

<!-- ✅ Dynamic classes with @style -->
<div @style="GetButtonStyle()">Button</div>
```

## 🔍 SEO Optimization

Blazor WebAssembly supports SEO through:
1. **Meta tags in App.razor** - Title, description, OG tags
2. **Prerendering** - Static HTML generation at build time
3. **Structured data** - JSON-LD schemas
4. **Dynamic meta updates** - via `PageTitle` component

```csharp
@page "/products/{id:int}"
@implements IAsyncDisposable
@inject PageTitleProvider PageTitleProvider

<PageTitle>@productTitle</PageTitle>

@code {
    [Parameter]
    public int Id { get; set; }
    
    private string productTitle = "";
    
    protected override async Task OnInitializedAsync()
    {
        productTitle = "Product Details - Rever";
    }
}
```

## 🧪 Testing

Add unit tests:
```bash
dotnet new xunit -n ReverBlazor.Tests
dotnet add ReverBlazor.Tests reference ReverBlazor
```

Example test:
```csharp
[Fact]
public async Task PropertyService_GetBuyProperties_ReturnsValidList()
{
    // Arrange
    var service = new PropertyService(httpClient);
    
    // Act
    var result = await service.GetBuyPropertiesAsync();
    
    // Assert
    Assert.NotNull(result);
    Assert.NotEmpty(result);
}
```

## 📦 Building for Production

### Build Blazor WebAssembly
```bash
dotnet publish -c Release
```

Output: `bin/Release/net9.0/publish/wwwroot/`

### Deploy to Azure
```bash
az staticwebapp create --name ReverBlazor \
  --source-location "Blazor" \
  --resource-group "MyRG"
```

### Deploy to Vercel (Static Host)
```bash
npm install -g vercel
vercel deploy bin/Release/net9.0/publish/wwwroot/
```

## 🐛 Debugging

### Browser DevTools
- F12 → Application tab → see Blazor debug files
- Console for JavaScript interop errors

### .NET Debugging
```bash
dotnet watch run --no-restore
```

Set breakpoints in `.razor` files and use Visual Studio/VS Code debugger

## 📖 Resources

- **Official Docs:** https://learn.microsoft.com/blazor
- **Tailwind CSS:** https://tailwindcss.com
- **Blazor Components:** https://learn.microsoft.com/en-us/aspnet/core/blazor/components
- **HTTP Requests:** https://learn.microsoft.com/aspnet/core/blazor/call-web-api

## ✅ Next Steps

1. ✅ Create remaining `.razor` components
2. ⏳ Setup ASP.NET Core API backend
3. ⏳ Configure database (Entity Framework Core)
4. ⏳ Implement authentication & authorization
5. ⏳ Add form validation
6. ⏳ Setup deployment pipeline
7. ⏳ Performance optimization
8. ⏳ SEO improvements with prerendering

---

**Project Status:** Blazor WebAssembly frontend structure complete. Backend API setup ready for implementation.
