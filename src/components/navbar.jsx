import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="bg-[#F5F5DC] w-full px-6 py-4 flex items-center justify-between">
      {/* Left side - Logo and Name */}
      <Link
        to="/"
        className="flex items-center gap-3 hover:opacity-80 transition-opacity"
      >
        <div className="w-12 h-12 rounded-full bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center shadow-lg">
          <span className="text-white font-bold text-xl">W</span>
        </div>
        <span className="text-xl font-semibold text-gray-800">
          WW Catalogue
        </span>
      </Link>

      {/* Right side - Navigation Links */}
      <div className="flex items-center gap-8">
        <Link
          to="/"
          className="text-gray-700 hover:text-blue-600 font-medium transition-colors"
        >
          Home
        </Link>
        <Link
          to="/catalogue"
          className="text-gray-700 hover:text-blue-600 font-medium transition-colors"
        >
          Catalogue
        </Link>
        <Link
          to="/about"
          className="text-gray-700 hover:text-blue-600 font-medium transition-colors"
        >
          About
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
