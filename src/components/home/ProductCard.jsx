import { useState, useMemo } from "react";

const ProductCard = ({ product }) => {
  const [isHovered, setIsHovered] = useState(false);
  const [imageError, setImageError] = useState(false);

  const CARD_WIDTH = 215; 
  const CARD_HEIGHT = 220; 
  const EXPANDED_SCALE = 1.05; 

  // Memoize image URL to prevent unnecessary re-renders and ensure it's only fetched once
  const imageSrc = useMemo(() => {
    if (imageError || !product.image) {
      return "https://via.placeholder.com/192x288";
    }
    return product.image;
  }, [product.image, imageError]);

  const handleImageError = (e) => {
    if (!imageError) {
      setImageError(true);
      e.target.src = "https://via.placeholder.com/192x288";
    }
  };

  return (
    <div
      className="flex-shrink-0 cursor-pointer transition-all duration-300 ease-out"
      style={{
        width: `${CARD_WIDTH}px`,
        transform: isHovered ? `scale(${EXPANDED_SCALE})` : "scale(1)",
        transformOrigin: "center center",
        zIndex: isHovered ? 10 : 1,
        transition: "transform 0.3s ease-out",
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="bg-white rounded overflow-hidden shadow-md hover:shadow-2xl transition-shadow duration-300">
        {/* Image Container - Standard 192x288 */}
        <div
          className="relative bg-gray-100 overflow-hidden"
          style={{
            width: `${CARD_WIDTH}px`,
            height: `${CARD_HEIGHT}px`,
          }}
        >
          <img
            src={imageSrc}
            alt={product.title}
            className="w-full h-full object-cover transition-transform duration-300"
            style={{
              transform: isHovered ? "scale(1.1)" : "scale(1)",
            }}
            loading="lazy"
            onError={handleImageError}
          />
          {/* Overlay on hover */}
          {isHovered && (
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent animate-fadeIn" />
          )}
        </div>

        {/* Product Info */}
        <div className="p-3 bg-white">
          <h3 className="text-gray-800 font-semibold mb-1 truncate text-sm">
            {product.title}
          </h3>
          <p className="text-gray-700 font-bold text-base mb-2">
            {product.price}
          </p>

          {/* Expanded Info - Netflix style */}
          {isHovered && (
            <div className="space-y-2 animate-slideUp">
              <p className="text-xs text-gray-600 line-clamp-2">
                {product.description ||
                  "Discover this amazing product with premium quality and great value."}
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProductCard;

