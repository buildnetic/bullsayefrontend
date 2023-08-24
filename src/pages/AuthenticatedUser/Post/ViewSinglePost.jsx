import { NavLink, useNavigate, useParams } from "react-router-dom";
import axiosInstance from "../../../axiosInstance";
import { useSelector } from "react-redux";
import { useMutation, useQuery, useQueryClient } from "react-query";
import ProfileImg from "../../../assets/images/profile-icon.png";
import { BiCommentDetail, BiShareAlt, BiSolidEditAlt } from "react-icons/bi";
import { AiFillDelete, AiOutlineLike } from "react-icons/ai";
import moment from "moment";
import { BsRepeat } from "react-icons/bs";
import { useState } from "react";
import { ToastError, ToastSuccess } from "../../../ToastNotification";
import DeleteConfirmation from "../../../components/Modals/DeleteConfirmation";
import SocialShareModal from "../../../components/Modals/SocialShareModal";
import Comments from "../../../components/AuthenticatedUser/Comments/Comments";

const ViewSinglePost = () => {
  const { loggedUser } = useSelector((state) => state.user);
  const queryClient = useQueryClient();
  const { id } = useParams();
  const navigate = useNavigate();

  const getSinglePostDetailsFn = async () => {
    return await axiosInstance.get(`/vips/${id}`, {
      headers: {
        Authorization: `Bearer ${loggedUser.token}`,
      },
    });
  };

  const getSinglePostDetailsQuery = useQuery(
    "getSinglePostDetails",
    getSinglePostDetailsFn,
    {
      onSuccess: (res) => {
        console.log(res);
      },
      onError: (err) => {
        console.log(err);
      },
    }
  );

  const [openDeleteModal, setOpenDeleteModal] = useState(false);
  const [openSocialMediaShareModal, setOpenSocialMediaShareModal] =
    useState(false);
  const [postId, setPostId] = useState("");

  const checkLikedByUser = (likes) => {
    return likes?.some((like) => like.user_id === loggedUser.id);
  };

  const deleteModalFn = (id) => {
    setPostId(id);
    setOpenDeleteModal(true);
  };

  const socialMediaShareModalFn = (id) => {
    setPostId(id);
    setOpenSocialMediaShareModal(true);
  };

  const likePostFn = async (id) => {
    axiosInstance.defaults.headers[
      "Authorization"
    ] = `Bearer ${loggedUser.token}`;
    const res = await axiosInstance.post(`/like/vips/${id}`);
    delete axiosInstance.defaults.headers["Authorization"];
    return res;
  };

  const disLikePostFn = async (id) => {
    axiosInstance.defaults.headers[
      "Authorization"
    ] = `Bearer ${loggedUser.token}`;
    const res = await axiosInstance.delete(`/dislike/vips/${id}`);
    delete axiosInstance.defaults.headers["Authorization"];
    return res;
  };

  const likePostMutation = useMutation(likePostFn, {
    onSuccess: (res) => {
      ToastSuccess(res?.data?.message);
      queryClient.invalidateQueries("getAllPost");
      queryClient.invalidateQueries("userPosts");
      queryClient.invalidateQueries("getSinglePostDetails");
    },
    onError: (err) => {
      ToastError(err?.response?.data?.message);
    },
  });

  const disLikePostMutation = useMutation(disLikePostFn, {
    onSuccess: (res) => {
      ToastSuccess(res?.data?.message);
      queryClient.invalidateQueries("getAllPost");
      queryClient.invalidateQueries("userPosts");
      queryClient.invalidateQueries("getSinglePostDetails");
    },
    onError: (err) => {
      ToastError(err?.response?.data?.message);
    },
  });

  const likeDislikePostHandler = (data) => {
    if (checkLikedByUser(data.likes)) {
      disLikePostMutation.mutate(data.id);
    } else {
      likePostMutation.mutate(data.id);
    }
  };

  return (
    <>
      <div
        className={"mx-auto max-w-7xl px-2  pt-16 pb-2 sm:px-6 lg:px-8 h-full"}
      >
        <div className="flex flex-row items-center gap-5">
          <img
            src={
              !getSinglePostDetailsQuery?.data?.data?.data?.user
                ?.user_profile_image
                ? ProfileImg
                : getSinglePostDetailsQuery?.data?.data?.data?.user
                    ?.user_profile_image
            }
            alt="Profile Image"
            className={`w-12 h-12 rounded-full text-xs border-2 border-gray-100 object-cover ${
              !getSinglePostDetailsQuery?.data?.data?.data?.user
                ?.user_profile_image && "p-1.5"
            }`}
          />
          <div className=" w-full">
            <div className="flex flex-row justify-between items-center">
              <NavLink
                to={`/profile/${getSinglePostDetailsQuery?.data?.data?.data?.user_id}`}
                className="text-lg font-bold capitalize"
              >
                {getSinglePostDetailsQuery?.data?.data?.data?.user?.name}
              </NavLink>
              {getSinglePostDetailsQuery?.data?.data?.data?.user_id ===
                loggedUser.id && (
                <div className="flex flex-row items-center gap-2">
                  <BiSolidEditAlt
                    className=" cursor-pointer text-lg text-gray-500 hover:text-green-500 transition-all"
                    title="Edit Post"
                    onClick={() => navigate(`/post/edit/${id}`)}
                  />
                  <AiFillDelete
                    className=" cursor-pointer text-lg text-gray-500 hover:text-red-500 transition-all"
                    title="Delete Post"
                    onClick={() =>
                      deleteModalFn(getSinglePostDetailsQuery?.data?.data.id)
                    }
                  />
                </div>
              )}
            </div>
            <div className="flex justify-between items-center gap-3">
              <p className="text-xs text-[#8E8E8E]">
                Created at:
                {" " +
                  moment(
                    getSinglePostDetailsQuery?.data?.data?.data?.created_at
                  ).fromNow()}
              </p>

              {moment(
                getSinglePostDetailsQuery?.data?.data?.data?.updated_at
              ).isAfter(
                moment(getSinglePostDetailsQuery?.data?.data?.data?.created_at)
              ) && (
                <p className="text-xs text-[#8E8E8E] mt-1">
                  edited:
                  {" " +
                    moment(
                      getSinglePostDetailsQuery?.data?.data?.data?.updated_at
                    ).fromNow()}
                </p>
              )}
            </div>
          </div>
        </div>
        <div className="mt-2">
          {getSinglePostDetailsQuery?.data?.data &&
            JSON.parse(
              getSinglePostDetailsQuery?.data?.data?.data?.hashtags
            ).map((elem, id) => (
              <span
                key={id}
                className="inline-flex items-center rounded-md bg-gray-50 px-2 py-1 text-xs font-medium text-gray-600 ring-1 ring-inset ring-gray-500/10 me-1.5"
              >
                {elem}
              </span>
            ))}
        </div>

        <p className="mt-2 text-md">
          {getSinglePostDetailsQuery?.data?.data?.data?.description}
        </p>
        <div
          className={`mt-5 p-6 px-8 overflow-hidden rounded-lg transition-shadow duration-300 ease-in-out ${
            getSinglePostDetailsQuery?.data?.data?.data?.type === "sell"
              ? "shadow-[rgba(255,_0,_0,_0.24)_0px_2px_5px] bg-[#ffd4d4]"
              : "shadow-[rgba(0,_255,_0,_0.24)_0px_2px_5px] bg-green-200"
          }`}
        >
          <div className="flex flex-row justify-between items-center">
            <h3
              className={`font-semibold text-lg ${
                getSinglePostDetailsQuery?.data?.data?.data?.type === "sell"
                  ? "text-red-600"
                  : "text-green-600"
              }`}
            >
              {getSinglePostDetailsQuery?.data?.data?.data?.type === "sell"
                ? "Selling"
                : "Buying"}{" "}
              Call
            </h3>
            <h3 className=" text-green-600 text-lg font-semibold">+12.24%</h3>
          </div>
          <div className="mt-3 grid grid-cols-12 gap-5">
            <div className=" col-span-4">
              <h3
                className="flex flex-col items-center gap-2 text-2xl font-bold capitalize"
                title={getSinglePostDetailsQuery?.data?.data?.data?.stock_name}
              >
                {getSinglePostDetailsQuery?.data?.data?.data?.stock_name
                  .length > 12
                  ? getSinglePostDetailsQuery?.data?.data?.data?.stock_name.substring(
                      0,
                      12
                    ) + "..."
                  : getSinglePostDetailsQuery?.data?.data?.data?.stock_name}
                <span className="text-sm font-medium text-gray-600">
                  Stock Name
                </span>
              </h3>
            </div>
            <div className=" col-span-4">
              <h3 className="flex flex-col items-center gap-2 text-2xl font-bold">
                {getSinglePostDetailsQuery?.data?.data?.data?.current_price}
                <span className="text-sm font-medium text-gray-600">
                  Current Price
                </span>
              </h3>
            </div>
            <div className=" col-span-4">
              <h3 className="flex flex-col items-center gap-2 text-2xl font-bold">
                {getSinglePostDetailsQuery?.data?.data?.data?.target_price}
                <span className="text-sm font-medium text-gray-600">
                  Target Price
                </span>
              </h3>
            </div>
          </div>
        </div>
        <div className="my-5 w-full h-[1px] bg-[#D3DAE2]"></div>
        <div className="mt-3 flex flex-row justify-between items-center">
          <p
            onClick={() =>
              likeDislikePostHandler(
                getSinglePostDetailsQuery?.data?.data?.data
              )
            }
            className={`text-sm flex items-center gap-1 cursor-pointer hover:text-green-500 font-semibold transition-all ${
              checkLikedByUser(
                getSinglePostDetailsQuery?.data?.data?.data?.likes
              )
                ? "text-green-500"
                : "text-gray-500"
            }`}
          >
            <AiOutlineLike className="text-lg" />
            {getSinglePostDetailsQuery?.data?.data?.data?.likes?.length} Likes
          </p>
          <p className="text-sm flex items-center gap-1 text-gray-500 cursor-pointer hover:text-green-500 font-semibold transition-all">
            <BiCommentDetail className="text-lg" />
            {getSinglePostDetailsQuery?.data?.data?.data?.comments?.length}{" "}
            Comments
          </p>
          <p
            className="text-sm flex items-center gap-1 text-gray-500 cursor-pointer hover:text-green-500 font-semibold transition-all"
            onClick={() =>
              socialMediaShareModalFn(
                getSinglePostDetailsQuery?.data?.data?.data?.id
              )
            }
          >
            <BiShareAlt className="text-lg" />
            Share
          </p>
          <p className="text-sm flex items-center gap-1 text-gray-500 cursor-pointer hover:text-green-500 font-semibold transition-all">
            <BsRepeat className="text-lg" />
            Reshare
          </p>
        </div>
        <Comments postId={id} />
      </div>

      <DeleteConfirmation
        type="Post"
        openDeleteModal={openDeleteModal}
        setOpenDeleteModal={setOpenDeleteModal}
        id={postId}
      />

      <SocialShareModal
        openSocialMediaShareModal={openSocialMediaShareModal}
        setOpenSocialMediaShareModal={setOpenSocialMediaShareModal}
        id={postId}
      />
    </>
  );
};

export default ViewSinglePost;
