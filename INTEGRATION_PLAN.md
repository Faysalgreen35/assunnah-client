# Frontend-Backend Integration Plan

**Status:** Ready for integration  
**Backend URL:** http://localhost:5001/api/v1  
**Frontend Setup:** RTK Query with Redux, API services in place

---

## Current State

### ✅ Already Set Up
- API base configuration (baseApi.ts, constants)
- Wishlist API endpoints (wishlistApi.ts) - **ready but needs UI update**
- Product API endpoints (productApi.ts)
- Auth API endpoints (authApi.ts)
- Blog API endpoints (blogApi.ts)
- Redux store with auth state
- OCCASION_TAGS and RECIPIENT_TAGS defined in constants

### ❌ Missing / Need Update

#### 1. **Wishlist Page Integration**
- **Current:** Uses local state (useWishlist hook from localStorage)
- **Need:** Connect to backend API (useGetWishlistQuery, useAddToWishlistMutation, useRemoveFromWishlistMutation)
- **File:** `src/app/wishlist/page.tsx`

#### 2. **Product Filtering (Occasions & Recipients)**
- **Current:** No UI for filtering by occasion/recipient
- **Need:** 
  - Add filter component to collections page
  - Add query parameters to product API calls
  - Update productApi.ts to include occasion/recipient filters
- **Files:** 
  - `src/app/collections/[slug]/page.tsx`
  - `src/services/api/productApi.ts`

#### 3. **Product Personalization**
- **Current:** No personalization UI
- **Need:**
  - Show personalization options on product detail page
  - Capture personalization notes in cart/checkout
  - Pass personalization data to order creation
- **Files:**
  - `src/app/products/[slug]/page.tsx`
  - `src/app/cart/page.tsx`
  - `src/app/checkout/page.tsx`
  - `src/services/api/orderApi.ts`

#### 4. **Product Video Support**
- **Current:** No video preview functionality
- **Need:**
  - Display video on product detail page
  - Add video player component
  - Handle video URL from backend
- **Files:**
  - `src/app/products/[slug]/page.tsx`
  - Create new component: `src/components/product/VideoPreview.tsx`

#### 5. **Returns & Refunds**
- **Current:** Return policy page (static)
- **Need:**
  - Create return request submission form
  - Connect to return API endpoints
  - Show return status on orders page
  - Admin return management page
- **Files:**
  - Create: `src/services/api/returnApi.ts`
  - Create: `src/app/returns/page.tsx`
  - Update: `src/app/orders/page.tsx`

#### 6. **Blog & FAQ Integration**
- **Current:** Static blog and FAQ pages
- **Need:**
  - Fetch blog posts from backend
  - Fetch FAQ items from backend
  - Update pages to use API queries
- **Files:**
  - `src/app/blog/page.tsx`
  - `src/app/blog/[slug]/page.tsx`
  - `src/app/faq/page.tsx`
  - Create: `src/services/api/faqApi.ts`

#### 7. **Cart/Checkout Enhancement**
- **Current:** Basic cart without personalization
- **Need:**
  - Add personalization note fields in cart items
  - Update order payload to include personalization data
  - Display personalization info in checkout review
- **Files:**
  - `src/app/cart/page.tsx`
  - `src/app/checkout/page.tsx`

---

## Backend API Endpoints (Already Implemented)

### Wishlist
- `GET /api/v1/wishlist` — Get user's wishlist
- `POST /api/v1/wishlist/:productId` — Add product
- `DELETE /api/v1/wishlist/:productId` — Remove product

### Products (Enhanced)
- `GET /api/v1/product?occasions=Wedding` — Filter by occasion
- `GET /api/v1/product?recipients=Kids` — Filter by recipient
- Supports: videoUrl, isPersonalizable, personalizationOptions[]

### Returns
- `POST /api/v1/return` — Create return request
- `GET /api/v1/return/my` — Get user's returns
- `GET /api/v1/return` — Admin view all returns
- `PATCH /api/v1/return/:id/status` — Admin approve/reject

### Blog
- `GET /api/v1/blog` — List posts
- `GET /api/v1/blog/:slug` — Single post
- Admin endpoints: POST, PATCH, DELETE

### FAQ (To implement if not exists)
- `GET /api/v1/faq` — List FAQs
- `GET /api/v1/faq?category=Shipping` — Filter by category

---

## Implementation Priority

### Phase 1 (High Priority - Do First)
1. Update Wishlist page to use backend API
2. Add occasion/recipient filter UI to collections
3. Update product API calls to support filters

### Phase 2 (Medium Priority)
1. Add product video preview component
2. Add personalization UI to product details
3. Update cart/checkout for personalization

### Phase 3 (Lower Priority)
1. Implement Returns page
2. Update Blog/FAQ to use backend APIs
3. Add admin return management

---

## Testing Checklist

Before marking as complete:
- [ ] Wishlist API calls work correctly
- [ ] Can add/remove products from wishlist
- [ ] Occasion/recipient filters work
- [ ] Product personalization captures data
- [ ] Videos display if URL exists
- [ ] Cart shows personalization notes
- [ ] Blog posts fetch from backend
- [ ] FAQ items fetch from backend
- [ ] Return requests can be submitted and viewed
- [ ] All API responses handle errors properly

---

## Notes
- Redux store should handle loading/error states
- Use invalidateTags pattern for cache management
- All API mutations should include proper error handling
- Consider skeleton loaders for async data
