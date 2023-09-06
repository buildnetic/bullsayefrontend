/* eslint-disable react/prop-types */
import moment from "moment";
import { AiFillDelete, AiOutlineLike } from "react-icons/ai";
import { BiCommentDetail, BiShareAlt, BiSolidEditAlt } from "react-icons/bi";
import { BsRepeat } from "react-icons/bs";
import { NavLink, useNavigate } from "react-router-dom";
import ProfileImg from "../../../assets/images/profile-icon.png";
import { useSelector } from "react-redux";
import DeleteConfirmation from "../../Modals/DeleteConfirmation";
import { useState } from "react";
import axiosInstance from "../../../axiosInstance";
import { useMutation, useQueryClient } from "react-query";
import { ToastError, ToastSuccess } from "../../../ToastNotification";
import SocialShareModal from "../../Modals/SocialShareModal";

const PostCard = ({ data, handleCommentClick, classes }) => {
  const { loggedUser } = useSelector((state) => state.user);
  const queryClient = useQueryClient();
  const navigate = useNavigate();

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

  const reshareFn = async (id) => {
    return await axiosInstance.post(`/reshare/vips/${id}`, {
      headers: {
        Authorization: `Bearer ${loggedUser.token}`,
      },
    });
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

  const reshareMutation = useMutation(reshareFn, {
    onSuccess: (res) => {
      ToastSuccess(res?.data?.message);
      console.log("res", res);
    },
    onError: (err) => {
      ToastError(err?.response?.data?.message);
      console.log("err", err);
    },
  });

  const likeDislikePostHandler = (data) => {
    if (checkLikedByUser(data.likes)) {
      disLikePostMutation.mutate(data.id);
    } else {
      likePostMutation.mutate(data.id);
    }
  };

  const reshareHandler = (id) => {
    reshareMutation.mutate(id);
  };

  return (
    <>
      <div className={classes}>
        <div className="flex flex-row items-center gap-5">
          <img
            src={
              !data?.user?.user_profile_image
                ? ProfileImg
                : data?.user?.user_profile_image
            }
            alt="Profile Image"
            className={`w-12 h-12 rounded-full text-xs border-2 border-gray-100 object-cover ${
              !data?.user?.user_profile_image && "p-1.5"
            }`}
          />
          <div className=" w-full">
            <div className="flex flex-row justify-between items-center">
              <NavLink
                to={`/profile/${data?.user_id}`}
                className="text-lg font-bold capitalize"
              >
                {data?.user?.name}
              </NavLink>
              {data?.user_id === loggedUser.id && (
                <div className="flex flex-row items-center gap-2">
                  <BiSolidEditAlt
                    className=" cursor-pointer text-lg text-gray-500 hover:text-green-500 transition-all"
                    title="Edit Post"
                    onClick={() => navigate(`/post/edit/${data.id}`)}
                  />
                  <AiFillDelete
                    className=" cursor-pointer text-lg text-gray-500 hover:text-red-500 transition-all"
                    title="Delete Post"
                    onClick={() => deleteModalFn(data.id)}
                  />
                </div>
              )}
            </div>
            <div className="flex justify-between items-center gap-3">
              <p className="text-xs text-[#8E8E8E]">
                Created at:
                {" " + moment(data?.created_at).fromNow()}
              </p>

              {moment(data?.updated_at).isAfter(moment(data?.created_at)) && (
                <p className="text-xs text-[#8E8E8E] mt-1">
                  edited:
                  {" " + moment(data?.updated_at).fromNow()}
                </p>
              )}
            </div>
          </div>
        </div>
        <div className="mt-2">
          {data &&
            JSON.parse(data?.hashtags).map((elem, id) => (
              <span
                key={id}
                className="inline-flex items-center rounded-md bg-gray-50 px-2 py-1 text-xs font-medium text-gray-600 ring-1 ring-inset ring-gray-500/10 me-1.5"
              >
                {elem}
              </span>
            ))}
        </div>

        <p className="mt-2 text-md">{data?.description}</p>
        <div
          className={`mt-5 p-6 px-8 overflow-hidden rounded-lg transition-shadow duration-300 ease-in-out ${
            data?.type === "sell"
              ? "shadow-[rgba(255,_0,_0,_0.24)_0px_2px_5px] bg-[#ffd4d4]"
              : "shadow-[rgba(0,_255,_0,_0.24)_0px_2px_5px] bg-green-200"
          }`}
        >
          <div className="flex flex-row justify-between items-center">
            <h3
              className={`font-semibold text-lg ${
                data?.type === "sell" ? "text-red-600" : "text-green-600"
              }`}
            >
              {data?.type === "sell" ? "Selling" : "Buying"} Call
            </h3>
            <h3 className=" text-green-600 text-lg font-semibold">+12.24%</h3>
          </div>
          <div className="mt-3 grid grid-cols-12 gap-5">
            <div className="col-span-4">
              <h3
                className="flex flex-col items-center gap-2 text-xl font-bold capitalize"
                title={data?.stock_name}
              >
                {data?.stock_name.length > 12
                  ? data?.stock_name.substring(0, 12) + "..."
                  : data?.stock_name}
                <span className="text-xs font-medium text-gray-600">
                  Stock Name
                </span>
              </h3>
            </div>
            <div className="col-span-4">
              <h3 className="flex flex-col items-center gap-2 text-xl font-bold">
                {data?.current_price}
                <span className="text-xs font-medium text-gray-600">
                  Posted at Current Price
                </span>
              </h3>
            </div>
            <div className="col-span-4">
              <h3 className="flex flex-col items-center gap-2 text-xl font-bold">
                {data?.target_price}
                <span className="text-xs font-medium text-gray-600">
                  Target Price
                </span>
              </h3>
            </div>
            {/* <div className=" col-span-3">
              <h3 className="flex flex-col items-center gap-2 text-xl font-bold">
                00
                <span className="text-xs font-medium text-gray-600">
                  Current Price
                </span>
              </h3>
            </div> */}
          </div>
        </div>
        <div className="my-5 w-full h-[1px] bg-[#D3DAE2]"></div>
        <div className="mt-3 flex flex-row justify-between items-center">
          <p
            onClick={() => likeDislikePostHandler(data)}
            className={`text-sm flex items-center gap-1 cursor-pointer hover:text-green-500 font-semibold transition-all ${
              checkLikedByUser(data?.likes) ? "text-green-500" : "text-gray-500"
            }`}
          >
            <AiOutlineLike className="text-lg" />
            {data?.likes?.length} Likes
          </p>
          <p
            onClick={() => {
              handleCommentClick(data?.id);
            }}
            className="text-sm flex items-center gap-1 text-gray-500 cursor-pointer hover:text-green-500 font-semibold transition-all"
          >
            <BiCommentDetail className="text-lg" />
            {data?.comments?.length} Comments
          </p>
          <p
            className="text-sm flex items-center gap-1 text-gray-500 cursor-pointer hover:text-green-500 font-semibold transition-all"
            onClick={() => socialMediaShareModalFn(data?.id)}
          >
            <BiShareAlt className="text-lg" />
            Share
          </p>
          <p
            className="text-sm flex items-center gap-1 text-gray-500 cursor-pointer hover:text-green-500 font-semibold transition-all"
            onClick={() => reshareHandler(data?.id)}
          >
            <BsRepeat className="text-lg" />
            Reshare
          </p>
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
      </div>
    </>
  );
};

export default PostCard;
