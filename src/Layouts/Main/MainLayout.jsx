import { Outlet } from "react-router-dom";
import MainHeader from "../../components/MainHeader/MainHeader";

const MainLayout = () => {
  return (
    <>
      <MainHeader />
      <Outlet />
    </>
  );
};

export default MainLayout;
