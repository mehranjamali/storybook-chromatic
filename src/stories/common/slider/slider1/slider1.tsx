import React, { useEffect } from "react";
import "./slider1.css";
import { TfiAngleLeft, TfiAngleRight } from "react-icons/tfi";

type sliderProps = {
   popularList?: any[];
};

// slider
let slideIndex = 1;
const plusSlides = (n: number) => {
   showSlides((slideIndex += n));
};
const showSlides = (n: number) => {
   let i;
   let slides = document.getElementsByClassName("mySlides");
   if (n > slides.length) slideIndex = 1;
   if (n < 1) slideIndex = slides.length;
   for (i = 0; i < slides.length; i++) {
      slides[i].classList.add("hidden");
      slides[i].classList.remove("block");
   }
   slides[slideIndex - 1].classList.add("block");
   slides[slideIndex - 1].classList.remove("hidden");
};

export function Slider({ popularList }: sliderProps) {
   useEffect(() => {
      showSlides(slideIndex);
   }, []);
   return (
      <div className="w-80 h-52">
         <div data-name="slider-container" className="w-full relative m-auto rounded-md">
            {popularList?.map((item: any, index: number) => {
               return (
                  <div data-name="slide" key={index} className="mySlides fade hidden rounded-md">
                     <img
                        src={item.img}
                        alt={item.title}
                        className="text-2xs min-slide-h rounded-md bg-slate-200 dark:bg-slate-600 text-slate-400 pointer-events-none"
                     />
                     <div
                        className="absolute bottom-0 left-0 right-0 text-center w-full text-xs bg-slate-600/50 dark:bg-slate-900/50 
                        flex items-center justify-center text-white dark:text-white h-9 overflow-hidden rounded-b-md -mb-0"
                     >
                        <p className="w-40 p-2 mx-auto">{item.title}</p>
                     </div>
                  </div>
               );
            })}

            <button
               className="next-slide-btn absolute bottom-2 left-0 text-white dark:text-white flex items-end mx-auto"
               onClick={() => plusSlides(-1)}
            >
               {/* ❯ */}
               <TfiAngleLeft />
            </button>
            <button
               className="previous-slide-btn absolute bottom-2 right-0 text-white dark:text-white flex items-end mx-auto"
               onClick={() => plusSlides(1)}
            >
               {/* ❮ */}
               <TfiAngleRight />
            </button>
         </div>
      </div>
   );
}
