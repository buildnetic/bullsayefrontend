import Skeleton from "react-loading-skeleton";

const LoadingCreatePost = () => {
  return (
    <>
      <div className="flex flex-row gap-4">
        <Skeleton circle width={50} height={50} />
        <div className="w-full mt-1">
          <div>
            <Skeleton height={25} />
          </div>
          <div className="mt-2">
            <Skeleton height={25} />
          </div>
          <div className="grid grid-cols-12 gap-5 mt-2 gap-y-3">
            <div className="col-span-4">
              <Skeleton height={25} />
            </div>
            <div className="col-span-4">
              <Skeleton height={25} />
            </div>
            <div className="col-span-4">
              <Skeleton height={25} />
            </div>
            <div className="col-span-4">
              <Skeleton height={25} />
            </div>
            <div className="col-span-8">
              <Skeleton height={25} />
            </div>
            <div className="col-span-12">
              <Skeleton height={80} />
            </div>
            <div className="col-span-12">
              <Skeleton height={30} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default LoadingCreatePost;
