/* eslint-disable react/prop-types */
import { Fragment, useRef, useState } from "react";
import { Dialog, Transition } from "@headlessui/react";
import {
  FacebookShareButton,
  LinkedinShareButton,
  TwitterShareButton,
  WhatsappShareButton,
} from "react-share";
import { FaFacebookF, FaLinkedinIn } from "react-icons/fa";
import { BsTwitter, BsWhatsapp } from "react-icons/bs";

export default function SocialShareModal({
  openSocialMediaShareModal,
  setOpenSocialMediaShareModal,
  id,
}) {
  const cancelButtonRef = useRef(null);

  const originPath = window.location.origin;

  const [copied, setCopied] = useState(false);

  const copyToClipboard = () => {
    const linkInput = document.getElementById("linkInput");
    linkInput.select();
    document.execCommand("copy");
    setCopied(true);

    setTimeout(() => {
      setCopied(false);
    }, 2000);
  };

  return (
    <Transition.Root show={openSocialMediaShareModal} as={Fragment}>
      <Dialog
        as="div"
        className="relative z-10"
        initialFocus={cancelButtonRef}
        onClose={setOpenSocialMediaShareModal}
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
              <Dialog.Panel className="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-xs">
                <div className="bg-white px-4 pb-4 pt-5 sm:p-6 sm:pb-4">
                  <h1 className="text-md mb-3 font-semibold">Share Link</h1>
                  <div className="my-4 relative">
                    <input
                      id="linkInput"
                      className="text-xs sm:text-sm border p-1 sm:p-3 rounded-sm shadow-sm bg-gray-100 overflow-hidden w-full outline-none"
                      value={`${originPath}/post/${id}`}
                      readOnly
                    />
                    <span
                      onClick={copyToClipboard}
                      className="absolute top-0 right-0 text-xs h-full flex items-center justify-center px-3 bg-gray-300 rounded-r-sm cursor-pointer hover:bg-gray-400 transition-all"
                    >
                      {copied ? "copied!" : "copy"}
                    </span>
                  </div>
                  <div className="flex items-center justify-between mt-5">
                    <FacebookShareButton url={`${originPath}/post/${id}`}>
                      <div className="bg-[#3B5998] text-white w-8 h-8 sm:w-12 sm:h-12 p-1 rounded-full outline-none flex justify-center items-center">
                        <FaFacebookF className="text-md sm:text-lg" />
                      </div>
                    </FacebookShareButton>
                    <WhatsappShareButton url={`${originPath}/post/${id}`}>
                      <div className="bg-[#25D366] text-white w-8 h-8 sm:w-12 sm:h-12 p-1 rounded-full outline-none flex justify-center items-center">
                        <BsWhatsapp className="text-md sm:text-lg" />
                      </div>
                    </WhatsappShareButton>
                    <LinkedinShareButton url={`${originPath}/post/${id}`}>
                      <div className="bg-[#007FB1] text-white w-8 h-8 sm:w-12 sm:h-12 p-1 rounded-full outline-none flex justify-center items-center">
                        <FaLinkedinIn className="text-md sm:text-lg" />
                      </div>
                    </LinkedinShareButton>
                    <TwitterShareButton url={`${originPath}/post/${id}`}>
                      <div className="bg-[#00ACED] text-white w-8 h-8 sm:w-12 sm:h-12 p-1 rounded-full outline-none flex justify-center items-center">
                        <BsTwitter className="text-md sm:text-lg" />
                      </div>
                    </TwitterShareButton>
                  </div>
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition.Root>
  );
}
