import Skeleton from "react-loading-skeleton";

const LoadingMarketOverview = () => {
  return (
    <>
      <div className="w-full border-2 border-gray-100 shadow-sm rounded-md p-2">
        <Skeleton />
        {Array(5)
          .fill()
          .map((elem, id) => (
            <div
              className="grid grid-cols-12 px-3 py-2 rounded text-sm mt-2 text-left gap-3 border border-gray-100"
              key={id}
            >
              <div className="col-span-2 flex items-center">
                <Skeleton width={40} height={40} circle={true} />
              </div>
              <div className=" col-span-7">
                <Skeleton />
                <Skeleton />
              </div>
              <div className=" col-span-3">
                <Skeleton />
                <Skeleton />
              </div>
            </div>
          ))}
      </div>
    </>
  );
};

export default LoadingMarketOverview;
