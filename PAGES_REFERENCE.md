# TDDO Pages Reference - Phase C

## Quick Navigation Guide

### Broker Pages (cho Môi giới)
| Page | URL | Purpose | Key Features |
|------|-----|---------|--------------|
| Broker Landing | `/moi-gioi` | Main broker page | Benefits, pricing tiers, CTA |
| Tools & Features | `/moi-gioi/cong-cu` | Tool showcase | Dashboard, CRM, Ads, Management |
| Marketing Support | `/moi-gioi/marketing` | Marketing help | Strategies, tips, resources |
| Guides & Tutorials | `/moi-gioi/huong-dan` | Learning center | 6 guides, 3 videos, 4 FAQs |
| Community | `/moi-gioi/community` | Broker community | Events, forums, leaderboard |

### Policy Pages (Chính sách)
| Page | URL | Purpose | Sections |
|------|-----|---------|----------|
| Terms of Service | `/chinh-sach/dieu-khoan` | Legal terms | 10 detailed sections |
| Privacy Policy | `/chinh-sach/bao-mat` | Data protection | 10 detailed sections |

### Content Pages (Trang tin)
| Page | URL | Purpose | Features |
|------|-----|---------|----------|
| Articles List | `/tin-tuc` | Blog/news page | 6 articles, categories, sidebar |
| Article Detail | `/tin-tuc/[slug]` | Single article | Full content, author, related |

### Company Pages
| Page | URL | Purpose | Content |
|------|-----|---------|---------|
| About Us | `/ve-chung-toi` | Company info | Mission, values, team, timeline |
| Contact Us | `/lien-he` | Contact form | 4 contact methods, form, FAQ, hours |

### User Pages
| Page | URL | Purpose | Features |
|------|-----|---------|----------|
| My Account | `/tai-khoan` | User dashboard | 4 tabs, listings, saved items |

---

## Page Routing Structure

```
TDDO Website Tree:
│
├── / (Homepage - existing)
│
├── /mua-ban/* (Buy - existing)
├── /cho-thue/* (Rent - existing)
├── /dang-tin (Post - existing)
├── /dang-nhap (Login - existing)
├── /dang-ky (Sign Up - existing)
│
├── /moi-gioi/ (Broker Landing) - NEW
│   ├── /cong-cu (Tools) - NEW
│   ├── /marketing (Marketing) - NEW
│   ├── /huong-dan (Guides) - NEW
│   └── /community (Community) - NEW
│
├── /chinh-sach/ (Policy)
│   ├── /dieu-khoan (Terms) - NEW
│   └── /bao-mat (Privacy) - NEW
│
├── /tin-tuc/ (Articles)
│   ├── / (List) - NEW
│   └── /[slug] (Detail) - NEW
│
├── /tai-khoan/ (Account) - NEW
├── /lien-he (Contact) - NEW
└── /ve-chung-toi (About) - NEW
```

---

## Page Content Sections

### /moi-gioi (Broker Landing)
1. **Hero** - Title, description, 2 CTAs
2. **Benefits** - 4 benefit cards
3. **Features** - 6 feature cards
4. **Pricing** - 3 pricing tiers
5. **CTA** - Community invitation

**Lines of Code**: 251

### /moi-gioi/cong-cu (Tools)
1. **Hero** - Title, description
2. **Tools Grid** - 4 tool cards
3. **Documentation** - 3 guide cards
4. **CTA** - Sign up button

**Lines of Code**: 131

### /moi-gioi/marketing (Marketing)
1. **Hero** - Title
2. **Strategies** - 4 strategy cards
3. **Tips** - 3 tips cards with sub-items
4. **Resources** - 4 downloadable resources
5. **CTA** - Consultation button

**Lines of Code**: 175

### /moi-gioi/huong-dan (Guides)
1. **Hero** - Title
2. **Guides** - 6 guide cards with sections
3. **Video Tutorials** - 3 video cards
4. **FAQ Section** - 4 FAQ items
5. **CTA** - Support contact

**Lines of Code**: 241

### /moi-gioi/community (Community)
1. **Hero** - Title with CTA
2. **Stats** - 4 statistics
3. **Events** - 3 upcoming events
4. **Forums** - 3 forum categories
5. **Top Brokers** - 3 leaderboard
6. **Benefits** - 3 benefit icons
7. **CTA** - Sign up button

**Lines of Code**: 261

### /chinh-sach/dieu-khoan (Terms)
1. **Title** - Page title
2. **10 Sections** - Complete terms of service
3. **CTA** - Agreement buttons

**Lines of Code**: 175

### /chinh-sach/bao-mat (Privacy)
1. **Title** - Page title
2. **10 Sections** - Complete privacy policy
3. **CTA** - Acknowledgment section

**Lines of Code**: 195

### /ve-chung-toi (About)
1. **Hero** - Title
2. **Mission & Vision** - 2 cards
3. **Values** - 3 value cards
4. **Milestones** - 5 timeline items
5. **Team** - 3 team member cards
6. **Stats** - 4 achievement numbers
7. **CTA** - Careers button

**Lines of Code**: 206

### /lien-he (Contact)
1. **Hero** - Title
2. **Contact Cards** - 4 contact methods
3. **Contact Form** - 6 form fields
4. **FAQ** - 4 frequently asked questions
5. **Hours** - Operating hours widget

**Lines of Code**: 232

### /tin-tuc (Articles)
1. **Hero** - Title
2. **Categories Sidebar** - 5 categories
3. **Articles Grid** - 6 article cards
4. **Pagination** - 5 page buttons

**Lines of Code**: 194

### /tin-tuc/[slug] (Article Detail)
1. **Header** - Title, meta (author, date, views)
2. **Content** - Article with sections
3. **Share** - Social share buttons
4. **Author Card** - Author information
5. **Related** - 3 related articles
6. **CTA** - Search button

**Lines of Code**: 186

### /tai-khoan (Account)
1. **Hero** - Page title
2. **Sidebar** - User info + 5 menu items
3. **Main Content**:
   - Alert box
   - 4 tabs (Listings, Saved, Contacts, Activity)
   - Tab-specific content

**Lines of Code**: 257

---

## Shared Components Used

All pages use these components:
- **Header** (`components/header.tsx`) - Navigation with mega menu
- **Footer** (`components/footer.tsx`) - Links, contacts, social
- **JSON-LD Schemas** (`components/json-ld.tsx`) - SEO

---

## Design System Colors

**Primary**: `#1E3A5F` (Navy)  
**Accent**: `#F2922E` (Orange)  
**Background**: White  
**Text**: Gray-700 (body), Primary (headings)  

---

## Total Phase C Stats

- **Pages Created**: 13
- **Total Lines of Code**: 2,405+
- **Components**: 1 new (JSON-LD)
- **Routes Added**: 13
- **SEO Schemas**: 8 types
- **Time Estimate**: 4-6 hours

---

## Backend Ready Checkpoints

Pages waiting for backend:
- ✅ `/tin-tuc` - Needs article list API
- ✅ `/tin-tuc/[slug]` - Needs article detail API
- ✅ `/tai-khoan` - Needs user session
- ✅ `/lien-he` - Needs contact form submission

Forms ready for API:
- Contact form at `/lien-he`
- User profile at `/tai-khoan`
- Filter form at `/tin-tuc`

---

## Next Steps

1. **Generate Images** - Create og-image.jpg and favicons
2. **Setup Backend** - Database and API endpoints
3. **Integration** - Connect forms to APIs
4. **Testing** - E2E tests and SEO validation
5. **Deployment** - Push to Vercel

---

**Frontend Phase C**: ✅ COMPLETE  
**Ready for**: Backend integration and API development  
**Estimated Completion**: 2-3 weeks with backend team

