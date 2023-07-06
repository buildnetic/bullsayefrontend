import { Outlet } from "react-router-dom";
import HomeHeader from "../../components/HomeHeader/HomeHeader";
import Footer from "../../components/Footer/Footer";
import ScrollToTop from "../../components/ScrollToTop/ScrollToTop";

const GuestLayout = () => {
  return (
    <>
      <ScrollToTop />
      <HomeHeader />
      <Outlet />
      <Footer />
    </>
  );
};

export default GuestLayout;
