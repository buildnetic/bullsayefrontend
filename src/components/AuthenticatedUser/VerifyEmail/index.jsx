/* eslint-disable react/no-unescaped-entities */
/* eslint-disable react/prop-types */
import { ExclamationTriangleIcon } from "@heroicons/react/24/outline";
import axiosInstance from "../../../axiosInstance";
import { useQuery } from "react-query";
import { useState } from "react";
import { ToastError, ToastSuccess } from "../../../ToastNotification";

const VerifyEmail = ({ email }) => {
  const [getEmail, setGetEmail] = useState(false);

  const getVerifyEmailFn = async () => {
    return await axiosInstance.get(`/send-verify-email/${email}`);
  };

  const getVerifyEmailQuery = useQuery("getVerifyEmail", getVerifyEmailFn, {
    enabled: getEmail,
    onSuccess: (res) => {
      if (res?.data?.success) {
        ToastSuccess(res?.data?.msg);
      } else {
        ToastError(res?.data?.msg);
      }

      setGetEmail(false);
      console.log(res?.data);
    },
    onError: (err) => {
      ToastError("failed in sending email");
      console.log("err", err);
    },
  });

  return (
    <>
      <div>
        <div className="fixed inset-0 z-10 overflow-y-auto">
          <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
            <div>
              <div className="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg">
                <div className="bg-white px-4 pb-4 pt-5 sm:p-6 sm:pb-4">
                  <div className="sm:flex sm:items-start">
                    <div className="mx-auto flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-orange-100 sm:mx-0 sm:h-10 sm:w-10">
                      <ExclamationTriangleIcon
                        className="h-6 w-6 text-orange-600"
                        aria-hidden="true"
                      />
                    </div>
                    <div className="mt-3 text-center sm:ml-4 sm:mt-0 sm:text-left">
                      <h3 className="text-base font-semibold leading-6 text-gray-900">
                        Verify email
                      </h3>
                      <div className="mt-2">
                        <p className="text-sm text-gray-500">
                          You have not verified your email, please verify your
                          email by clicking below send email button that will
                          responsible for getting verify link on your registered
                          email{" "}
                          <span className="text-gray-800 font-semibold">
                            {email}
                          </span>
                          <br />
                          in case you didn't received mail, please again click
                          on Send Mail button
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="bg-gray-50 px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6">
                  <button
                    type="button"
                    className={`inline-flex w-full justify-center rounded-md bg-orange-500 
                    px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-orange-400 
                    sm:ml-3 sm:w-auto ${
                      getVerifyEmailQuery.isLoading && "cursor-not-allowed"
                    }`}
                    onClick={() => setGetEmail(true)}
                    disabled={getVerifyEmailQuery.isLoading}
                  >
                    {getVerifyEmailQuery.isLoading
                      ? "Sending..."
                      : "Send Email"}
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default VerifyEmail;
