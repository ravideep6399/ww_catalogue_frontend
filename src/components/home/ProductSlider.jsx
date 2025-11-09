import { useRef, useState, useEffect, useCallback } from "react";
import ProductCard from "./ProductCard";

const ProductSlider = ({ title, products }) => {
  const scrollContainerRef = useRef(null);
  const [showLeftArrow, setShowLeftArrow] = useState(false);
  const [showRightArrow, setShowRightArrow] = useState(true);

  const updateArrowVisibility = useCallback(() => {
    if (scrollContainerRef.current) {
      const container = scrollContainerRef.current;
      const { scrollLeft, scrollWidth, clientWidth } = container;
      const isAtStart = scrollLeft <= 0;
      const isAtEnd = scrollLeft >= scrollWidth - clientWidth - 10;

      setShowLeftArrow(!isAtStart);
      setShowRightArrow(!isAtEnd);
    }
  }, []);

  useEffect(() => {
    // Initialize arrow visibility on mount and when products change
    const timer = setTimeout(() => {
      updateArrowVisibility();
    }, 100);
    return () => clearTimeout(timer);
  }, [products, updateArrowVisibility]);

  const scroll = (direction) => {
    if (scrollContainerRef.current) {
      const container = scrollContainerRef.current;
      const scrollAmount = 750; // Scroll by 600px
      const newScrollLeft =
        direction === "left"
          ? container.scrollLeft - scrollAmount
          : container.scrollLeft + scrollAmount;

      container.scrollTo({
        left: newScrollLeft,
        behavior: "smooth",
      });

      // Update arrow visibility after scroll
      setTimeout(() => {
        updateArrowVisibility();
      }, 300);
    }
  };

  const handleScroll = () => {
    updateArrowVisibility();
  };

  const CONTAINER_HEIGHT = 420;

  return (
    <section className="mb-12 relative group product-slider-section" style={{ overflow: "visible" }}>
      <h2 className="text-3xl font-bold text-gray-800 mb-6">{title}</h2>
      <div 
        className="relative"
        style={{
          height: `${CONTAINER_HEIGHT}px`,
          minHeight: `${CONTAINER_HEIGHT}px`,
          overflow: "visible",
        }}
      >
        {/* Left Arrow */}
        {showLeftArrow && (
          <button
            onClick={() => scroll("left")}
            className="absolute left-0 top-1/2 -translate-y-1/2 z-20 w-12 h-24 bg-gradient-to-r from-black/50 to-transparent hover:from-black/70 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity rounded-r"
            aria-label="Scroll left"
            style={{ marginTop: "-48px" }}
          >
            <svg
              className="w-8 h-8 text-white"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 19l-7-7 7-7"
              />
            </svg>
          </button>
        )}

        {/* Scrollable Container Wrapper */}
        <div
          ref={scrollContainerRef}
          onScroll={handleScroll}
          className="overflow-x-auto overflow-y-hidden scrollbar-hide scroll-smooth"
          style={{
            height: "100%",
            overflowY: "hidden",
          }}
        >
          {/* Inner container with padding for expanded cards */}
          <div 
            className="flex gap-4 w-max"
            style={{
              paddingTop: "60px",
              paddingBottom: "60px",
              paddingLeft: "16px",
              paddingRight: "16px",
            }}
          >
            {products.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>

        {/* Right Arrow */}
        {showRightArrow && (
          <button
            onClick={() => scroll("right")}
            className="absolute right-0 top-1/2 -translate-y-1/2 z-20 w-12 h-24 bg-gradient-to-l from-black/50 to-transparent hover:from-black/70 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity rounded-l"
            aria-label="Scroll right"
            style={{ marginTop: "-48px" }}
          >
            <svg
              className="w-8 h-8 text-white"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5l7 7-7 7"
              />
            </svg>
          </button>
        )}
      </div>
    </section>
  );
};

export default ProductSlider;

