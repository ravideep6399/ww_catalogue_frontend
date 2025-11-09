import HeroSection from "../components/home/HeroSection";
import ProductSlider from "../components/home/ProductSlider";

const Home = () => {
  // First product grid - Featured Products
  const featuredProducts = [
    { id: 1, title: "Product Title 1", price: "$29.99", image: "", description: "Premium quality product with excellent craftsmanship and design." },
    { id: 2, title: "Product Title 2", price: "$39.99", image: "", description: "Stylish and modern design perfect for everyday use." },
    { id: 3, title: "Product Title 3", price: "$49.99", image: "", description: "High-quality materials with attention to detail." },
    { id: 4, title: "Product Title 4", price: "$59.99", image: "", description: "Elegant design that combines style and functionality." },
    { id: 5, title: "Product Title 5", price: "$69.99", image: "", description: "Durable construction built to last for years." },
    { id: 6, title: "Product Title 6", price: "$79.99", image: "", description: "Trendy design that stands out from the crowd." },
    { id: 7, title: "Product Title 7", price: "$89.99", image: "", description: "Comfortable fit with premium materials." },
    { id: 8, title: "Product Title 8", price: "$99.99", image: "", description: "Versatile design suitable for various occasions." },
    { id: 9, title: "Product Title 9", price: "$109.99", image: "", description: "Classic style with modern updates." },
    { id: 10, title: "Product Title 10", price: "$119.99", image: "", description: "Luxury design with exceptional quality." },
  ];

  // Second product grid - New Arrivals
  const newArrivals = [
    { id: 11, title: "New Product 1", price: "$24.99", image: "", description: "Latest arrival with fresh design and modern appeal." },
    { id: 12, title: "New Product 2", price: "$34.99", image: "", description: "New collection item with unique features." },
    { id: 13, title: "New Product 3", price: "$44.99", image: "", description: "Just arrived - limited edition design." },
    { id: 14, title: "New Product 4", price: "$54.99", image: "", description: "Fresh style with contemporary aesthetics." },
    { id: 15, title: "New Product 5", price: "$64.99", image: "", description: "New release with innovative design." },
    { id: 16, title: "New Product 6", price: "$74.99", image: "", description: "Latest addition to our collection." },
    { id: 17, title: "New Product 7", price: "$84.99", image: "", description: "Brand new with cutting-edge style." },
    { id: 18, title: "New Product 8", price: "$94.99", image: "", description: "Recently added - popular choice." },
    { id: 19, title: "New Product 9", price: "$104.99", image: "", description: "New arrival with premium features." },
    { id: 20, title: "New Product 10", price: "$114.99", image: "", description: "Latest trend with exceptional quality." },
  ];

  return (
    <div className="min-h-screen bg-white">
      <HeroSection />

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-8 py-12">
        <ProductSlider title="Featured Products" products={featuredProducts} />
        <ProductSlider title="New Arrivals" products={newArrivals} />
      </div>
    </div>
  );
};

export default Home;

