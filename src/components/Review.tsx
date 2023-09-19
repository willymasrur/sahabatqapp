import { Carousel } from "@material-tailwind/react";
import { StarIcon } from '@heroicons/react/24/solid'


const ReviewComponent = () =>{
    return(
        <Carousel
        nextArrow={({handleNext})=>(
          <button onClick={()=>handleNext()} className="!absolute top-2/4 right-4 w-6 h-6 -translate-y-2/4 rounded-full select-none transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none text-purple-600 hover:bg-white/10 active:bg-white/30 grid place-items-center">
            <svg viewBox="0 0 8 13" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-3 h-3">
              <path d="m1.487 12.098 6-6-6-6L0 1.585l4.513 4.513L0 10.611l1.487 1.487Z" fill="currentColor"></path>
            </svg>
          </button>
        )}
        prevArrow={({handlePrev})=>(
          <button onClick={()=>handlePrev()} className="!absolute top-2/4 left-4 w-6 h-6 -translate-y-2/4 rounded-full select-none transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none max-w-[48px] max-h-[48px] text-purple-600 hover:bg-white/10 active:bg-white/30 grid place-items-center">
            <svg viewBox="0 0 8 13" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-3 h-3">
              <path d="m7.41 10.688-4.58-4.59 4.58-4.59L6 .098l-6 6 6 6 1.41-1.41Z" fill="currentColor"></path>
            </svg>
          </button>
        )}
        navigation={({ setActiveIndex, activeIndex, length }) => (
          <div className="absolute bottom-0 left-2/4 z-2 flex -translate-x-2/4 gap-2">
            {new Array(length).fill("").map((_, i) => (
              <span
                key={i}
                className={`block h-2 cursor-pointer rounded-2xl transition-all content-[''] ${
                  activeIndex === i ? "w-4 bg-purple-600" : "w-2 bg-[#f2a9ee]"
                }`}
                onClick={() => setActiveIndex(i)}
              />
            ))}
          </div>
        )}
        >
          <div className="flex flex-col items-center space-y-2 text-center font-regular px-12 mb-6">
            <div className="flex items-center space-x-1">
              <StarIcon className="text-[#F4C779] w-4 h-4"></StarIcon>
              <StarIcon className="text-[#F4C779] w-4 h-4"></StarIcon>
              <StarIcon className="text-[#F4C779] w-4 h-4"></StarIcon>
              <StarIcon className="text-[#F4C779] w-4 h-4"></StarIcon>
              <StarIcon className="text-[#F4C779] w-4 h-4"></StarIcon>
            </div>
            <span className="font-semibold tracking-[0.2px]">Parenting App Paling Lengkap</span>
            <p>
            Selalu rekomendasiin ke banyak orang karena super lengkap mau cari apapun tentang tumbuh kembang anak & parenting, bahkan sekarang bisa belanja kebutuhan anak sekalian. Keep going!
            </p>
            <span>Laras Putri Ariani</span>
          </div>
          <div className="flex flex-col items-center space-y-2 text-center font-regular px-12">
            <div className="flex items-center space-x-1">
              <StarIcon className="text-[#F4C779] w-4 h-4"></StarIcon>
              <StarIcon className="text-[#F4C779] w-4 h-4"></StarIcon>
              <StarIcon className="text-[#F4C779] w-4 h-4"></StarIcon>
              <StarIcon className="text-[#F4C779] w-4 h-4"></StarIcon>
              <StarIcon className="text-[#F4C779] w-4 h-4"></StarIcon>
            </div>
            <span className="font-semibold tracking-[0.2px]">Parenting App Paling Lengkap</span>
            <p>
            Selalu rekomendasiin ke banyak orang karena super lengkap mau cari apapun tentang tumbuh kembang anak & parenting, bahkan sekarang bisa belanja kebutuhan anak sekalian. Keep going!
            </p>
            <span>Laras Putri Ariani</span>
          </div>
      </Carousel>
    )
}
export default ReviewComponent;