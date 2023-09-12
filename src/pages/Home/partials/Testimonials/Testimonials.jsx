import { Autoplay, Pagination, Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "./style.css";
import { motion } from "framer-motion";
import { fadeInTop } from "../../../../data/framerMotionHelper";

const Testimonials = () => {
  return (
    <>
      <div
        id="testimonials"
        className="bg-[url('../../../images/home/bg.png')] bg-cover bg-center"
      >
        <div className="mx-auto max-w-7xl px-2 py-16 sm:px-6 lg:px-8 h-full flex flex-col justify-center">
          <motion.h2
            className="text-4xl mt-5 font-bold text-center text-c-green"
            variants={fadeInTop}
            initial="hidden"
            whileInView="visible"
          >
            Testimonials
          </motion.h2>
          <p className="mt-3 text-md text-gray-400 text-center">
            What our customers say What our customers say What our customers say
          </p>
          <Swiper
            slidesPerView={1}
            spaceBetween={30}
            loop={true}
            pagination={{
              clickable: true,
            }}
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
            }}
            navigation={false}
            modules={[Autoplay, Pagination, Navigation]}
            className="mySwiper home-testimonial mt-9"
          >
            <SwiperSlide style={{ backgroundColor: "transparent" }}>
              <div className="w-full sm:w-3/4 p-5 py-10 mx-auto">
                <img
                  src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dXNlcnxlbnwwfHwwfHx8MA%3D%3D&w=1000&q=80"
                  alt="Profile Icon"
                  className=" w-32 rounded-full mx-auto mb-3"
                />
                <span className="text-sm text-c-green font-bold uppercase">
                  Customer
                </span>
                <h3 className="text-md font-bold text-center">John Dev</h3>
                <p className="mt-2 text-md text-justify sm:text-center">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet
                  ex rem alias laborum temporibus, culpa laboriosam molestias
                  consectetur aperiam et non, labore, atque velit ad nesciunt.
                  Recusandae unde esse odio! Lorem ipsum dolor sit amet
                  consectetur adipisicing elit. Amet ex rem alias laborum
                  temporibus, culpa laboriosam molestias consectetur aperiam et
                  non, labore, atque velit ad nesciunt. Recusandae unde esse
                  odio!
                </p>
              </div>
            </SwiperSlide>
            <SwiperSlide style={{ backgroundColor: "transparent" }}>
              <div className="w-full sm:w-3/4 p-5 py-10 mx-auto">
                <img
                  src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dXNlcnxlbnwwfHwwfHx8MA%3D%3D&w=1000&q=80"
                  alt="Profile Icon"
                  className=" w-32 rounded-full mx-auto mb-3"
                />
                <span className="text-sm text-c-green font-bold uppercase">
                  Customer
                </span>
                <h3 className="text-md font-bold text-center">John Dev</h3>
                <p className="mt-2 text-md text-justify sm:text-center">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet
                  ex rem alias laborum temporibus, culpa laboriosam molestias
                  consectetur aperiam et non, labore, atque velit ad nesciunt.
                  Recusandae unde esse odio! Lorem ipsum dolor sit amet
                  consectetur adipisicing elit. Amet ex rem alias laborum
                  temporibus, culpa laboriosam molestias consectetur aperiam et
                  non, labore, atque velit ad nesciunt. Recusandae unde esse
                  odio!
                </p>
              </div>
            </SwiperSlide>
            <SwiperSlide style={{ backgroundColor: "transparent" }}>
              <div className="w-full sm:w-3/4 p-5 py-10 mx-auto">
                <img
                  src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dXNlcnxlbnwwfHwwfHx8MA%3D%3D&w=1000&q=80"
                  alt="Profile Icon"
                  className=" w-32 rounded-full mx-auto mb-3"
                />
                <span className="text-sm text-c-green font-bold uppercase">
                  Customer
                </span>
                <h3 className="text-md font-bold text-center">John Dev</h3>
                <p className="mt-2 text-md text-justify sm:text-center">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet
                  ex rem alias laborum temporibus, culpa laboriosam molestias
                  consectetur aperiam et non, labore, atque velit ad nesciunt.
                  Recusandae unde esse odio! Lorem ipsum dolor sit amet
                  consectetur adipisicing elit. Amet ex rem alias laborum
                  temporibus, culpa laboriosam molestias consectetur aperiam et
                  non, labore, atque velit ad nesciunt. Recusandae unde esse
                  odio!
                </p>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </>
  );
};

export default Testimonials;
