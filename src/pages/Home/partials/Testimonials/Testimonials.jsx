import { Pagination, Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "./style.css";

const Testimonials = () => {
  return (
    <>
      <div
        id="testimonials"
        className="mx-auto max-w-7xl px-2 py-16 sm:px-6 lg:px-8 h-full flex flex-col justify-center"
      >
        <h2 className="text-4xl font-bold text-center text-c-green">
          Testimonials
        </h2>
        <p className="mt-3 text-xl text-center">
          What our customers say What our customers say What our customers say
        </p>
        <Swiper
          slidesPerView={1}
          spaceBetween={30}
          loop={true}
          pagination={{
            clickable: true,
          }}
          navigation={false}
          modules={[Pagination, Navigation]}
          className="mySwiper mt-9"
        >
          <SwiperSlide>
            <div className="w-3/4 p-5 py-8 mx-auto">
              <img
                src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dXNlcnxlbnwwfHwwfHx8MA%3D%3D&w=1000&q=80"
                alt="Profile Icon"
                className=" w-32 rounded-full mx-auto mb-3"
              />
              <span className="text-sm text-c-green font-bold uppercase">
                Customer
              </span>
              <h3 className="text-md font-bold text-center">John Dev</h3>
              <p className="mt-2 text-md">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet ex
                rem alias laborum temporibus, culpa laboriosam molestias
                consectetur aperiam et non, labore, atque velit ad nesciunt.
                Recusandae unde esse odio! Lorem ipsum dolor sit amet
                consectetur adipisicing elit. Amet ex rem alias laborum
                temporibus, culpa laboriosam molestias consectetur aperiam et
                non, labore, atque velit ad nesciunt. Recusandae unde esse odio!
              </p>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="w-3/4 p-5 py-8 mx-auto">
              <img
                src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dXNlcnxlbnwwfHwwfHx8MA%3D%3D&w=1000&q=80"
                alt="Profile Icon"
                className=" w-32 rounded-full mx-auto mb-3"
              />
              <span className="text-sm text-c-green font-bold uppercase">
                Customer
              </span>
              <h3 className="text-md font-bold text-center">John Dev</h3>
              <p className="mt-2 text-md">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet ex
                rem alias laborum temporibus, culpa laboriosam molestias
                consectetur aperiam et non, labore, atque velit ad nesciunt.
                Recusandae unde esse odio! Lorem ipsum dolor sit amet
                consectetur adipisicing elit. Amet ex rem alias laborum
                temporibus, culpa laboriosam molestias consectetur aperiam et
                non, labore, atque velit ad nesciunt. Recusandae unde esse odio!
              </p>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="w-3/4 p-5 py-8 mx-auto">
              <img
                src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dXNlcnxlbnwwfHwwfHx8MA%3D%3D&w=1000&q=80"
                alt="Profile Icon"
                className=" w-32 rounded-full mx-auto mb-3"
              />
              <span className="text-sm text-c-green font-bold uppercase">
                Customer
              </span>
              <h3 className="text-md font-bold text-center">John Dev</h3>
              <p className="mt-2 text-md">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet ex
                rem alias laborum temporibus, culpa laboriosam molestias
                consectetur aperiam et non, labore, atque velit ad nesciunt.
                Recusandae unde esse odio! Lorem ipsum dolor sit amet
                consectetur adipisicing elit. Amet ex rem alias laborum
                temporibus, culpa laboriosam molestias consectetur aperiam et
                non, labore, atque velit ad nesciunt. Recusandae unde esse odio!
              </p>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </>
  );
};

export default Testimonials;
