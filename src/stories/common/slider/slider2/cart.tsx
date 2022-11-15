import { FaFacebook, FaTwitter, FaGithub, FaStar, FaRegStar, FaStarHalfAlt } from "react-icons/fa";

type CardProps = {
   image: any;
   theme: string;
};

const generateMediaIconsClass = () => "text-white opacity-70 transition-03 cursor-pointer hover:opacity-100";

export default function Card({ image, theme = "purple" }: CardProps) {
   return (
      <div
         data-name="slider-card"
         className={`rounded-3xl bg-white relative before:content-[''] before:absolute mx-1
                     before:h-1/3 before:w-full before:bg-gray-300 before:rounded-t-3xl`}
      >
         <div
            data-name="slider-card-content"
            className="p-5 pb-8 w-full flex flex-col items-center gap-1 z-50 relative"
         >
            <div data-name="slider-card-content-image" className={`h-28 w-28 rounded-full p-0.5 bg-${theme}-700`}>
               <img
                  src={image}
                  alt=""
                  loading="lazy"
                  className="w-full h-full object-cover rounded-full border-2 border-white"
               />
            </div>
            <div data-name="slider-card-content-media-icons" className="flex flex-col gap-1 absolute top-3 right-3">
               <FaFacebook className={generateMediaIconsClass()} />
               <FaTwitter className={generateMediaIconsClass()} />
               <FaGithub className={generateMediaIconsClass()} />
            </div>
            <div data-name="slider-card-content-name-profession" className="flex flex-col items-center text-gray-700">
               <p className="font-semibold text-lg">
                  <span>Mehran Jamali</span>
               </p>
               <p className="font-medium text-xs">
                  {/* p-0.5 before:block before:absolute before:-inset-1 before:-skew-y-3 before:bg-${theme}-700 relative inline-block */}
                  <span className="relative ">Web Developer</span>
               </p>
            </div>
            <div
               data-name="slider-card-content-rating"
               className={`flex items-center mt-2 gap-1 text-${theme}-700 text-base group cursor-pointer`}
            >
               <FaStar className={`group-hover:text-${theme}-900 transition-03`} />
               <FaStar className={`group-hover:text-${theme}-900 transition-03`} />
               <FaStar className={`group-hover:text-${theme}-900 transition-03`} />
               <FaStarHalfAlt className={`group-hover:text-${theme}-900 transition-03`} />
               <FaRegStar className={`group-hover:text-${theme}-900 transition-03`} />
            </div>
            <div
               data-name="slider-card-content-footer-buttons"
               className="w-full flex items-center justify-around text-xs mt-4"
            >
               <button
                  className={`bg-${theme}-700 px-4 py-1.5 rounded-3xl text-white transition-03 hover:bg-${theme}-900 cursor-pointer`}
               >
                  About Me
               </button>
               <button
                  className={`bg-${theme}-700 px-4 py-1.5 rounded-3xl text-white  transition-03 hover:bg-${theme}-900 cursor-pointer`}
               >
                  Hire Me
               </button>
            </div>
         </div>
      </div>
   );
}
