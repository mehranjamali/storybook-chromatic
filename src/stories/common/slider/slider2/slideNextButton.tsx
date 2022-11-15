import { TfiAngleRight } from "react-icons/tfi";
import { useSwiper } from "swiper/react";

type SlideNextButtonProps = {
   theme: string;
};

export default function SlideNextButton({ theme }: SlideNextButtonProps) {
   const swiper = useSwiper();
   return (
      <div
         hidden={swiper.isEnd}
         className={`absolute w-10 right-0 top-1/3 bottom-0 z-50 flex items-center justify-center text-2xl 
                    cursor-pointer group pt-[42px] `}
         onClick={() => swiper.slideNext()}
      >
         <TfiAngleRight className={`transition-03 mr-4 group-hover:mr-0 self-start text-${theme}-700`} />
      </div>
   );
}
