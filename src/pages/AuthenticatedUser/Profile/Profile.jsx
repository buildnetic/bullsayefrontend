import { useNavigate, useParams } from "react-router-dom";
import Comments from "../../../components/AuthenticatedUser/Comments/Comments";
import PostCard from "../../../components/AuthenticatedUser/PostCard/PostCard";
import { useEffect, useState } from "react";
import ProfileLocked from "./ProfileLocked/ProfileLocked";
import { useSelector } from "react-redux";
import axiosInstance from "../../../axiosInstance";
import { useMutation, useQuery, useQueryClient } from "react-query";
import ProfileImg from "../../../assets/images/profile-icon.png";
import LoadingPostCard from "../../../components/AuthenticatedUser/PostCard/LoadingPostCard";
import { ToastError, ToastSuccess } from "../../../ToastNotification";
import Followers from "../../../components/Modals/Followers";
import Followings from "../../../components/Modals/Followings";

const Profile = () => {
  const { loggedUser } = useSelector((state) => state.user);
  const queryClient = useQueryClient();
  const { id } = useParams();
  const navigate = useNavigate();

  const [selectedShowCommentIds, setShowCommentSelectedIds] = useState([]);
  let [isFollowersOpen, setIsFollowersOpen] = useState(false);
  let [isFollowingsOpen, setIsFollowingsOpen] = useState(false);

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

  const getIsUserFollowFn = async () => {
    return await axiosInstance.get(`/user/is-following/${id}`, {
      headers: {
        Authorization: `Bearer ${loggedUser.token}`,
      },
    });
  };

  const userFollowFn = async () => {
    axiosInstance.defaults.headers[
      "Authorization"
    ] = `Bearer ${loggedUser.token}`;
    const res = await axiosInstance.post(`/user/follow/${id}`);
    delete axiosInstance.defaults.headers["Authorization"];
    return res?.data;
  };

  const userUnFollowFn = async () => {
    return await axiosInstance.delete(`/user/unfollow/${id}`, {
      headers: {
        Authorization: `Bearer ${loggedUser.token}`,
      },
    });
  };

  const getFollowersFn = async () => {
    return await axiosInstance.get(`/getFollowers/${id}`, {
      headers: {
        Authorization: `Bearer ${loggedUser.token}`,
      },
    });
  };

  const getFollowingsFn = async () => {
    return await axiosInstance.get(`/getFollowing/${id}`, {
      headers: {
        Authorization: `Bearer ${loggedUser.token}`,
      },
    });
  };

  const getUserDetailsQuery = useQuery("userDetails", getUserDetailsFn);
  const getUserPostsQuery = useQuery("userPosts", getUserPostsFn);
  const getIsUserFollowQuery = useQuery("isUserFollow", getIsUserFollowFn);
  const userFollowMutation = useMutation(userFollowFn, {
    onSuccess: (res) => {
      console.log("res", res);
      queryClient.invalidateQueries("isUserFollow");
      queryClient.invalidateQueries("userDetails");
      ToastSuccess(res?.message);
    },
    onError: () => {
      ToastError("Error...");
    },
  });
  const userUnFollowMutation = useMutation(userUnFollowFn, {
    onSuccess: (res) => {
      queryClient.invalidateQueries("isUserFollow");
      queryClient.invalidateQueries("userDetails");
      ToastSuccess(res?.data?.message);
    },
    onError: () => {
      ToastError("Error...");
    },
  });

  const getFollowersQuery = useQuery("getFollowers", getFollowersFn);
  const getFollowingsQuery = useQuery("getFollowings", getFollowingsFn);

  const followUnfollowHandler = (e) => {
    e.preventDefault();

    if (loggedUser.id !== +id) {
      if (getIsUserFollowQuery?.data?.data?.isUserFollow) {
        userUnFollowMutation.mutate();
      } else {
        userFollowMutation.mutate();
      }
    } else {
      navigate("/setting");
    }
  };

  useEffect(() => {
    getUserDetailsQuery.refetch();
    getUserPostsQuery.refetch();
    getIsUserFollowQuery.refetch();
    getFollowersQuery.refetch();
    getFollowingsQuery.refetch();
  }, [id]);

  function closeFollowersModal() {
    setIsFollowersOpen(false);
  }

  function openFollowersModal() {
    setIsFollowersOpen(true);
  }

  function closeFollowingsModal() {
    setIsFollowingsOpen(false);
  }

  function openFollowingsModal() {
    setIsFollowingsOpen(true);
  }

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
            <div
              className="ml-auto cursor-pointer text-center mt-4 block rounded-lg border-c-green border-2 p-2 px-4 shadow-md hover:shadow-none text-black hover:text-white hover:bg-c-green transition-all duration-75 text-sm font-medium"
              onClick={followUnfollowHandler}
            >
              {loggedUser.id === +id
                ? "Edit Profile"
                : getIsUserFollowQuery.isLoading
                ? "Loading..."
                : getIsUserFollowQuery.isError
                ? "Error..."
                : getIsUserFollowQuery?.data?.data?.isUserFollow
                ? "Unfollow"
                : "Follow"}
            </div>
          </div>
          <p
            className={`mt-2 text-md ${
              !getUserDetailsQuery?.data?.data?.data?.user?.about &&
              "text-gray-400"
            }`}
          >
            {getUserDetailsQuery?.data?.data?.data?.user?.about
              ? getUserDetailsQuery?.data?.data?.data?.user?.about
              : "not added your about yet..."}
          </p>
          <div className="flex flex-row justify-around mt-2">
            <div>
              <button
                type="button"
                onClick={openFollowersModal}
                className="rounded-md bg-gray-200 bg-opacity-20 px-4 py-2 text-sm font-medium text-black hover:bg-opacity-30 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75"
              >
                <span className="font-bold">
                  {getUserDetailsQuery?.data?.data?.data?.user?.followers_count}
                </span>{" "}
                followers
              </button>

              <Followers
                isOpen={isFollowersOpen}
                closeModal={closeFollowersModal}
                data={getFollowersQuery?.data?.data?.data}
              />
            </div>
            <div>
              <button
                type="button"
                onClick={openFollowingsModal}
                className="rounded-md bg-gray-200 bg-opacity-20 px-4 py-2 text-sm font-medium text-black hover:bg-opacity-30 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75"
              >
                <span className="font-bold">
                  {getUserDetailsQuery?.data?.data?.data?.user?.following_count}
                </span>{" "}
                following
              </button>

              <Followings
                isOpen={isFollowingsOpen}
                closeModal={closeFollowingsModal}
                data={getFollowingsQuery?.data?.data?.data}
              />
            </div>
          </div>

          <div className="my-5 w-full h-[1px] bg-[#D3DAE2]"></div>

          <div className="flex flex-row justify-around mt-2">
            <div className="text-center">
              <p className="text-[#8E8E8E] text-sm">Buying Accuracy</p>
              <p className="text-c-green font-bold mt-0.5">
                0/{getUserDetailsQuery?.data?.data?.data?.buy_post_count}
              </p>
            </div>
            <div className="text-center">
              <p className="text-[#8E8E8E] text-sm">Selling Accuracy</p>
              <p className="text-[#EF413E] font-bold mt-0.5">
                0/{getUserDetailsQuery?.data?.data?.data?.sell_post_count}
              </p>
            </div>
          </div>
        </div>

        {/* My Posts */}
        {(getIsUserFollowQuery?.data?.data?.isUserFollow ||
          loggedUser.id === +id) && (
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
                  <PostCard
                    data={elem}
                    handleCommentClick={handleCommentClick}
                  />

                  {selectedShowCommentIds.includes(elem.id) && (
                    <Comments postId={elem.id} />
                  )}
                </div>
              ))
            )}
          </div>
        )}

        {/* profile locked */}
        {!getIsUserFollowQuery?.data?.data?.isUserFollow &&
          loggedUser.id !== +id && (
            <ProfileLocked
              userDetails={{
                name: getUserDetailsQuery?.data?.data?.data?.user?.name,
                image:
                  getUserDetailsQuery?.data?.data?.data?.user
                    ?.user_profile_image,
              }}
              isUserFollow={getIsUserFollowQuery?.data?.data?.isUserFollow}
              userFollowHandler={followUnfollowHandler}
            />
          )}
      </div>
    </>
  );
};

export default Profile;
