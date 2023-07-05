import Hero from "./partials/Hero/Hero";
import HowItWorks from "./partials/HowItWorks/HowItWorks";
import Testimonials from "./partials/Testimonials/Testimonials";
import TopPerformers from "./partials/TopPerformers/TopPerformers";
import Help from "./partials/Help/Help";

const Home = () => {
  return (
    <>
      <Hero />
      <HowItWorks />
      <TopPerformers />
      <Testimonials />
      <Help />
    </>
  );
};

export default Home;
