/* eslint-disable react/prop-types */
import { Dialog, Transition } from "@headlessui/react";
import { Fragment } from "react";
import { AiOutlineClose } from "react-icons/ai";

export default function AchievedCallDetails({ open, setOpen, type, data }) {
  function closeModal() {
    setOpen(false);
  }

  return (
    <>
      <Transition appear show={open} as={Fragment}>
        <Dialog as="div" className="relative z-50" onClose={closeModal}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black bg-opacity-25" />
          </Transition.Child>

          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex min-h-full items-center justify-center p-4 text-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel className="w-full max-w-lg transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                  <div className="flex justify-between items-center">
                    <Dialog.Title
                      as="h3"
                      className="text-lg font-medium leading-6 text-gray-900"
                    >
                      Achieved {type} calls - 6
                    </Dialog.Title>
                    <AiOutlineClose
                      title="close"
                      className="text-lg cursor-pointer text-gray-500 hover:text-gray-800 transition"
                      onClick={closeModal}
                    />
                  </div>

                  <div className="mt-3 w-full h-[2px] bg-[#D3DAE2]"></div>

                  <ul
                    role="list"
                    className="h-[400px] overflow-y-scroll no-scrollbar"
                  >
                    {data?.map((elem, id) => (
                      <li
                        className=" grid grid-cols-12 gap-x-6 px-2 py-3 text-center border border-gray-300 my-5 rounded-md shadow-sm"
                        key={id}
                      >
                        <div className=" col-span-3">
                          <p className="text-sm font-semibold leading-6 text-gray-900">
                            {elem.stock_name}
                          </p>
                          <p className="mt-1 truncate text-xs leading-5 text-gray-500">
                            {elem.stock_code} : {elem.exchange_code}
                          </p>
                        </div>
                        <div className=" col-span-3">
                          <p className="text-sm font-semibold leading-6 text-gray-900">
                            {elem.current_price}
                          </p>
                          <p className="mt-1 truncate text-xs leading-5 text-gray-500">
                            Current price
                          </p>
                        </div>
                        <div className=" col-span-3">
                          <p className="text-sm font-semibold leading-6 text-gray-900">
                            {elem.target_price}
                          </p>
                          <p className="mt-1 truncate text-xs leading-5 text-gray-500">
                            Target price
                          </p>
                        </div>
                        <div className=" col-span-3">
                          <p className="text-sm font-semibold leading-6 text-gray-900">
                            {elem.achieved_in}
                          </p>
                          <p className="mt-1 truncate text-xs leading-5 text-gray-500">
                            Achieved in
                          </p>
                        </div>
                      </li>
                    ))}
                  </ul>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  );
}
