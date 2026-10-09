const Product= require('./model/product');

const products = [
  {
    name: "Wireless Headphones",
    price: 1999,
    img: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e",
    disc: "High-quality wireless headphones with deep bass and 30-hour battery life."
  },
  {
    name: "Smart Watch",
    price: 2499,
    img: "https://images.unsplash.com/photo-1523275335684-37898b6baf30",
    disc: "Smartwatch with fitness tracking, heart rate monitoring, and notifications."
  },
  {
    name: "Running Shoes",
    price: 1799,
    img: "https://images.unsplash.com/photo-1542291026-7eec264c27ff",
    disc: "Lightweight running shoes designed for comfort and everyday workouts."
  },
  {
    name: "Backpack",
    price: 1299,
    img: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62",
    disc: "Spacious everyday backpack with a laptop compartment and durable material."
  },
  {
    name: "Camera",
    price: 45999,
    img: "https://images.unsplash.com/photo-1516035069371-29a1b244cc32",
    disc: "Digital camera for capturing high-resolution photos and stunning videos."
  },
  {
    name: "Sunglasses",
    price: 899,
    img: "https://images.unsplash.com/photo-1511499767150-a48a237f0083",
    disc: "Stylish sunglasses with UV protection, perfect for outdoor activities."
  },
  {
    name: "Gaming Keyboard",
    price: 2999,
    img: "https://images.unsplash.com/photo-1587829741301-dc798b83add3",
    disc: "Mechanical gaming keyboard with responsive keys and RGB lighting."
  },
  {
    name: "Coffee Mug",
    price: 399,
    img: "https://images.unsplash.com/photo-1514228742587-6b1558fcca3d",
    disc: "Minimalist ceramic coffee mug for your morning coffee or evening tea."
  },
  {
    name: "Laptop",
    price: 64999,
    img: "https://images.unsplash.com/photo-1496181133206-80ce9b88a853",
    disc: "Powerful laptop suitable for coding, studying, and everyday productivity."
  },
  {
    name: "Travel Bottle",
    price: 599,
    img: "https://images.unsplash.com/photo-1602143407151-7111542de6e8",
    disc: "Reusable water bottle designed to keep you hydrated throughout the day."
  }
];

async function feed(){
    await Product.insertMany(products);
    console.log("data have been feeded")
}

module.exports=feed;