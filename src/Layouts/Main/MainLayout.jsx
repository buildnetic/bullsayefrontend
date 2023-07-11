import { Navigate, Outlet } from "react-router-dom";
import MainHeader from "../../components/MainHeader/MainHeader";
import { useSelector } from "react-redux";

const MainLayout = () => {
  const { loggedUser } = useSelector((state) => state.user);

  if (!loggedUser) {
    return <Navigate to="/signin" />;
  }

  return (
    <>
      <MainHeader />
      <Outlet />
    </>
  );
};

export default MainLayout;
