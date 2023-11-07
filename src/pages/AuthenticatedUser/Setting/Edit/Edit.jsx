import { useState } from "react";
import axiosInstance from "../../../../axiosInstance";
import { useSelector } from "react-redux";
import { useMutation, useQuery, useQueryClient } from "react-query";
import { ToastError, ToastSuccess } from "../../../../ToastNotification";
import ProfileImg from "../../../../assets/images/profile-icon.png";
import LoadingEditProfile from "./LoadingEditProfile";

const Edit = () => {
  const { loggedUser } = useSelector((state) => state.user);
  const queryClient = useQueryClient();

  const [selectedImage, setSelectedImage] = useState("");
  const [selectedImageUrl, setSelectedImageUrl] = useState("");
  const [userData, setUserData] = useState({
    name: "",
    email: "",
    about: "",

    current_password: "",
    new_password: "",
    new_password_confirmation: "",
  });

  const handleImageUpload = (event) => {
    const file = event.target.files[0];
    setSelectedImage(file);

    const imageURL = URL.createObjectURL(file);
    setSelectedImageUrl(imageURL);
  };

  const onChangeHandler = (e) => {
    setUserData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const getUserDetailsFn = async () => {
    return await axiosInstance.get(`/users/${loggedUser.id}`, {
      headers: {
        Authorization: `Bearer ${loggedUser.token}`,
      },
    });
  };

  const updateUserDetailsFn = async () => {
    const formData = new FormData();
    formData.append("name", userData.name);
    formData.append("email", userData.email);
    formData.append("about", userData.about);
    formData.append("user_profile_image", selectedImage);

    return await axiosInstance.post(`/users/update`, formData, {
      headers: {
        Authorization: `Bearer ${loggedUser.token}`,
        "Content-Type": "multipart/form-data",
      },
    });
  };

  const updateUserPasswordFn = async () => {
    return await axiosInstance.post(
      `/users/update`,
      {
        current_password: userData.current_password,
        new_password: userData.new_password,
        new_password_confirmation: userData.new_password_confirmation,
      },
      {
        headers: {
          Authorization: `Bearer ${loggedUser.token}`,
        },
      }
    );
  };

  const getUserDetailsQuery = useQuery("getUserDetails", getUserDetailsFn, {
    onSuccess: (res) => {
      setUserData((prev) => ({
        ...prev,
        name:
          res?.data?.data?.user?.name !== null
            ? res?.data?.data?.user?.name
            : "",
        email:
          res?.data?.data?.user?.email !== null
            ? res?.data?.data?.user?.email
            : "",
        about:
          res?.data?.data?.user?.about !== null
            ? res?.data?.data?.user?.about
            : "",
      }));
    },
  });

  const updateUserDetailsMutation = useMutation(updateUserDetailsFn, {
    onSuccess: (res) => {
      queryClient.invalidateQueries("getUserDetails");
      queryClient.invalidateQueries("getUserDetailsHeader");
      queryClient.invalidateQueries("getUserDetailsCreatePostComp");
      ToastSuccess(res?.data?.message);
    },
    onError: (err) => {
      ToastError(err?.response?.data?.message || "Falied to update.");
      console.log("err", err);
    },
  });

  const updateUserPasswordMutation = useMutation(updateUserPasswordFn, {
    onSuccess: (res) => {
      ToastSuccess(res?.data?.message);
      setUserData((prev) => ({
        ...prev,
        current_password: "",
        new_password: "",
        new_password_confirmation: "",
      }));
      queryClient.invalidateQueries("getUserDetails");
    },
    onError: (err) => {
      ToastError(err?.response?.data?.message);
      setUserData((prev) => ({
        ...prev,
        current_password: "",
        new_password: "",
        new_password_confirmation: "",
      }));
      console.log("err", err);
    },
  });

  const updateUserHandler = (e) => {
    e.preventDefault();
    updateUserDetailsMutation.mutate();
  };

  const updateUserPasswordHandler = (e) => {
    e.preventDefault();

    if (
      userData.current_password.length > 0 &&
      userData.new_password.length > 0 &&
      userData.new_password_confirmation.length > 0
    ) {
      updateUserPasswordMutation.mutate();
    }
  };

  return (
    <>
      <div className="mx-auto max-w-7xl px-2 py-16 sm:px-6 lg:px-8 h-full">
        <div className="p-6 px-8 overflow-hidden rounded-lg shadow-md bg-white transition-shadow duration-300 ease-in-out">
          <h2 className="font-semibold text-gray-400 mb-3 text-2xl">
            Edit Profile
          </h2>
          {getUserDetailsQuery.isLoading ? (
            <LoadingEditProfile />
          ) : getUserDetailsQuery.isError ? (
            "failed to fetch user profile"
          ) : (
            <form>
              <div className="space-y-5">
                <div className="pb-12">
                  <div className="grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                    <div className="col-span-full">
                      <label
                        htmlFor="photo"
                        className="block text-sm font-medium leading-6 text-gray-900"
                      >
                        Profile Photo
                      </label>
                      <div className="mt-2 flex items-center gap-x-3">
                        {!selectedImage && (
                          <img
                            src={
                              getUserDetailsQuery?.data?.data?.data?.user
                                ?.user_profile_image !== null
                                ? getUserDetailsQuery?.data?.data?.data?.user
                                    ?.user_profile_image
                                : ProfileImg
                            }
                            alt="Profile Icon"
                            className={`w-14 h-14 rounded-full text-xs border-2 border-gray-100 object-cover ${
                              getUserDetailsQuery?.data?.data?.data
                                ?.user_profile_image === null && "p-1.5"
                            }`}
                          />
                        )}

                        {selectedImage && (
                          <img
                            src={selectedImageUrl}
                            alt="Profile Icon"
                            className={`w-14 h-14 rounded-full text-xs border-2 border-gray-100 object-cover ${
                              !selectedImage && "p-1.5"
                            }`}
                          />
                        )}

                        <input
                          type="file"
                          className="text-sm"
                          onChange={handleImageUpload}
                        />
                      </div>
                    </div>

                    <div className="sm:col-span-3">
                      <label
                        htmlFor="name"
                        className="block text-sm font-medium leading-6 text-gray-900"
                      >
                        Name
                      </label>
                      <div className="mt-2">
                        <input
                          type="text"
                          name="name"
                          id="name"
                          autoComplete="given-name"
                          className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-c-green sm:text-sm sm:leading-6"
                          onChange={onChangeHandler}
                          value={userData.name}
                        />
                      </div>
                    </div>

                    <div className="sm:col-span-3">
                      <label
                        htmlFor="email"
                        className="block text-sm font-medium leading-6 text-gray-900"
                      >
                        Email address
                      </label>
                      <div className="mt-2">
                        <input
                          id="email"
                          name="email"
                          type="email"
                          autoComplete="email"
                          className="block w-full rounded-md border-0 py-1.5 bg-gray-100 cursor-not-allowed text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-c-green sm:text-sm sm:leading-6"
                          onChange={onChangeHandler}
                          value={userData.email}
                          disabled
                        />
                      </div>
                    </div>

                    <div className="col-span-full">
                      <label
                        htmlFor="about"
                        className="block text-sm font-medium leading-6 text-gray-900"
                      >
                        About
                      </label>
                      <div className="mt-2">
                        <textarea
                          id="about"
                          name="about"
                          rows={3}
                          className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-c-green sm:text-sm sm:leading-6"
                          onChange={onChangeHandler}
                          value={userData.about}
                        />
                      </div>
                      <p className="text-sm leading-6 text-gray-600">
                        Write a few sentences about yourself.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-2 flex items-center justify-end gap-x-6">
                <button
                  type="button"
                  className="rounded-md bg-c-green px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-c-green-dark focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2"
                  onClick={updateUserHandler}
                >
                  Update
                </button>
              </div>
            </form>
          )}
        </div>

        <div className="p-6 px-8 mt-10 overflow-hidden rounded-lg shadow-md bg-white transition-shadow duration-300 ease-in-out">
          <h2 className="font-semibold text-gray-400 mb-3 text-2xl">
            Change Password
          </h2>

          <form>
            <div className="grid grid-cols-12 gap-4">
              <div className="sm:col-span-4">
                <label
                  htmlFor="current_password"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  Current Password
                </label>
                <div className="mt-2">
                  <input
                    type="password"
                    name="current_password"
                    id="current_password"
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-c-green sm:text-sm sm:leading-6"
                    onChange={onChangeHandler}
                    value={userData.current_password}
                  />
                </div>
              </div>
              <div className="sm:col-span-4">
                <label
                  htmlFor="new_password"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  New Password
                </label>
                <div className="mt-2">
                  <input
                    type="password"
                    name="new_password"
                    id="new_password"
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-c-green sm:text-sm sm:leading-6"
                    onChange={onChangeHandler}
                    value={userData.new_password}
                  />
                </div>
              </div>
              <div className="sm:col-span-4">
                <label
                  htmlFor="new_password_confirmation"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  Confirm New Password
                </label>
                <div className="mt-2">
                  <input
                    type="password"
                    name="new_password_confirmation"
                    id="new_password_confirmation"
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-c-green sm:text-sm sm:leading-6"
                    onChange={onChangeHandler}
                    value={userData.new_password_confirmation}
                  />
                </div>
              </div>
            </div>
            <div className="mt-6 flex items-center justify-end gap-x-6">
              <button
                type="button"
                className={`rounded-md bg-c-green px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-c-green-dark focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 ${
                  updateUserPasswordMutation.isLoading && "cursor-not-allowed"
                }`}
                onClick={updateUserPasswordHandler}
                disabled={updateUserPasswordMutation.isLoading}
              >
                Update Password
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default Edit;
