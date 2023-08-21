import Skeleton from "react-loading-skeleton";

const LoadingEditProfile = () => {
  return (
    <>
      <Skeleton width={100} />
      <div className="flex flex-row items-center gap-5 mt-1">
        <Skeleton circle width={50} height={50} />
        <div>
          <Skeleton width={150} />
        </div>
      </div>
      <div className="grid grid-cols-1 gap-x-6 gap-y-5 sm:grid-cols-6 mt-2">
        <div className="sm:col-span-3">
          <label>
            <Skeleton width={150} />
          </label>
          <div className="mt-2">
            <Skeleton />
          </div>
        </div>
        <div className="sm:col-span-3">
          <label>
            <Skeleton width={150} />
          </label>
          <div className="mt-2">
            <Skeleton />
          </div>
        </div>
        <div className="col-span-full">
          <label>
            <Skeleton width={150} />
          </label>
          <div className="mt-2">
            <Skeleton height={100} />
            <div className="mt-2">
              <Skeleton width={300} />
            </div>
          </div>
        </div>
        <div className="sm:col-span-3">
          <label>
            <Skeleton width={150} />
          </label>
          <div className="mt-2">
            <Skeleton />
          </div>
        </div>
        <div className="sm:col-span-3">
          <label>
            <Skeleton width={150} />
          </label>
          <div className="mt-2">
            <Skeleton />
          </div>
        </div>
        <div className="sm:col-span-3">
          <label>
            <Skeleton width={150} />
          </label>
          <div className="mt-2">
            <Skeleton />
          </div>
        </div>
      </div>
      <div className="mt-6 flex items-center justify-end gap-x-6">
        <Skeleton width={150} height={30} />
      </div>
    </>
  );
};

export default LoadingEditProfile;
