import TopPerformers from "./Partials/TopPerformers/TopPerformers";
import CreatePost from "./Partials/CreatePost/CreatePost";
import Comments from "../../../components/AuthenticatedUser/Comments/Comments";
import PostCard from "../../../components/AuthenticatedUser/PostCard/PostCard";
import { useState } from "react";
import axiosInstance from "../../../axiosInstance";
import { useSelector } from "react-redux";
import { useQuery } from "react-query";
import LoadingPostCard from "../../../components/AuthenticatedUser/PostCard/LoadingPostCard";
import MarketOverview from "./Partials/MarketOverview";

const Main = () => {
  const { loggedUser } = useSelector((state) => state.user);

  const [selectedShowCommentIds, setShowCommentSelectedIds] = useState([]);

  const handleCommentClick = (id) => {
    if (selectedShowCommentIds.includes(id)) {
      setShowCommentSelectedIds(
        selectedShowCommentIds.filter((selectedId) => selectedId !== id)
      );
    } else {
      setShowCommentSelectedIds([id]);
    }
  };

  const getAllPostFn = async () => {
    axiosInstance.defaults.headers[
      "Authorization"
    ] = `Bearer ${loggedUser.token}`;
    const res = await axiosInstance.get("/vips");
    delete axiosInstance.defaults.headers["Authorization"];
    return res?.data;
  };

  const getAllPostQuery = useQuery("getAllPost", getAllPostFn);

  return (
    <>
      <div className="mx-auto max-w-7xl px-2 py-16 sm:px-6 lg:px-8 h-full">
        <div className="grid grid-cols-12 gap-6">
          <div className="col-span-12 lg:col-span-8">
            {/* left side start */}
            <div className=" border-2 p-4 rounded-lg shadow-sm">
              <CreatePost />
            </div>

            <div className="my-5 w-full h-[1px] bg-[#D3DAE2] shadow-[rgba(0,_0,_0,_0.2)_0px_0px_3px]" />

            {getAllPostQuery.isLoading ? (
              Array(4)
                .fill()
                .map((elem, id) => (
                  <div
                    key={id}
                    className="my-5 p-6 px-8 overflow-hidden rounded-lg shadow-[rgba(0,_0,_0,_0.2)_0px_0px_3px] bg-white transition-shadow duration-300 ease-in-out"
                  >
                    <LoadingPostCard />
                  </div>
                ))
            ) : getAllPostQuery.isError ? (
              <p className="text-center text-red-600">
                Failed to fetch all posts
              </p>
            ) : getAllPostQuery?.data?.data?.length === 0 ? (
              <p className="text-center text-gray-400">No posts yet...</p>
            ) : (
              getAllPostQuery?.data?.data?.map((elem, id) => (
                <div
                  key={id}
                  className="my-5 p-6 px-8 overflow-hidden rounded-lg shadow-[rgba(0,_0,_0,_0.2)_0px_0px_3px] bg-white transition-shadow duration-300 ease-in-out"
                >
                  <PostCard
                    data={elem}
                    handleCommentClick={handleCommentClick}
                  />

                  {selectedShowCommentIds.includes(elem.id) && (
                    <Comments postId={elem.id} />
                  )}
                </div>
              ))
            )}
            {/* create post end */}
          </div>
          {/* left side end */}

          {/* right side start */}
          <div className="col-span-12 lg:col-span-4">
            {/* Market Overview start */}
            <h2 className="font-semibold text-gray-400 mb-3 text-xl ">
              Market Overview
            </h2>
            {/* <MarketOverview /> */}
            {/* Market Overview end */}

            {/* Top Performers start*/}
            <div className="mt-4 border-2 p-4 rounded-lg shadow-sm">
              <h2 className="font-semibold text-gray-400 mb-3 text-xl">
                Top Performers
              </h2>
              <TopPerformers />
            </div>
            {/* Top Performers end*/}
          </div>
          {/* right side end */}
        </div>
      </div>
    </>
  );
};

export default Main;
