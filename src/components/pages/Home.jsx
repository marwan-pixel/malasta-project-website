import { React, useState } from "react";
import Button from "../Elements/Button/Index";
import Card from "../Elements/Card/Index";
import "swiper/swiper-bundle.css";
import Slider from "../Fragments/Slider";

export default function Home() {
  return (
    <div className="pt-20 content">
      <section id="banner" className="lg:h-[56rem] h-[46rem]">
        <div className=" h-full bg-[url('../../public/asset2.png')] w-full bg-no-repeat bg-center bg-cover flex items-center">
          <div className="card h-2/4 w-full flex flex-col container px-5">
            <h1
              className=" md:text-6xl text-3xl font-bold text-white 
         "
            >
              Lorem Ipsum
            </h1>
            <h3 className="text-white md:text-3xl mt-6 text-2xl md:w-2/6 leading-7">
              dolor sit amet consectetur adipiscing elit
            </h3>
            <h5 className="text-white md:text-2xl mt-5">
              {" "}
              consectetur adipiscing elit
            </h5>
            <Button styled={"mt-5"}>Read More</Button>
          </div>
        </div>
      </section>
      <section id="about" className=" pt-12 container">
        <div className="flex flex-wrap">
          <div className="w-full self-center px-5">
            <div className="about-us-title flex justify-center flex-col items-center">
              <h1 className="text-3xl md:text-5xl text-center font-bold text-primary">
                Tentang Kami
              </h1>
              <div className="h-1  bg-primary w-6 md:w-12 mt-2 md:mt-3"></div>
            </div>
            <div className="w-full self-center px-2 md:flex md:justify-between md:items-center gap-x-16">
              <div className="mt-20 about-us-picture">
                <img
                  src="asset5.png"
                  alt="about"
                  className="max-w-full mx-auto "
                />
              </div>
              <div className="about-us flex flex-col">
                <p className="mt-10 text-lg md:text-xl text-justify max-w-xl">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Pariatur doloribus fugiat alias assumenda? Vero dignissimos
                  sunt vitae debitis saepe obcaecati cupiditate praesentium enim
                  perspiciatis alias, tenetur minus dolores blanditiis rem.
                </p>
                <p className="mt-10 text-lg md:text-xl text-justify max-w-xl">
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Omnis blanditiis consequuntur ducimus, exercitationem maxime
                  optio recusandae aperiam! Voluptate, officia voluptatem.
                </p>
                <div className="mt-10 self-center md:self-start flex items-center gap-x-7">
                  <div className=" circle w-28 h-28 h3 rounded-full bg-primary flex items-center relative">
                    <h3 className="text-5xl font-bold text-white">100</h3>
                    <sup className="absolute right-3 top-0 text-5xl font-semibold text-white">
                      +
                    </sup>
                  </div>
                  <p className="text-lg md:text-2xl font-bold">Lorem Ipsum</p>
                </div>
              </div>
            </div>
            <div className="about-us-title flex justify-center flex-col items-center mt-10">
              <h1 className="text-2xl md:text-3xl text-center font-bold text-primary">
                Lokasi
              </h1>
              <div className="h-1  bg-primary w-6 md:w-12 mt-1"></div>
            </div>
            <iframe
              className="w-full mt-10 "
              src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d294.5938925131177!2d106.79113427054209!3d-6.576179256556432!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sid!4v1716198216019!5m2!1sen!2sid"
              width="1280"
              height="400"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </section>
      <section id="catalog" className="pt-12 container">
        <div className="flex">
          <div className="w-full px-5">
            <div className="about-us-title flex justify-center flex-col items-center">
              <h1 className="text-3xl md:text-5xl text-center font-bold text-primary">
                katalog
              </h1>
              <div className="h-1  bg-primary w-6 md:w-12 mt-2 md:mt-3 "></div>
            </div>
            <h4 className="mt-10 text-center text-xl">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolor,
              maiores?
            </h4>
            <div>
              <div className=" flex justify-center flex-col items-center mt-7">
                <h1 className="text-xl md:text-3xl text-center font-bold text-primary">
                  Carrier
                </h1>
                <div className="h-1 bg-primary w-6 md:w-12 mt-1 md:mt-2 "></div>
              </div>
              <Slider
                navigation={true}
                breakpoint={{
                  0: {
                    slidesPerView: 1,
                  },
                  768: {
                    slidesPerView: 2,
                  },
                  970: {
                    slidesPerView: 3,
                  },
                }}
              >
                <Card styled="mb-10">
                  <div className="card-img flex flex-col items-center m-3">
                    <img
                      className="h-[200px] "
                      src={"BP90193153-grey.jpg"}
                      // alt={`Slide ${index + 1}`}
                    />
                  </div>
                  <div className="card-title">
                    <p className="text-lg font-semibold ">"Carrier Bag"</p>
                  </div>
                  <div className="card-desc">
                    <p className="text-md ">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Saepe, temporibus.
                    </p>
                  </div>
                  <Button styled={"mt-5"}>Detail Produk</Button>
                </Card>
              </Slider>
            </div>
            <div>
              <div className=" flex justify-center flex-col items-center mt-7">
                <h1 className="text-xl md:text-3xl text-center font-bold text-primary">
                  Tent
                </h1>
                <div className="h-1 bg-primary w-6 md:w-12 mt-1 md:mt-2 "></div>
              </div>
              <Slider
                navigation={true}
                breakpoint={{
                  0: {
                    slidesPerView: 1,
                  },
                  768: {
                    slidesPerView: 2,
                  },
                  970: {
                    slidesPerView: 3,
                  },
                }}
              >
                <Card styled="mb-10">
                  <div className="card-img flex flex-col items-center m-3">
                    <img
                      className="h-[200px] "
                      src={
                        "https://contents.mediadecathlon.com/p2425700/k$bd8d38a8b9d2502c20c3a5d6b99f2178/arpenaz-4-pole-supported-camping-tent-4-person-1-bedroom.jpg?format=auto&quality=70&f=1366x1366"
                      }
                      // alt={`Slide ${index + 1}`}
                    />
                  </div>
                  <div className="card-title">
                    <p className="text-lg font-semibold ">"Camping Tent"</p>
                  </div>
                  <div className="card-desc">
                    <p className="text-md ">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Saepe, temporibus.
                    </p>
                  </div>
                  <Button>Detail Produk</Button>
                </Card>
              </Slider>
            </div>
          </div>
        </div>
      </section>
      <section id="benefit" className="pt-12 container">
        <div className="flex">
          <div className="w-full self-center px-5">
            <div className="testimonial-title flex justify-center flex-col items-center">
              {/* <h1 className="text-3xl md:text-5xl text-center font-bold text-primary">
                Alasan Memilih Toko Ini
              </h1>
              <div className="h-1  bg-primary w-6 md:w-12 mt-2 md:mt-3 "></div> */}
            </div>
            <div className="mt-10 ">
              <div className="benefit-contents sm:flex sm:flex-wrap sm:justify-evenly gap-10">
                <div className="benefit-content sm:max-w-[200px] flex flex-col items-center my-10">
                  <div className="h-40 w-40 rounded-full bg-slate-500"></div>
                  <p className="text-md sm:text-lg text-center mt-5">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  </p>
                </div>
                <div className="benefit-content sm:max-w-[200px]  flex flex-col items-center my-10">
                  <div className="h-40 w-40 rounded-full bg-slate-500"></div>
                  <p className="text-md sm:text-lg text-center mt-5">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  </p>
                </div>
                <div className="benefit-content sm:max-w-[200px]  flex flex-col items-center my-10">
                  <div className="h-40 w-40 rounded-full bg-slate-500"></div>
                  <p className="text-md sm:text-lg text-center mt-5">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  </p>
                </div>
                <div className="benefit-content sm:max-w-[200px]  flex flex-col items-center my-10">
                  <div className="h-40 w-40 rounded-full bg-slate-500"></div>
                  <p className="text-md sm:text-lg text-center mt-5">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  </p>
                </div>
                <div className="benefit-content sm:max-w-[200px]  flex flex-col items-center my-10">
                  <div className="h-40 w-40 rounded-full bg-slate-500"></div>
                  <p className="text-md sm:text-lg text-center mt-5">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section id="testimonial" className="pt-12 container">
        <div className="flex">
          <div className="w-full px-5">
            <div className="mt-10">
              <div className="about-us-title flex justify-center flex-col items-center">
                <h1 className="text-3xl md:text-5xl text-center font-bold text-primary">
                  Apa Kata Klien Kami
                </h1>
                <div className="h-1  bg-primary w-6 md:w-12 mt-2 md:mt-3 "></div>
              </div>
              <div className="testimonial-contents mt-10 ">
                <Slider
                  navigation={false}
                  breakpoint={{
                    0: {
                      slidesPerView: 1,
                    },
                    768: {
                      slidesPerView: 2,
                    },
                    970: {
                      slidesPerView: 3,
                    },
                  }}
                >
                  <Card>
                    <p className="md:text-xl text-lg mt-5">
                      Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                      Delectus dicta modi enim illum. Quia, exercitationem unde
                      earum quas quam inventore!
                    </p>
                    <p className="md:text-lg text-base text-slate-300 mt-5">
                      Lorem Ipsum
                    </p>
                  </Card>
                </Slider>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
