import { TfiAngleLeft } from "react-icons/tfi";
import { useSwiper } from "swiper/react";

type SlidePrevButtonProps = {
   theme: string;
};

export default function SlidePrevButton({ theme }: SlidePrevButtonProps) {
   const swiper = useSwiper();
   return (
      <div
         hidden={swiper.isBeginning}
         className={`absolute w-10 top-1/3 left-0 bottom-0 z-50 flex items-center justify-center text-2xl 
                    cursor-pointer group pt-[42px] `}
         onClick={() => swiper.slidePrev()}
      >
         <TfiAngleLeft className={`transition-03 ml-4 group-hover:ml-0 self-start text-${theme}-800`} />
      </div>
   );
}
