import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
// import "swiper/css/pagination";
// import "swiper/css/navigation";
import busImg from "../../../assets/img/bus-img.png";
import trainImg from "../../../assets/img/train-img.png";
import shifImg from "../../../assets/img/shif-img.png";
import planeImg from "../../../assets/img/plane-pic.png";

// import './styles.css';

// import required modules
import { Autoplay } from "swiper/modules";
const Banner = () => {
  return (
    <>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay]}
        className="mySwiper h-screen"
      >
        <SwiperSlide className="relative">
          <div className="absolute top-1/2 left-10 space-y-5 z-20">
            <h2 className="text-3xl md:text-5xl font-bold text-white">
              Book Bus Tickets Online
            </h2>
            <button className="btn btn-primary">Book Now</button>
          </div>
          <img src={busImg} className="w-full h-full object-cover" alt="" />
          <div className="absolute inset-0 bg-black/40 z-10"></div>
        </SwiperSlide>
        <SwiperSlide className="relative">
          <div className="absolute top-1/2 left-10 space-y-5 z-20">
            <h2 className="text-3xl md:text-5xl font-bold text-white">
              Book Train Tickets Online
            </h2>
            <button className="btn btn-primary">Book Now</button>
          </div>
          <img src={trainImg} className="w-full h-full object-cover"  alt="" />
          <div className="absolute inset-0 bg-black/40 z-10"></div>
        </SwiperSlide>
        <SwiperSlide className="relative">
          <div className="absolute top-1/2 left-10 space-y-5 z-20">
            <h2 className="text-3xl md:text-5xl font-bold text-white">
              Book Shif Tickets Online
            </h2>
            <button className="btn btn-primary">Book Now</button>
          </div>
          <img src={shifImg} className="w-full h-full object-cover" alt="" />
          <div className="absolute inset-0 bg-black/40 z-10"></div>
        </SwiperSlide>
        <SwiperSlide className="relative">
          <div className="absolute top-1/2 left-10 space-y-5 z-20">
            <h2 className="text-3xl md:text-5xl font-bold text-white">
              Book Plane Tickets Online
            </h2>
            <button className="btn btn-primary">Book Now</button>
          </div>
          <img src={planeImg} className="w-full h-full object-cover" alt="" />
          <div className="absolute inset-0 bg-black/40 z-10"></div>
        </SwiperSlide>
      </Swiper>
    </>
  );
};

export default Banner;
