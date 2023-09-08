import { Navigate, Outlet } from "react-router-dom";
import MainHeader from "../../components/MainHeader/MainHeader";
import { useSelector } from "react-redux";
import ScrollToTop from "../../components/ScrollToTop/ScrollToTop";
import axiosInstance from "../../axiosInstance";
import { useQuery } from "react-query";
import VerifyEmail from "../../components/AuthenticatedUser/VerifyEmail";

const MainLayout = () => {
  const { loggedUser } = useSelector((state) => state.user);

  const getUserDetailsFn = async () => {
    return await axiosInstance.get(`/users/${loggedUser.id}`, {
      headers: {
        Authorization: `Bearer ${loggedUser.token}`,
      },
    });
  };

  const getUserDetailsQuery = useQuery("userDetailsLayout", getUserDetailsFn, {
    enabled: loggedUser ? true : false,
  });

  if (!loggedUser) {
    return <Navigate to="/signin" />;
  }

  if (getUserDetailsQuery.isLoading) {
    return (
      <div className="flex h-screen justify-center items-center">
        <h1>loading...</h1>
      </div>
    );
  }

  if (getUserDetailsQuery?.data?.data?.data?.user?.is_verified === 0) {
    return (
      <>
        <VerifyEmail
          email={getUserDetailsQuery?.data?.data?.data?.user?.email}
        />
      </>
    );
  }

  if (getUserDetailsQuery?.data?.data?.data?.user?.is_verified === 1) {
    return (
      <>
        <ScrollToTop />
        <MainHeader />
        <Outlet />
      </>
    );
  }
};

export default MainLayout;
