import { useQuery } from "react-query";
import axiosInstance from "../../../axiosInstance";
import { NavLink, useLocation } from "react-router-dom";
import { useSelector } from "react-redux";
import PostCard from "../../../components/AuthenticatedUser/PostCard/PostCard";
import { useEffect, useState } from "react";
import ProfileImg from "../../../assets/images/profile-icon.png";
import Comments from "../../../components/AuthenticatedUser/Comments/Comments";

const Search = () => {
  const { loggedUser } = useSelector((state) => state.user);

  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);

  const [selectedShowCommentIds, setShowCommentSelectedIds] = useState([]);

  const getSerachResultsFn = async () => {
    return await axiosInstance.get(
      `/search`,
      {
        params: {
          search: queryParams.get("search") || location.hash,
        },
      },
      {
        headers: {
          Authorization: `Bearer ${loggedUser.token}`,
        },
      }
    );
  };

  const getSerachResultsQuery = useQuery(
    "getSerachResults",
    getSerachResultsFn,
    {
      onSuccess: (res) => {
        console.log(res);
      },
      onError: (err) => {
        console.log(err);
      },
    }
  );

  const handleCommentClick = (id) => {
    if (selectedShowCommentIds.includes(id)) {
      setShowCommentSelectedIds(
        selectedShowCommentIds.filter((selectedId) => selectedId !== id)
      );
    } else {
      setShowCommentSelectedIds([id]);
    }
  };

  useEffect(() => {
    getSerachResultsQuery.refetch();
  }, [location]);

  console.log("getSerachResultsQuery", getSerachResultsQuery);

  return (
    <>
      <div className="mx-auto max-w-7xl px-2 py-16 sm:px-6 lg:px-8 h-full">
        <p className="text-gray-500 text-sm">
          Showing search results for:{" "}
          {`'${queryParams.get("search") || location.hash}'`}
          {` (found ${
            getSerachResultsQuery?.data?.data?.data?.hashtag_results
              ? getSerachResultsQuery?.data?.data?.data?.hashtag_results.length
              : getSerachResultsQuery?.data?.data?.data?.user_result.length
          } results)`}
        </p>

        <div className="my-5 w-full h-[1px] bg-[#D3DAE2] shadow-[rgba(0,_0,_0,_0.2)_0px_0px_3px]" />

        {/* posts */}
        {getSerachResultsQuery?.data?.data?.data?.hashtag_results &&
          getSerachResultsQuery?.data?.data?.data?.hashtag_results?.map(
            (elem, id) => (
              <div key={id}>
                <PostCard
                  data={elem}
                  handleCommentClick={handleCommentClick}
                  classes="my-5 p-6 px-8 overflow-hidden rounded-lg shadow-[rgba(0,_0,_0,_0.2)_0px_0px_3px] bg-white transition-shadow duration-300 ease-in-out"
                />
                {selectedShowCommentIds.includes(elem.id) && (
                  <Comments postId={elem.id} />
                )}
              </div>
            )
          )}

        {/* users */}
        {getSerachResultsQuery?.data?.data?.data?.user_result && (
          <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
            {getSerachResultsQuery?.data?.data?.data?.user_result?.map(
              (elem, id) => (
                <div
                  className="p-6 px-8 overflow-hidden rounded-lg shadow-[rgba(0,_0,_0,_0.2)_0px_0px_3px] bg-white hover:shadow-xl transition-shadow duration-300 ease-in-out"
                  key={id}
                >
                  <img
                    src={
                      !elem.user_profile_image
                        ? ProfileImg
                        : elem.user_profile_image
                    }
                    alt="Profile Icon"
                    className={`w-16 h-16 rounded-full mx-auto border-2 border-gray-100 object-cover ${
                      !elem.user_profile_image && "p-1.5"
                    }`}
                  />
                  <NavLink
                    to={`/profile/${elem.id}`}
                    className="block mt-1 text-md font-bold text-center"
                  >
                    {elem.name}
                  </NavLink>
                  <p className="text-center text-md text-[#8E8E8E] mt-1">
                    Accuracy Index:{" "}
                    <span className="text-c-green font-bold">
                      +3.10% (2 Months)
                    </span>
                  </p>
                  <div className="flex flex-row justify-around mt-2">
                    <p className="text-[#8E8E8E]">
                      <span className="font-bold">{elem.followers_count}</span>{" "}
                      followers
                    </p>
                    <p className="text-[#8E8E8E]">
                      <span className="font-bold">{elem.following_count}</span>{" "}
                      following
                    </p>
                  </div>
                  <p className="mt-2 text-md">
                    {!elem.about ? (
                      <span className="text-sm text-gray-400">
                        not added about yet...
                      </span>
                    ) : (
                      elem.about
                    )}
                  </p>
                  <div className="my-3 w-full h-[2px] bg-[#D3DAE2]"></div>
                  <div className="flex flex-row justify-around mt-2">
                    <div className="text-center">
                      <p className="text-[#8E8E8E] text-sm">Buying Accuracy</p>
                      <p className="text-c-green font-bold mt-0.5">
                        0/{elem.buy_post_count}
                      </p>
                    </div>
                    <div className="text-center">
                      <p className="text-[#8E8E8E] text-sm">Selling Accuracy</p>
                      <p className="text-[#EF413E] font-bold mt-0.5">
                        0/{elem.sell_post_count}
                      </p>
                    </div>
                  </div>
                </div>
              )
            )}
          </div>
        )}
      </div>
    </>
  );
};

export default Search;
