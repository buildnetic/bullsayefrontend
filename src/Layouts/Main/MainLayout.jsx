import { Navigate, Outlet } from "react-router-dom";
import MainHeader from "../../components/MainHeader/MainHeader";
import { useSelector } from "react-redux";
import ScrollToTop from "../../components/ScrollToTop/ScrollToTop";

const MainLayout = () => {
  const { loggedUser } = useSelector((state) => state.user);

  if (!loggedUser) {
    return <Navigate to="/" />;
  }

  return (
    <>
      <ScrollToTop />
      <MainHeader />
      <Outlet />
    </>
  );
};

export default MainLayout;
