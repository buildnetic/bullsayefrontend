import Skeleton from "react-loading-skeleton";

const LoadingPostCard = () => {
  return (
    <>
      <div className="flex flex-row items-center gap-5">
        <Skeleton circle width={50} height={50} />
        <div>
          <Skeleton width={300} />
          <Skeleton width={150} />
        </div>
      </div>
      <p className="mt-2 text-md">
        <Skeleton count={3} />
      </p>
      <div className="mt-5 p-6 px-8 overflow-hidden rounded-lg bg-[#f6f6f6] transition-shadow duration-300 ease-in-out">
        <div className="flex flex-row justify-between items-center">
          <Skeleton width={100} />
          <Skeleton width={60} />
        </div>
        <div className="mt-3 flex flex-row justify-between items-center">
          <Skeleton width={100} />
          <Skeleton width={80} />
          <Skeleton width={80} />
        </div>
      </div>
      <div className="my-5 w-full h-[1px] bg-[#D3DAE2]"></div>
      <div className="mt-3 flex flex-row justify-between items-center">
        <p className="text-sm flex items-center gap-1 text-gray-500 cursor-pointer hover:text-gray-900 font-semibold transition-all">
          <Skeleton width={70} />
        </p>
        <p className="text-sm flex items-center gap-1 text-gray-500 cursor-pointer hover:text-gray-900 font-semibold transition-all">
          <Skeleton width={70} />
        </p>
        <p className="text-sm flex items-center gap-1 text-gray-500 cursor-pointer hover:text-gray-900 font-semibold transition-all">
          <Skeleton width={70} />
        </p>
      </div>
    </>
  );
};

export default LoadingPostCard;
