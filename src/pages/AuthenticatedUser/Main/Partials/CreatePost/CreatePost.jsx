/* eslint-disable react/prop-types */
import { stockExchangeList } from "../../../../../data/stockExchangeList";
import { useEffect, useState } from "react";
import { useMutation, useQuery, useQueryClient } from "react-query";
import axiosInstance from "../../../../../axiosInstance";
import { ToastError, ToastSuccess } from "../../../../../ToastNotification";
import { useSelector } from "react-redux";
import ProfileImg from "../../../../../assets/images/profile-icon.png";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import LoadingCreatePost from "./LoadingCreatePost";
import Calender from "../../../../../components/Calender/Calender";
import { BsCalendar3, BsInfoCircle } from "react-icons/bs";
import Info from "../../../../../components/Modals/Info";
import moment from "moment";

const CreatePost = () => {
  const { loggedUser } = useSelector((state) => state.user);
  const queryClient = useQueryClient();
  const navigate = useNavigate();
  const location = useLocation();
  const { id: postId } = useParams();

  const headers = {
    headers: {
      Authorization: `Bearer ${loggedUser.token}`,
    },
  };

  const isEditPage = location.pathname.startsWith("/post/edit/");

  // for calender start
  const [selectedDate, setSelectedDate] = useState(null);
  const [calenderInfoOpen, setCalenderInfoOpen] = useState(false);
  const [openCalender, setOpenCalender] = useState(false);

  // Callback function to update the selected date
  const handleDateChange = (newDate) => {
    setSelectedDate(newDate);
  };

  // for calender end

  const [formData, setFormData] = useState({
    type: "",
    description: "",
    exchange_code: "",
    stock_code: "",
    stock_name: "",
    current_price: "",
    target_price: "",
    hashtags: [],
    expiry_date: "",
  });

  const [searchListQueryData, setSearchListQueryData] = useState({
    country_code: "",
    stock_name: "",
  });
  const [stockSearchList, setStockSearchList] = useState(null);
  const [showStockList, setShowStockList] = useState(false);
  const [selectedStock, setSelectedStock] = useState("");

  const selectStockHandler = (stock) => {
    setSelectedStock(stock);
    setSearchListQueryData((prev) => ({
      ...prev,
      stock_name: stock.stock_name,
    }));
    setFormData((prev) => ({
      ...prev,
      stock_code: stock.symbol,
      stock_name: stock.stock_name,
      current_price: stock.current_price,
      exchange_code: stock.exchange_short_name,
    }));
    setShowStockList(false);
  };

  const onChangeHandler = (e) => {
    const { name, value } = e.target;

    if (name === "hashtags") {
      const hashtagsArray = value.split(" ");
      setFormData((prev) => ({ ...prev, [name]: hashtagsArray }));
    } else {
      setFormData((prev) => ({ ...prev, [name]: value }));
    }
  };

  function findStockExchangeIndexByCode(code) {
    for (let i = 0; i < stockExchangeList.length; i++) {
      if (stockExchangeList[i].code === code) {
        return i; // Return the index of the matching element
      }
    }
    return -1; // Code not found
  }

  const getCurrentPrice = async () => {
    const res = await axiosInstance.post("/stock", {
      stock_code: formData.stock_code,
      exchange_code: formData.exchange_code,
    });
    return res;
  };

  const createPost = async () => {
    const res = await axiosInstance.post(
      "/create/vips",
      { ...formData, expiry_date: moment(selectedDate).format("YYYY/MM/DD") },
      headers
    );
    return res;
  };

  const getPostDetailsFn = async () => {
    return await axiosInstance.get(`/vips/${postId}`, headers);
  };

  const updatePostFn = async () => {
    return await axiosInstance.put(`/update/vips/${postId}`, formData, headers);
  };

  const getUserDetailsFn = async () => {
    return await axiosInstance.get(`/users/${loggedUser.id}`, headers);
  };

  useEffect(() => {
    const getStockSearchListFn = async (name, country) => {
      try {
        const res = await axiosInstance.get(
          `/stocks/search?stock_name=${name || null}&country_code=${
            country || null
          }`,
          headers
        );
        setStockSearchList(res?.data?.data);
        setShowStockList(true);
        // console.log("res", res?.data?.data);
      } catch (error) {
        console.log("error", error);
      }
    };

    const stockListTimer = setTimeout(() => {
      searchListQueryData.stock_name &&
        searchListQueryData.country_code &&
        getStockSearchListFn(
          searchListQueryData.stock_name,
          searchListQueryData.country_code
        );
    }, 800);

    return () => clearTimeout(stockListTimer);
  }, [searchListQueryData.stock_name, searchListQueryData.country_code]);

  const getUserDetailsQuery = useQuery(
    "getUserDetailsCreatePostComp",
    getUserDetailsFn
  );

  const getPostDetailsQuery = useQuery("getPostDetails", getPostDetailsFn, {
    enabled: isEditPage && postId !== !undefined,
    onSuccess: (res) => {
      setFormData((prev) => ({
        ...prev,
        type: res?.data?.data?.type,
        description: res?.data?.data?.description,
        exchange_code: res?.data?.data?.exchange_code,
        stock_code: res?.data?.data?.stock_code,
        stock_name: res?.data?.data?.stock_name,
        current_price: res?.data?.data?.current_price,
        target_price: res?.data?.data?.target_price,
        hashtags: JSON.parse(res?.data?.data?.hashtags),
      }));
    },
    onError: (err) => {
      console.log("err", err);
    },
  });

  const getCurrentPriceQuery = useQuery("currentPrice", getCurrentPrice, {
    enabled: false,
    onSuccess: (res) => {
      if (res?.data?.data?.summary) {
        setFormData((prev) => ({
          ...prev,
          stock_name: res?.data?.data?.summary?.title,
        }));
        setFormData((prev) => ({
          ...prev,
          current_price: res?.data?.data?.summary?.extracted_price,
        }));
      } else {
        setFormData((prev) => ({ ...prev, stock_name: "" }));
        setFormData((prev) => ({
          ...prev,
          current_price: "",
        }));
        ToastError("Invalid Exchange or Stock code");
      }
    },
    onError: () => {
      ToastError("Error");
    },
  });

  const createPostMutation = useMutation(createPost, {
    onSuccess: (res) => {
      ToastSuccess(res?.data?.message);
      setFormData((prev) => ({
        ...prev,
        type: "",
        description: "",
        exchange_code: "",
        stock_code: "",
        stock_name: "",
        current_price: "",
        target_price: "",
        hashtags: [],
      }));
      setSearchListQueryData((prev) => ({
        ...prev,
        country_code: "",
        stock_name: "",
      }));
      setSelectedDate(null);
      queryClient.invalidateQueries("getAllPost");
      navigate("/");
    },
    onError: (error) => {
      ToastError(error?.response?.data?.message);
      console.log("error", error);
    },
  });

  const updatePostMutation = useMutation(updatePostFn, {
    onSuccess: (res) => {
      ToastSuccess(res?.data?.message);
      setFormData((prev) => ({
        ...prev,
        type: "",
        description: "",
        exchange_code: "",
        stock_code: "",
        stock_name: "",
        current_price: "",
        target_price: "",
        hashtags: [],
      }));
      queryClient.invalidateQueries("getAllPost");
      navigate("/");
    },
    onError: (error) => {
      ToastError(error?.response?.data?.message);
      console.log("error", error);
    },
  });

  const formHandler = (e) => {
    e.preventDefault();

    if (isEditPage) {
      updatePostMutation.mutate(formData);
    } else {
      createPostMutation.mutate(formData);
    }
  };

  return (
    <>
      {getPostDetailsQuery.isLoading ? (
        <LoadingCreatePost />
      ) : getPostDetailsQuery.isError ? (
        "Error in fetching post..."
      ) : (
        <div className="flex flex-row gap-4">
          <img
            src={
              !getUserDetailsQuery?.data?.data?.data?.user?.user_profile_image
                ? ProfileImg
                : getUserDetailsQuery?.data?.data?.data?.user
                    ?.user_profile_image
            }
            alt="Profile Image"
            className={`w-12 h-12 rounded-full border-2 border-gray-100 object-cover ${
              !getUserDetailsQuery?.data?.data?.data?.user
                ?.user_profile_image && "p-1.5"
            }`}
          />
          <div className="w-full mt-1">
            <div className="grid grid-cols-12 gap-5">
              <div className=" col-span-6">
                <select
                  name="type"
                  value={formData.type}
                  onChange={onChangeHandler}
                  className="w-full rounded-md text-sm border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-c-green-dark sm:leading-6"
                >
                  <option value="" disabled>
                    Select call type
                  </option>
                  <option value="call">Buy</option>
                  <option value="sell">Sell</option>
                </select>
              </div>
              <div className=" col-span-6">
                <select
                  name="country_code"
                  value={searchListQueryData.country_code}
                  onChange={(e) =>
                    setSearchListQueryData((prev) => ({
                      ...prev,
                      country_code: e.target.value,
                    }))
                  }
                  className="w-full rounded-md text-sm border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-c-green-dark sm:leading-6"
                >
                  <option value="" disabled>
                    Country
                  </option>
                  <option value="IN">India</option>
                  <option value="USA">USA</option>
                </select>
              </div>

              <div className="col-span-12 relative">
                <input
                  type="text"
                  name="stock_name"
                  value={searchListQueryData.stock_name}
                  onChange={(e) =>
                    setSearchListQueryData((prev) => ({
                      ...prev,
                      stock_name: e.target.value,
                    }))
                  }
                  placeholder="search stock"
                  className={`w-full rounded-md text-sm border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-c-green-dark sm:leading-6 ${
                    !searchListQueryData.country_code &&
                    "cursor-not-allowed bg-gray-100"
                  }`}
                  disabled={!searchListQueryData.country_code}
                  title={
                    !searchListQueryData.country_code
                      ? "Select country first"
                      : "Search stocks"
                  }
                  onClick={() => setShowStockList(true)}
                />

                {showStockList && stockSearchList && (
                  <ul
                    role="list"
                    className="absolute left-0 right-0 bg-white max-h-60 overflow-y-scroll border border-t-0 px-2 py-2 rounded-b-md shadow-sm divide-y divide-gray-100 col-span-12 z-30"
                  >
                    {stockSearchList?.length === 0 && (
                      <li className="flex justify-between gap-x-6 py-3 items-center">
                        <div className="flex min-w-0 gap-x-4">
                          <div className="min-w-0 flex-auto">
                            <p className="text-sm font-semibold leading-6 text-gray-900">
                              No results
                            </p>
                          </div>
                        </div>
                      </li>
                    )}

                    {stockSearchList?.map((elem, id) => (
                      <li
                        key={id}
                        className="flex justify-between gap-x-6 p-3 rounded-md items-center cursor-pointer hover:bg-gray-200"
                        onClick={() => selectStockHandler(elem)}
                      >
                        <div className="flex min-w-0 gap-x-4">
                          <div className="min-w-0 flex-auto">
                            <p className="text-sm font-semibold leading-6 text-gray-900">
                              {elem.stock_name}
                            </p>
                            <p className="mt-1 text-xs text-gray-500">
                              {elem.symbol} : {elem.exchange_short_name}
                            </p>
                          </div>
                        </div>
                        <div className="hidden shrink-0 sm:flex sm:flex-col sm:items-end">
                          <p className="text-sm font-semibold leading-6 text-gray-900">
                            {elem.country_code === "IN"
                              ? "₹"
                              : elem.country_code === "US"
                              ? "$"
                              : elem.country_code}{" "}
                            {elem.current_price}
                          </p>
                        </div>
                      </li>
                    ))}
                  </ul>
                )}
              </div>

              <div className="col-span-6">
                <span
                  className=" px-3 cursor-not-allowed flex items-center rounded-md text-sm h-full border-0  text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-c-green-dark sm:leading-6 bg-gray-100"
                  title={formData.stock_name}
                >
                  Current Price:{" "}
                  {formData.current_price && selectedStock.country_code === "IN"
                    ? `₹ ${formData.current_price}`
                    : formData.country_code === "US"
                    ? `$ ${formData.current_price}`
                    : `${formData.country_code || ""} ${
                        formData.current_price || ""
                      }`}
                </span>
              </div>

              <input
                type="text"
                name="target_price"
                required
                placeholder="Target Price"
                className=" col-span-6 block rounded-md text-sm h-full border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-c-green-dark sm:leading-6"
                onChange={onChangeHandler}
                value={formData.target_price}
              />

              <input
                type="text"
                name="hashtags"
                placeholder="#hashtags #vipana"
                className="col-span-7 block rounded-md text-sm h-full border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-c-green-dark sm:leading-6"
                onChange={onChangeHandler}
                value={formData.hashtags.join(" ")}
              />

              <div className=" col-span-5 text-sm relative border items-center shadow-sm rounded-md px-2">
                <div className="h-full flex justify-between items-center ">
                  <p
                    className="text-gray-700 cursor-pointer"
                    onClick={() => setOpenCalender(!openCalender)}
                  >
                    <BsCalendar3 className=" inline-block mr-2" />
                    Will Achieve till:{" "}
                    {selectedDate && selectedDate?.toLocaleDateString("en-GB")}
                  </p>
                  <BsInfoCircle
                    onClick={() => setCalenderInfoOpen(true)}
                    className="text-xs cursor-pointer text-gray-500 hover:text-gray-800 transition duration-200 ease-in-out"
                  />
                </div>

                {openCalender && (
                  <div className=" absolute left-0 right-0">
                    <Calender onDateChange={handleDateChange} />
                  </div>
                )}
              </div>

              <textarea
                name="description"
                id="message"
                rows="4"
                className="col-span-12 resize-y block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-c-green focus:border-c-green dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-c-green dark:focus:border-c-green"
                placeholder="Your message..."
                onChange={onChangeHandler}
                value={formData.description}
              ></textarea>

              <button
                type="button"
                onClick={formHandler}
                className=" col-span-12 rounded-md h-full w-full border-c-green border-2 bg-c-green p-2 shadow-md hover:shadow-none text-white duration-75 text-sm font-medium"
              >
                Post
              </button>
            </div>
          </div>
        </div>
      )}

      <Info
        open={calenderInfoOpen}
        setOpen={setCalenderInfoOpen}
        infoDetails={
          "You can not select todays date, date must be after todays date"
        }
      />
    </>
  );
};

export default CreatePost;
