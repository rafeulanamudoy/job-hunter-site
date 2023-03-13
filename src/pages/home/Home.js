import React from 'react';
import { Navigation, Pagination, Autoplay } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';
import "./Home.css";
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

import banner1 from "../../utiltites/Images/Banner/banner2.jpg"
import banner2 from "../../utiltites/Images/Banner/banner3.jpg";
import banner3 from "../../utiltites/Images/Banner/banner4.jpg"
const Home = () => {
    return (
        <Swiper
            // install Swiper modules
            modules={[Navigation, Pagination, Autoplay]}
            spaceBetween={50}
            slidesPerView={1}

            autoplay={{
                delay: 2500,
                disableOnInteraction: false,
            }}
            navigation={true}
            pagination={{
                clickable: true,
            }}

            scrollbar={{ draggable: true }}
            effect="fade"

            className="swiper-container"
        >
            <SwiperSlide className='banner-slide-container'><img src={banner1} alt="" /></SwiperSlide>
            <SwiperSlide className='banner-slide-container'><img src={banner2} alt="" /></SwiperSlide>
            <SwiperSlide className='banner-slide-container'><img src={banner3} alt="" /></SwiperSlide>


        </Swiper>
    );
};

export default Home;