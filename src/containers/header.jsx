import { BrowserRouter } from "react-router-dom";
import Navbar from "../components/Navbar";
import MainRoutes from "../routes/MainRoutes";

const Header = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <MainRoutes />
    </BrowserRouter>
  );
};

export default Header;
