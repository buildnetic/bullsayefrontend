import SelectWithSearch from "../../../../../components/AuthenticatedUser/SelectWithSearch/SelectWithSearch";

const CreatePost = () => {
  return (
    <>
      <div className="flex flex-row gap-4">
        <img
          src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
          alt="Profile Image"
          className="w-14 h-14 rounded-full"
        />
        <div className="w-full">
          <div className="flex flex-row gap-5 items-center mb-3">
            <div className="flex">
              <input
                type="radio"
                name="typeOfCall"
                className="shrink-0 cursor-pointer mt-0.5 border-gray-400 rounded-full text-c-green pointer-events-none focus:ring-c-green"
                id="call"
              />
              <label
                htmlFor="call"
                className="text-sm text-gray-500 ml-2 cursor-pointer"
              >
                Call
              </label>
            </div>

            <div className="flex">
              <input
                type="radio"
                name="typeOfCall"
                className="shrink-0 cursor-pointer mt-0.5 border-gray-400 rounded-full text-c-green pointer-events-none focus:ring-c-green"
                id="sell"
              />
              <label
                htmlFor="sell"
                className="text-sm text-gray-500 ml-2 cursor-pointer"
              >
                Sell
              </label>
            </div>
          </div>
          <div className="w-full">
            <textarea
              id="message"
              rows="4"
              className="resize-none block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-c-green focus:border-c-green dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-c-green dark:focus:border-c-green"
              placeholder="Your message..."
            ></textarea>
            <div className="flex flex-row justify-between mt-4">
              <div className="flex flex-row gap-5 items-center">
                <SelectWithSearch />
                <input
                  type="number"
                  required
                  placeholder="Enter Validity"
                  className="block rounded-md text-sm h-full border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-c-green-dark sm:leading-6"
                />
                <button
                  type="button"
                  className="rounded-md h-full w-32 border-c-green border-2 bg-c-green p-2 shadow-md hover:shadow-none text-white duration-75 text-sm font-medium"
                >
                  Post
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CreatePost;
