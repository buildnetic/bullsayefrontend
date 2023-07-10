const Comments = () => {
  return (
    <>
      <div className="my-4 flex gap-2">
        <input
          type="text"
          className="w-full rounded-3xl border-0 py-1.5 px-4 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-c-green-dark sm:text-sm sm:leading-6"
          placeholder="add a comment..."
        />
        <button className="bg-c-green rounded-3xl text-sm text-white p-2 px-4 hover:bg-c-green-dark transition-all">
          Comment
        </button>
      </div>
      <div className="p-6 px-8 overflow-hidden rounded-lg shadow-[rgba(0,_0,_0,_0.2)_0px_0px_3px] bg-white transition-shadow duration-300 ease-in-out">
        <div className="flex flex-row items-start gap-5">
          <img
            src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dXNlcnxlbnwwfHwwfHx8MA%3D%3D&w=1000&q=80"
            alt="Profile Icon"
            className="w-10 rounded-full"
          />
          <div>
            <div className="w-full flex flex-row justify-between items-center">
              <h3 className="text-sm font-semibold">John Dev</h3>
              <p className="text-sm text-[#8E8E8E] mt-0.5">4 hrs ago</p>
            </div>
            <p className="mt-1 text-sm">
              Start Trading with one of the leading brokers you choose, easy
              comparison! Start Trading with one of the leading brokers you
              choose, easy comparison! Start Trading with one of the leading
              brokers you choose, easy comparison!Start Trading with one of the
              leading brokers you choose, easy comparison!
            </p>
          </div>
        </div>
        <div className="my-5 w-full h-[1px] bg-[#D3DAE2]"></div>
        <div className="flex flex-row items-start gap-5">
          <img
            src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dXNlcnxlbnwwfHwwfHx8MA%3D%3D&w=1000&q=80"
            alt="Profile Icon"
            className="w-10 rounded-full"
          />
          <div>
            <div className="w-full flex flex-row justify-between items-center">
              <h3 className="text-sm font-semibold">John Dev</h3>
              <p className="text-sm text-[#8E8E8E] mt-0.5">4 hrs ago</p>
            </div>
            <p className="mt-1 text-sm">
              Start Trading with one of the leading brokers you choose, easy
              comparison! Start Trading with one of the leading brokers you
              choose, easy comparison! Start Trading with one of the leading
              brokers you choose, easy comparison!Start Trading with one of the
              leading brokers you choose, easy comparison!
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Comments;
