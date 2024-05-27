import { React, useState } from "react";
import { Swiper, SwiperSlide, useSwiper } from "swiper/react";
import { Pagination, Navigation } from "swiper/modules";
import Button from "../Elements/Button/Index";
import "swiper/swiper-bundle.css";

export default function Slider({ navigation, children, breakpoint }) {
  const [swiper, setSwiper] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const totalSlide = 10;

  const handleSlideChange = (swiper) => {
    setCurrentIndex(swiper.activeIndex);
  };
  return (
    <div className="catalog-items mt-10 flex items-center justify-between mb-10">
      {navigation && (
        <Button
          styled={
            "swiper-button-prev-custom disabled:opacity-25 rounded-full bg-transparent active:bg-primary disabled:bg-white group py-0"
          }
          s
          disabled={currentIndex == 0}
          onclick={() => {
            if (swiper) swiper.slidePrev();
          }}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="size-10 stroke-primary group-active:stroke-white group-disabled:stroke-primary"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M15.75 19.5 8.25 12l7.5-7.5"
            />
          </svg>
        </Button>
      )}
      <Swiper
        modules={[Navigation, Pagination]}
        speed={500}
        spaceBetween={30}
        slidesPerView={"auto"}
        grabCursor={true}
        onSlideChange={handleSlideChange}
        onSwiper={setSwiper}
        pagination={{
          clickable: true,
          bulletClass: "swiper-pagination-bullet",
          bulletActiveClass: "swiper-pagination-bullet-active",
        }}
        breakpoints={{
          ...breakpoint,
        }}
      >
        {[...Array(totalSlide)].map((_, index) => (
          <SwiperSlide key={index}>{children}</SwiperSlide>
        ))}
      </Swiper>
      {navigation && (
        <Button
          styled="swiper-button-next-custom disabled:opacity-25 rounded-full bg-transparent active:bg-primary disabled:bg-white group py-0"
          disabled={currentIndex == totalSlide - 1}
          onclick={() => {
            console.log(currentIndex);
            if (swiper) swiper.slideNext();
          }}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="size-10 stroke-primary group-active:stroke-white group-disabled:stroke-primary"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="m8.25 4.5 7.5 7.5-7.5 7.5"
            />
          </svg>
        </Button>
      )}
    </div>
  );
}
