import { React, useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper/modules";
import Button from "../Elements/Button/Index";
import "swiper/swiper-bundle.css";
import { useNavigate } from "react-router-dom";

export default function Slider({ navigation, children, breakpoint }) {
  const [swiper, setSwiper] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [slidesPerView, setSlidesPerView] = useState(0);
  const totalSlides = 10;
  const navigate = useNavigate();

  const handleSlideChange = (swiper) => {
    setCurrentIndex(swiper.activeIndex);
  };

  useEffect(() => {
    const updateSlidesPerView = () => {
      if (window.innerWidth < 768) {
        setSlidesPerView(1);
      } else if (window.innerWidth < 970) {
        setSlidesPerView(2);
      } else {
        setSlidesPerView(3);
      }
    };

    window.addEventListener("resize", updateSlidesPerView);
    updateSlidesPerView(); // Initial call to set the correct slidesPerView

    return () => {
      window.removeEventListener("resize", updateSlidesPerView);
    };
  }, []);
  const maxIndex = totalSlides - slidesPerView;
  return (
    <div className="catalog-items mt-10 flex items-center justify-between mb-10">
      {navigation && (
        <Button
          styled={
            "swiper-button-prev-custom disabled:opacity-25 rounded-full bg-transparent disabled:bg-white group py-0 hover:bg-white"
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
            className="size-8 md:size-16 stroke-primary group-active:stroke-white group-disabled:stroke-primary group-hover:stroke-[#213526]"
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
        {[...Array(totalSlides)].map((_, index) => (
          <SwiperSlide key={index}>{children}</SwiperSlide>
        ))}
      </Swiper>
      {navigation && (
        <Button
          styled={`swiper-button-next-custom disabled:opacity-25 bg-transparent hover:bg-white disabled:bg-white group py-0 mt-12`}
          onclick={() => {
            console.log(slidesPerView);
            if (swiper) swiper.slideNext();
            if (currentIndex >= maxIndex) {
              navigate("/catalog");
            }
          }}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="size-8 md:size-16 stroke-primary group-active:stroke-white rounded-full group-disabled:stroke-primary group-hover:stroke-[#213526]"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="m8.25 4.5 7.5 7.5-7.5 7.5"
            />
          </svg>
          <p
            className={`text-primary transition-all duration-300 ${
              currentIndex >= maxIndex ? "fade-in" : "fade-out"
            }`}
          >
            View More
          </p>
        </Button>
      )}
    </div>
  );
}
