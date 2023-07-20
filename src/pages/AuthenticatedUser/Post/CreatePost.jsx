import CreatePostComp from "../Main/Partials/CreatePost/CreatePost";

const CreatePost = () => {
  return (
    <>
      <div className="mx-auto max-w-7xl px-2 py-16 sm:px-6 lg:px-8 h-full">
        <div className=" border-2 p-4 rounded-lg shadow-sm">
          <CreatePostComp />
        </div>
      </div>
    </>
  );
};

export default CreatePost;
