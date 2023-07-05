const Help = () => {
  return (
    <>
      <div id="help" className=" bg-gray-50">
        <div className="mx-auto max-w-7xl px-2 py-16 sm:px-6 lg:px-8 h-full flex flex-col justify-center">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-center items-center">
            <div>
              <h2 className="text-4xl font-bold text-c-green">
                Join Our Community
              </h2>
              <h3 className="text-md mt-1">Get our email for info</h3>
              <input
                className="mt-5 p-2 px-3 w-60 text-md outline-none"
                type="text"
                placeholder="Enter your Email address"
              />
              <button className="bg-c-green p-2 px-3 text-white rounded-e-md text-md">
                Subscribe
              </button>
              <p className="text-xs mt-3">
                By subscribing you agree to our Terms & Conditions and Privacy &
                Cookies Policy
              </p>
            </div>
            <div>
              <h2 className="text-3xl">Need Help? (+1) 100000</h2>
              <p className="text-md mt-4">
                <span className="font-bold">Working Days / Hours:</span> Mon -
                Sat / 09:00 - 18:00
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Help;
