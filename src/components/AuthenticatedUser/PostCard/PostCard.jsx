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

const PostCard = ({ data, handleCommentClick }) => {
  const { loggedUser } = useSelector((state) => state.user);
  const navigate = useNavigate();

  const [openDeleteModal, setOpenDeleteModal] = useState(false);
  const [postId, setPostId] = useState("");

  const deleteModalFn = (id) => {
    setPostId(id);
    setOpenDeleteModal(true);
  };

  return (
    <>
      <div className="flex flex-row items-center gap-5">
        <img
          src={
            !data.user.user_profile_image
              ? ProfileImg
              : data.user.user_profile_image
          }
          alt="Profile Image"
          className={`w-12 h-12 rounded-full text-xs border-2 border-gray-100 object-cover ${
            !data.user.user_profile_image && "p-1.5"
          }`}
        />
        <div className=" w-full">
          <div className="flex flex-row justify-between items-center">
            <NavLink
              to={`/profile/${data.user_id}`}
              className="text-lg font-bold capitalize"
            >
              {data.user.name}
            </NavLink>
            {data.user_id === loggedUser.id && (
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
            <p className="text-sm text-[#8E8E8E]">
              Created at:
              {" " + moment(data.created_at).format("MMMM Do YYYY, h:mm a")}
            </p>

            {moment(data.updated_at).isAfter(moment(data.updated_at)) && (
              <p className="text-sm text-[#8E8E8E] mt-1">
                Updated at:
                {" " +
                  moment(data.updated_at).format("MMMM Do YYYY, h:mm:ss a")}
              </p>
            )}
          </div>
        </div>
      </div>
      <div className="mt-2">
        {JSON.parse(data.hashtags).map((elem, id) => (
          <span
            key={id}
            className="inline-flex items-center rounded-md bg-gray-50 px-2 py-1 text-xs font-medium text-gray-600 ring-1 ring-inset ring-gray-500/10 me-1.5"
          >
            {elem}
          </span>
        ))}
      </div>

      <p className="mt-2 text-md">{data.description}</p>
      <div
        className={`mt-5 p-6 px-8 overflow-hidden rounded-lg transition-shadow duration-300 ease-in-out ${
          data.type === "sell"
            ? "shadow-[rgba(255,_0,_0,_0.24)_0px_2px_5px] bg-[#ffd4d4]"
            : "shadow-[rgba(0,_255,_0,_0.24)_0px_2px_5px] bg-green-200"
        }`}
      >
        <div className="flex flex-row justify-between items-center">
          <h3
            className={`font-semibold text-lg ${
              data.type === "sell" ? "text-red-600" : "text-green-600"
            }`}
          >
            {data.type === "sell" ? "Selling" : "Buying"} Call
          </h3>
          <h3 className=" text-green-600 text-lg font-semibold">+12.24%</h3>
        </div>
        <div className="mt-3 flex flex-row justify-between items-center">
          <h3 className="text-2xl font-bold capitalize">{data.stock_name}</h3>
          <h3 className="flex items-center gap-2 text-gray-600 text-2xl font-semibold">
            <span className="text-lg font-medium">Current Price: </span>{" "}
            {data.current_price}
          </h3>
          <h3 className="flex items-center gap-2 text-gray-600 text-2xl font-semibold">
            <span className="text-lg font-medium">Target Price: </span>{" "}
            {data.target_price}
          </h3>
        </div>
      </div>
      <div className="my-5 w-full h-[1px] bg-[#D3DAE2]"></div>
      <div className="mt-3 flex flex-row justify-between items-center">
        <p className="text-sm flex items-center gap-1 text-gray-500 cursor-pointer hover:text-gray-900 font-semibold transition-all">
          <AiOutlineLike className="text-lg" />
          {data.likes_count} Likes
        </p>
        <p
          onClick={() => {
            handleCommentClick(data.id);
          }}
          className="text-sm flex items-center gap-1 text-gray-500 cursor-pointer hover:text-gray-900 font-semibold transition-all"
        >
          <BiCommentDetail className="text-lg" />
          {data.comments.length} Comments
        </p>
        <p className="text-sm flex items-center gap-1 text-gray-500 cursor-pointer hover:text-gray-900 font-semibold transition-all">
          <BiShareAlt className="text-lg" />
          Share
        </p>
        <p className="text-sm flex items-center gap-1 text-gray-500 cursor-pointer hover:text-gray-900 font-semibold transition-all">
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
    </>
  );
};

export default PostCard;
