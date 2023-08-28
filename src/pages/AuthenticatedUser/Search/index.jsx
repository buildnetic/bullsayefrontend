import { useQuery } from "react-query";
import axiosInstance from "../../../axiosInstance";
import { useLocation } from "react-router-dom";
import { useSelector } from "react-redux";
import PostCard from "../../../components/AuthenticatedUser/PostCard/PostCard";
import { useEffect } from "react";

const Search = () => {
  const { loggedUser } = useSelector((state) => state.user);

  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);

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

  useEffect(() => {
    getSerachResultsQuery.refetch();
  }, [location]);

  console.log("getSerachResultsQuery", getSerachResultsQuery);

  return (
    <>
      <div className="mx-auto max-w-7xl px-2 py-16 sm:px-6 lg:px-8 h-full">
        <p className="text-gray-500 text-sm">
          Showing search results for:{" "}
          {queryParams.get("search") || location.hash}
        </p>

        {getSerachResultsQuery?.data?.data?.data?.hashtag_results &&
          getSerachResultsQuery?.data?.data?.data?.hashtag_results?.map(
            (elem, id) => (
              <PostCard
                data={elem}
                classes="my-5 p-6 px-8 overflow-hidden rounded-lg shadow-[rgba(0,_0,_0,_0.2)_0px_0px_3px] bg-white transition-shadow duration-300 ease-in-out"
                key={id}
              />
            )
          )}
      </div>
    </>
  );
};

export default Search;
