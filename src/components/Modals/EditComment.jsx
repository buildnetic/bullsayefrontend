/* eslint-disable react/prop-types */
import { Fragment, useEffect, useRef, useState } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { BiSolidEditAlt } from "react-icons/bi";
import axiosInstance from "../../axiosInstance";
import { useSelector } from "react-redux";
import { useMutation, useQueryClient } from "react-query";
import { ToastError, ToastSuccess } from "../../ToastNotification";

export default function EditComment({ id, openEditModal, setOpenEditModal }) {
  const { loggedUser } = useSelector((state) => state.user);
  const queryClient = useQueryClient();
  const cancelButtonRef = useRef(null);

  const [comment, setComment] = useState("");
  const [loading, setLoading] = useState(false);

  const getPostCommentFn = async () => {
    setLoading(true);
    try {
      const res = await axiosInstance.get(`/Comment/vips/${id}`, {
        headers: {
          Authorization: `Bearer ${loggedUser.token}`,
        },
      });
      setLoading(false);
      setComment(res?.data?.data?.comment);
    } catch (error) {
      setLoading(false);
      console.log(error);
    }
  };
  const updateCommentFn = async () => {
    return await axiosInstance.put(
      `/updateComment/vips/${id}`,
      { comment },
      {
        headers: {
          Authorization: `Bearer ${loggedUser.token}`,
        },
      }
    );
  };

  useEffect(() => {
    if (id) {
      getPostCommentFn();
    }
  }, [id]);

  const updateCommentMutation = useMutation(updateCommentFn, {
    onSuccess: (res) => {
      ToastSuccess(res?.data?.message);
      queryClient.invalidateQueries("getAllPost");
      queryClient.invalidateQueries("userPosts");
      queryClient.invalidateQueries("comments");
      setOpenEditModal(false);
    },
    onError: (err) => {
      ToastError(err?.response?.data?.message);
    },
  });

  const updateCommentHandler = () => {
    updateCommentMutation.mutate();
  };

  return (
    <Transition.Root show={openEditModal} as={Fragment}>
      <Dialog
        as="div"
        className="relative z-10"
        initialFocus={cancelButtonRef}
        onClose={setOpenEditModal}
      >
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
        </Transition.Child>

        <div className="fixed inset-0 z-10 overflow-y-auto">
          <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
              enterTo="opacity-100 translate-y-0 sm:scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 translate-y-0 sm:scale-100"
              leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
            >
              <Dialog.Panel className="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg">
                <div className="bg-white px-4 pb-4 pt-5 sm:p-6 sm:pb-4">
                  <div className="sm:flex sm:items-start">
                    <div className="mx-auto flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-green-100 sm:mx-0 sm:h-10 sm:w-10">
                      <BiSolidEditAlt
                        className="h-6 w-6 text-c-green"
                        aria-hidden="true"
                      />
                    </div>
                    <div className="mt-3 text-center sm:ml-4 sm:mt-0 sm:text-left w-full">
                      <Dialog.Title
                        as="h3"
                        className="text-base font-semibold leading-6 text-gray-900"
                      >
                        Edit Comment
                      </Dialog.Title>
                      <div className="mt-2">
                        {loading ? (
                          "loading..."
                        ) : (
                          <input
                            type="text"
                            className="w-full rounded-lg border-0 py-1.5 px-4 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-c-green-dark sm:text-sm sm:leading-6"
                            placeholder="edit comment..."
                            onChange={(e) => setComment(e.target.value)}
                            value={comment}
                          />
                        )}
                      </div>
                    </div>
                  </div>
                </div>
                <div className="bg-gray-50 px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6">
                  <button
                    type="button"
                    className={`inline-flex w-full justify-center rounded-md  px-3 py-2 text-sm font-semibold text-white shadow-sm  sm:ml-3 sm:w-auto ${
                      loading || updateCommentMutation.isLoading
                        ? "cursor-not-allowed bg-green-300"
                        : "bg-c-green hover:bg-c-green-dark"
                    }`}
                    onClick={updateCommentHandler}
                    disabled={loading || updateCommentMutation.isLoading}
                  >
                    Update
                  </button>
                  <button
                    type="button"
                    className="mt-3 inline-flex w-full justify-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 sm:mt-0 sm:w-auto"
                    onClick={() => setOpenEditModal(false)}
                    ref={cancelButtonRef}
                  >
                    Cancel
                  </button>
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition.Root>
  );
}
