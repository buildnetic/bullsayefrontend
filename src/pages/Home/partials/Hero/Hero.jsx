const Hero = () => {
  return (
    <>
      <div className="bg-[url('../../../images/home/hero.png')] bg-cover bg-center h-[80vh] mt-12">
        <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8 h-full flex flex-col justify-center">
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-[4rem] md:leading-[5rem] lg:leading-[6rem]">
            <span className=" text-green-500">Buying</span> and{" "}
            <span className=" text-red-500">Selling</span> <br /> Calls from{" "}
            Expert
          </h1>
          <p className="text-xl md:text-2xl mt-4">
            Do your research before investment{" "}
          </p>
          <a
            href="#"
            className="mt-6 max-w-max rounded-lg border-c-green border-2 bg-c-green p-3 px-4 shadow-md hover:shadow-none text-white duration-75 text-md font-medium"
          >
            Start Investing
          </a>
        </div>
      </div>
    </>
  );
};

export default Hero;
