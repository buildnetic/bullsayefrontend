/* eslint-disable react/prop-types */

import { useSelector } from "react-redux";
import axiosInstance from "../../../axiosInstance";
import { useMutation, useQuery, useQueryClient } from "react-query";
import LoadingComment from "./LoadingComment";
import moment from "moment";
import ProfileImg from "../../../assets/images/profile-icon.png";
import { useState } from "react";
import { ToastError, ToastSuccess } from "../../../ToastNotification";
import { BiSolidEditAlt } from "react-icons/bi";
import { AiFillDelete } from "react-icons/ai";
import DeleteConfirmation from "../../Modals/DeleteConfirmation";
import EditComment from "../../Modals/EditComment";

const Comments = ({ postId }) => {
  const queryClient = useQueryClient();

  const { loggedUser } = useSelector((state) => state.user);

  const [openDeleteModal, setOpenDeleteModal] = useState(false);
  const [openEditModal, setOpenEditModal] = useState(false);
  const [commentId, setCommentId] = useState("");
  const [comment, setComment] = useState("");

  const getPostCommentsFn = async () => {
    return await axiosInstance.get(`/getComment/vips/${postId}`, {
      headers: {
        Authorization: `Bearer ${loggedUser.token}`,
      },
    });
  };

  const createCommentFn = async () => {
    return await axiosInstance.post(
      `/comment/vips/${postId}`,
      { comment },
      {
        headers: {
          Authorization: `Bearer ${loggedUser.token}`,
        },
      }
    );
  };

  const getPostCommentsQuery = useQuery("comments", getPostCommentsFn);

  const createCommentMutation = useMutation(createCommentFn, {
    onSuccess: () => {
      ToastSuccess("Comment added successfully");
      queryClient.invalidateQueries("getAllPost");
      queryClient.invalidateQueries("comments");
    },
    onError: (err) => {
      ToastError(err?.response?.data?.message);
    },
  });

  const commentSubmitHandler = (e) => {
    e.preventDefault();
    createCommentMutation.mutate();
    setComment("");
  };

  const deleteModalFn = (id) => {
    setCommentId(id);
    setOpenDeleteModal(true);
  };

  const editModalFn = (id) => {
    setCommentId(id);
    setOpenEditModal(true);
  };

  return (
    <>
      <div className="my-4 flex gap-2">
        <input
          type="text"
          className="w-full rounded-3xl border-0 py-1.5 px-4 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-c-green-dark sm:text-sm sm:leading-6"
          placeholder="add a comment..."
          value={comment}
          onChange={(e) => setComment(e.target.value)}
        />
        <button
          onClick={commentSubmitHandler}
          className="bg-c-green rounded-3xl text-sm text-white p-2 px-4 hover:bg-c-green-dark transition-all"
        >
          Comment
        </button>
      </div>
      <div className="p-6 px-8 overflow-hidden rounded-lg shadow-[rgba(0,_0,_0,_0.2)_0px_0px_3px] bg-white transition-shadow duration-300 ease-in-out">
        {getPostCommentsQuery.isLoading ? (
          Array(2)
            .fill()
            .map((element, id) => <LoadingComment key={id} />)
        ) : getPostCommentsQuery.isError ? (
          <p className="text-red-600">Failed to load comments</p>
        ) : getPostCommentsQuery?.data?.data?.data?.length === 0 ? (
          <p className="text-gray-400 text-sm">No comments yet...</p>
        ) : (
          getPostCommentsQuery?.data?.data?.data?.map((elem, id) => (
            <div key={elem.id}>
              <div className="flex flex-row items-start gap-5">
                <img
                  src={
                    !elem.user.user_profile_image
                      ? ProfileImg
                      : elem.user.user_profile_image
                  }
                  alt="Profile Icon"
                  className={`w-10 rounded-full text-xs border-2 border-gray-100 object-cover ${
                    !elem.user.user_profile_image && "p-1.5"
                  }`}
                />
                <div className="w-full">
                  <div className="w-full flex flex-row justify-between items-center">
                    <h3 className="text-sm font-semibold capitalize">
                      {elem?.user?.name}
                    </h3>
                    <div className=" flex flex-row gap-2">
                      <p className="text-xs text-[#8E8E8E] mt-0.5">
                        {moment(elem.updated_at).isAfter(
                          moment(elem.created_at)
                        ) && <span className="text-xs mr-1">(edited)</span>}

                        {moment(elem.updated_at).isAfter(
                          moment(elem.created_at)
                        )
                          ? moment(elem.updated_at).fromNow()
                          : moment(elem.created_at).fromNow()}
                      </p>
                      {elem.user_id === loggedUser.id && (
                        <div className="flex flex-row items-center gap-2">
                          <BiSolidEditAlt
                            className=" cursor-pointer text-lg text-gray-500 hover:text-green-500 transition-all"
                            title="Edit Comment"
                            onClick={() => editModalFn(elem.id)}
                          />
                          <AiFillDelete
                            className=" cursor-pointer text-lg text-gray-500 hover:text-red-500 transition-all"
                            title="Delete Comment"
                            onClick={() => deleteModalFn(elem.id)}
                          />
                        </div>
                      )}
                    </div>
                  </div>
                  <p className="mt-1 text-sm">{elem?.comment}</p>
                </div>
              </div>
              {id !== getPostCommentsQuery?.data?.data?.data?.length - 1 && (
                <div className="my-5 w-full h-[1px] bg-[#D3DAE2]" />
              )}
            </div>
          ))
        )}
      </div>

      <DeleteConfirmation
        type="Comment"
        openDeleteModal={openDeleteModal}
        setOpenDeleteModal={setOpenDeleteModal}
        id={commentId}
      />

      <EditComment
        id={commentId}
        openEditModal={openEditModal}
        setOpenEditModal={setOpenEditModal}
      />
    </>
  );
};

export default Comments;
