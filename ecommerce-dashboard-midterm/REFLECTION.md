# Reflection

### 1. Routing Mapping

While developing the application, I learned how organizing routes in the **App Router** helps separate different functionalities based on their purpose. The `app/` directory serves as the foundation for the project by containing the root layout and global styles. The `app/dashboard/` route was designed for server-side rendering since it displays dynamic administrative data. The `app/products/` directory provides a statically generated product catalog, while `app/products/[id]/` uses dynamic routing with `generateStaticParams()` to pre-render individual product pages. The `app/posts/` route demonstrates Incremental Static Regeneration (ISR) by periodically refreshing content without requiring a full rebuild. Finally, `app/todos/` and `app/cart/` rely on client-side rendering because they involve user interactions and browser-based state management.

### 2. Rendering Justification

Choosing the appropriate rendering strategy for each route helped improve both performance and user experience. I used **Server-Side Rendering (SSR)** for the dashboard because it requires up-to-date information from multiple API sources, making fresh server-rendered data essential. The product listing and product detail pages use **Static Site Generation (SSG)** since the product data remains relatively stable and benefits from fast loading through pre-rendering. For the posts page, I implemented **Incremental Static Regeneration (ISR)** so that content can update automatically after a specified revalidation period without rebuilding the entire application. Meanwhile, the todos page and shopping cart use **Client-Side Rendering (CSR)** because they depend on immediate user interactions and browser-specific storage, making client rendering the most suitable approach.

### 3. Caching and Optimization

Implementing different caching strategies allowed me to optimize the application's performance according to the needs of each page. The dashboard uses `cache: "no-store"` together with `dynamic = "force-dynamic"` to ensure that users always receive the latest server data. The posts page utilizes `revalidate = 60`, enabling ISR to refresh content every 60 seconds while still benefiting from caching. For the product pages, I used `dynamic = "force-static"` along with `generateStaticParams()` so that pages are generated during build time and served efficiently through caching. I also improved performance by using `Promise.all()` in the dashboard to fetch multiple API resources simultaneously instead of sequentially, reducing unnecessary waiting time and avoiding request waterfalls.

### 4. Server and Client Component Boundaries

Working with both server and client components helped me understand when browser-side execution is necessary. Components such as `add-to-cart-button.tsx` and `cart-context.tsx` include the `"use client"` directive because they manage interactive features and store data in `localStorage`, which is only available in the browser. Keeping these components on the client side allows the cart to update instantly while preserving user data across sessions. At the same time, leaving data-heavy pages on the server reduces unnecessary client processing and provides a more efficient overall architecture.
