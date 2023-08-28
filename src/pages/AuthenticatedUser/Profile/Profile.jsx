import { NavLink, useParams } from "react-router-dom";
import Comments from "../../../components/AuthenticatedUser/Comments/Comments";
import PostCard from "../../../components/AuthenticatedUser/PostCard/PostCard";
import { useState } from "react";
import ProfileLocked from "./ProfileLocked/ProfileLocked";
import { useSelector } from "react-redux";
import axiosInstance from "../../../axiosInstance";
import { useQuery } from "react-query";
import ProfileImg from "../../../assets/images/profile-icon.png";
import LoadingPostCard from "../../../components/AuthenticatedUser/PostCard/LoadingPostCard";

const Profile = () => {
  const { loggedUser } = useSelector((state) => state.user);
  const { id } = useParams();

  const [selectedShowCommentIds, setShowCommentSelectedIds] = useState([]);

  const handleCommentClick = (id) => {
    if (selectedShowCommentIds.includes(id)) {
      setShowCommentSelectedIds(
        selectedShowCommentIds.filter((selectedId) => selectedId !== id)
      );
    } else {
      setShowCommentSelectedIds([...selectedShowCommentIds, id]);
    }
  };

  const getUserDetailsFn = async () => {
    return await axiosInstance.get(`/users/${id}`, {
      headers: {
        Authorization: `Bearer ${loggedUser.token}`,
      },
    });
  };

  const getUserPostsFn = async () => {
    return await axiosInstance.get(`/user/vips/${id}`, {
      headers: {
        Authorization: `Bearer ${loggedUser.token}`,
      },
    });
  };

  const getUserDetailsQuery = useQuery("userDetails", getUserDetailsFn);

  const getUserPostsQuery = useQuery("userPosts", getUserPostsFn);

  return (
    <>
      <div className="mx-auto max-w-7xl px-2 py-16 sm:px-6 lg:px-8 h-full">
        <div className="p-6 px-8 overflow-hidden rounded-lg shadow-[rgba(0,_0,_0,_0.24)_0px_0px_6px] bg-white transition-shadow duration-300 ease-in-out">
          <div className="flex flex-row items-center gap-5">
            <img
              src={
                !getUserDetailsQuery?.data?.data?.data?.user?.user_profile_image
                  ? ProfileImg
                  : getUserDetailsQuery?.data?.data?.data?.user
                      ?.user_profile_image
              }
              alt="Profile Image"
              className={`w-14 h-14 rounded-full text-xs border-2 border-gray-100 ${
                !getUserDetailsQuery?.data?.data?.data?.user
                  ?.user_profile_image && "p-1.5"
              }`}
            />
            <div>
              <h3 className="text-lg font-bold capitalize">
                {getUserDetailsQuery?.data?.data?.data?.user?.name}
              </h3>
              <p className="text-center text-md text-[#8E8E8E] mt-1">
                Accuracy Index:{" "}
                <span className="text-c-green font-bold">
                  +3.10% (2 Months)
                </span>
              </p>
            </div>
            <NavLink
              to={loggedUser.id === +id && "/setting/edit"}
              className="ml-auto text-center mt-4 block rounded-lg border-c-green border-2 p-2 px-4 shadow-md hover:shadow-none text-black hover:text-white hover:bg-c-green transition-all duration-75 text-sm font-medium"
            >
              {loggedUser.id === +id ? "Edit Profile" : "Follow"}
            </NavLink>
          </div>
          <p
            className={`mt-2 text-md ${
              !getUserDetailsQuery?.data?.data?.data?.user?.about &&
              "text-gray-400"
            }`}
          >
            {getUserDetailsQuery?.data?.data?.data?.user?.about
              ? getUserDetailsQuery?.data?.data?.data?.user?.about
              : "You have not added your bio yet..."}
          </p>
          <div className="flex flex-row justify-around mt-2">
            <p className="text-[#8E8E8E]">
              <span className="font-bold">
                {getUserDetailsQuery?.data?.data?.data?.user?.followers_count}
              </span>{" "}
              followers
            </p>
            <p className="text-[#8E8E8E]">
              <span className="font-bold">
                {getUserDetailsQuery?.data?.data?.data?.user?.following_count}
              </span>{" "}
              following
            </p>
          </div>

          <div className="my-5 w-full h-[1px] bg-[#D3DAE2]"></div>

          <div className="flex flex-row justify-around mt-2">
            <div className="text-center">
              <p className="text-[#8E8E8E] text-sm">Buying Accuracy</p>
              <p className="text-c-green font-bold mt-0.5">20/50</p>
            </div>
            <div className="text-center">
              <p className="text-[#8E8E8E] text-sm">Selling Accuracy</p>
              <p className="text-[#EF413E] font-bold mt-0.5">30/50</p>
            </div>
          </div>
        </div>

        {/* My Posts */}
        <div className="mt-5 p-6 px-8 overflow-hidden rounded-lg shadow-[rgba(0,_0,_0,_0.24)_0px_0px_6px] bg-white transition-shadow duration-300 ease-in-out">
          <h2 className="font-semibold text-gray-400 mb-4 text-2xl">
            My Posts
          </h2>
          {getUserPostsQuery?.isLoading ? (
            Array(4)
              .fill()
              .map((elem, id) => (
                <div
                  key={id}
                  className="my-5 p-6 px-8 overflow-hidden rounded-lg shadow-[rgba(0,_0,_0,_0.2)_0px_0px_3px] bg-white transition-shadow duration-300 ease-in-out"
                >
                  <LoadingPostCard />
                </div>
              ))
          ) : getUserPostsQuery.isError ? (
            <p className="text-center text-red-600">
              Failed to fetch all posts
            </p>
          ) : (
            getUserPostsQuery?.data?.data?.data?.map((elem) => (
              <div
                key={elem.id}
                className="my-5 p-6 px-8 overflow-hidden rounded-lg shadow-[rgba(0,_0,_0,_0.2)_0px_0px_3px] bg-white transition-shadow duration-300 ease-in-out"
              >
                <PostCard data={elem} handleCommentClick={handleCommentClick} />

                {selectedShowCommentIds.includes(elem.id) && (
                  <Comments postId={elem.id} />
                )}
              </div>
            ))
          )}
        </div>

        {/* profile locked */}
        <ProfileLocked />
      </div>
    </>
  );
};

export default Profile;
