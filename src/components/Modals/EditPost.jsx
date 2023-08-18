/* eslint-disable react/prop-types */
import { Fragment, useRef } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { XMarkIcon } from "@heroicons/react/24/solid";
import CreatePost from "../../pages/AuthenticatedUser/Main/Partials/CreatePost/CreatePost";

export default function EditPost({
  type,
  openEditPostModal,
  setOpenEditPostModal,
  id,
}) {
  const cancelButtonRef = useRef(null);

  return (
    <Transition.Root show={openEditPostModal} as={Fragment}>
      <Dialog
        as="div"
        className="relative z-10"
        initialFocus={cancelButtonRef}
        onClose={setOpenEditPostModal}
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
          <div className="flex min-h-full items-center justify-center p-4 text-center sm:items-center sm:p-0">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
              enterTo="opacity-100 translate-y-0 sm:scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 translate-y-0 sm:scale-100"
              leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
            >
              <Dialog.Panel className="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-3xl">
                <div className="relative bg-white px-4 pb-4 pt-5 sm:p-6 sm:pb-4">
                  <div className=" absolute right-1 top-1 w-6 h-6 p-0.5 ml-auto text-gray-400 hover:text-gray-700 cursor-pointer hover:bg-gray-100 rounded-full transition-all hover:shadow-sm">
                    <span
                      onClick={() => setOpenEditPostModal(false)}
                      ref={cancelButtonRef}
                    >
                      <XMarkIcon />
                    </span>
                  </div>
                  <CreatePost type={type} postId={id} />
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition.Root>
  );
}
