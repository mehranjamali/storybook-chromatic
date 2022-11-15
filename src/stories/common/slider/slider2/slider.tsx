import { lazy, Suspense } from "react";
import "./slider.css";

// Swiper
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper";

// dynamic
const Card = lazy(() => import("./cart"));
const SlideNextButton = lazy(() => import("./slideNextButton"));
const SlidePrevButton = lazy(() => import("./slidePrevButton"));

interface SliderProps {
   images: any[];
   theme: string;
}

export function Slider({ images, theme }: SliderProps) {
   return (
      <div>
         <div data-name="slider-container" className="p-1 w-60 h-28">
            <div
               data-name="slider-content"
               className="flex flex-row items-center justify-center gap-2 bg-gray-50 p-2 rounded-3xl border border-gray-100"
            >
               <Suspense>
                  <Swiper
                     modules={[Navigation, Pagination, Scrollbar, A11y]}
                     pagination={{ clickable: true }}
                     onSlideChange={() => {
                        console.log("slide changed");
                     }}
                     onReachEnd={() => {
                        console.log("reached end");
                     }}
                     className="relative"
                  >
                     {/* Prev button */}
                     <SlidePrevButton theme={theme} />
                     {images?.map((image, index) => {
                        return (
                           <SwiperSlide key={index}>
                              <Card image={image} theme={theme} />
                           </SwiperSlide>
                        );
                     })}
                     {/* Next button */}
                     <SlideNextButton theme={theme} />
                  </Swiper>
               </Suspense>
            </div>
         </div>
      </div>
   );
}
