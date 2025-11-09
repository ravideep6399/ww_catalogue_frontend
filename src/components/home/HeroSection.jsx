const HeroSection = () => {
  return (
    <section className="bg-[#F5F5DC] min-h-[35vh] flex items-center px-8 py-12">
      <div className="max-w-7xl mx-auto w-full grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        {/* Left side - Image placeholder */}
        <div className="flex justify-center md:justify-start">
          <div className="w-64 h-80 bg-gray-200 rounded-lg flex items-center justify-center">
            <span className="text-gray-400">Image</span>
          </div>
        </div>
        
        {/* Right side - Text */}
        <div className="text-left">
          <p className="text-gray-700 text-lg mb-2">Welcome to</p>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-3">Shop Name</h1>
          <p className="text-gray-700 text-lg">Your local fashion destination</p>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;

