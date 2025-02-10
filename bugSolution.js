// pages/products/[productId]/page.js (server component)

export default async function ProductPage({params}) {
  const { productId } = params;

  // Check if productId is available
  if (!productId) {
    return <p>Product ID not found!</p> //or redirect
  }

  try {
    const res = await fetch(`https://api.example.com/products/${productId}`);
    if (!res.ok) {
      // Handle HTTP errors
      throw new Error(`HTTP error! status: ${res.status}`);
    }
    const data = await res.json();
    // ... use data
  } catch (error) {
    console.error('Error fetching data:', error);
    return <p>Error loading product data. Please try again later.</p>;
  }
}
