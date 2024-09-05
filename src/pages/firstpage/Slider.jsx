
// import React from 'react'
import './slider.css'
import slide1 from '../../assets/image2d.png'
import slide2 from '../../assets/imag3d.jpg'
import slide3 from '../../assets/image4d.png'
import slide4 from '../../assets/image5d.jpg'
import slide6 from '../../assets/image6d.jpg'
import slide7 from '../../assets/image7d.jpg'
import slide8 from '../../assets/image8d.jpg'
import slide9 from '../../assets/image9d.jpeg'
import  { useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';


export default function App() {
  const progressCircle = useRef(null);
  const progressContent = useRef(null);
  const onAutoplayTimeLeft = (s, time, progress) => {
    progressCircle.current.style.setProperty('--progress', 1 - progress);
    progressContent.current.textContent = `${Math.ceil(time / 1000)}s`;
  };
  return (
    <>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        onAutoplayTimeLeft={onAutoplayTimeLeft}
        className="mySwiper"
      >
        <SwiperSlide><img src={slide1}></img></SwiperSlide>
        <SwiperSlide><img src={slide2}></img></SwiperSlide>
        <SwiperSlide><img src={slide3}></img></SwiperSlide>
        <SwiperSlide><img src={slide4}></img></SwiperSlide>
        <SwiperSlide><img src={slide6}></img></SwiperSlide>
        <SwiperSlide><img src={slide7}></img></SwiperSlide>
        <SwiperSlide><img src={slide8}></img></SwiperSlide>
        <SwiperSlide><img src={slide9}></img></SwiperSlide>
        <div className="autoplay-progress" slot="container-end">
          <svg viewBox="0 0 48 48" ref={progressCircle}>
            <circle cx="24" cy="24" r="20"></circle>
          </svg>
          <span ref={progressContent}></span>
        </div>
      </Swiper>
    </>
  );
}
