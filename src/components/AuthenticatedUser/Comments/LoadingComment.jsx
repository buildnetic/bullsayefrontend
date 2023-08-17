import Skeleton from "react-loading-skeleton";

const LoadingComment = () => {
  return (
    <>
      <div className="flex flex-row items-start gap-5">
        <Skeleton circle width={50} height={50} />

        <div className="w-full">
          <div className="w-full flex flex-row justify-between items-center">
            <Skeleton width={250} />

            <Skeleton width={100} />
          </div>
          <div className="mt-1">
            <Skeleton />
            <Skeleton />
            <Skeleton />
          </div>
        </div>
      </div>
      <div className="my-5 w-full h-[1px] bg-[#D3DAE2]" />
    </>
  );
};

export default LoadingComment;
