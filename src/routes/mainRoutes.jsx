import { Suspense, lazy } from "react";
import { Route, Routes } from "react-router-dom";

// Lazy load container components
const Home = lazy(() => import("../containers/Home"));
const Catalogue = lazy(() => import("../containers/Catalogue"));
const About = lazy(() => import("../containers/About"));

const MainRoutes = () => {
  return (
    <Suspense fallback={
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto"></div>
          <p className="mt-4 text-gray-600">Loading...</p>
        </div>
      </div>
    }>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/catalogue" element={<Catalogue />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </Suspense>
  );
};

export default MainRoutes;