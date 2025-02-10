In Next.js 15, an uncommon error can occur when using the `app` directory and server components with dynamic routes and data fetching.  If you attempt to use a fetch call within a server component's `async` function to retrieve data that depends on a dynamic route segment, and the route segment is not available, the component might throw an error. This is because the dynamic route parameter might not be fully resolved when the server component attempts to make the API call.

For example:
```javascript
// pages/products/[productId]/page.js (server component)

export default async function ProductPage({params}) {
  const { productId } = params;
  const res = await fetch(`https://api.example.com/products/${productId}`);
  const data = await res.json();
  // ...
}
```
If `productId` is not passed correctly or resolved before the fetch call, this will throw an error.