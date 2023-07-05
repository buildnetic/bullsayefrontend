import {
  UserIcon,
  ChartBarIcon,
  BanknotesIcon,
} from "@heroicons/react/24/solid";

const HowItWorks = () => {
  return (
    <>
      <div
        id="howItWorks"
        className="mx-auto max-w-7xl px-2 py-16 sm:px-6 lg:px-8 h-full flex flex-col justify-center"
      >
        <h2 className="text-4xl mt-5 font-bold text-center text-c-green">
          How It Works
        </h2>
        <p className="mt-3 text-xl text-center">
          What our customers say What our customers say What our customers say
        </p>
        <div className="grid grid-cols-1 md:grid-cols-5 gap-4 pt-9">
          <div>
            <UserIcon className="w-32 text-[#F0A151] mx-auto border-[#F0A151] border-2 border-dashed p-8 rounded-full" />
            <h3 className="text-center mt-4 text-xl font-bold">
              Follow the Experts
            </h3>
            <p className="text-center mt-1">
              Follow the experts on various social media
            </p>
          </div>
          <div>
            <img
              className="mt-10 w-full hidden md:block"
              src="../../../images/home/arrow.png"
              alt="arrow"
            />
          </div>
          <div>
            <ChartBarIcon className="w-32 text-[#F0A151] mx-auto border-[#F0A151] border-2 border-dashed p-8 rounded-full" />
            <h3 className="text-center mt-4 text-xl font-bold">Unlock Calls</h3>
            <p className="text-center mt-1">
              Unlock the buying and selling calls
            </p>
          </div>
          <div>
            <img
              className="mt-10 w-full hidden md:block"
              src="../../../images/home/arrow.png"
              alt="arrow"
            />
          </div>
          <div>
            <BanknotesIcon className="w-32 text-[#F0A151] mx-auto border-[#F0A151] border-2 border-dashed p-8 rounded-full" />
            <h3 className="text-center mt-4 text-xl font-bold">Invest</h3>
            <p className="text-center mt-1">Invest carefully</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default HowItWorks;
