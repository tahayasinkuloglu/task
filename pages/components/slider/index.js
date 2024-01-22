import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

const data = [
  {
    color: "bg-blue-400",
    text: "Sende Al!",
  },
  {
    color: "bg-red-400",
    text: "Sende Al!",
  },
  {
    color: "bg-green-400",
    text: "Sende Al!",
  },
  {
    color: "bg-amber-400",
    text: "Sende Al!",
  },
  {
    color: "bg-pink-400",
    text: "Sende Al!",
  },
  {
    color: "bg-slate-400",
    text: "Sende Al!",
  },
  {
    color: "bg-yellow-400",
    text: "Sende Al!",
  },
];

const Slider = () => {
  return (
    <div className="pl-1">
      <Swiper spaceBetween={70} slidesPerView={6} loop={"true"}>
        {data.map((item, index) => {
          return (
            <SwiperSlide key={index}>
              <div>
                <span
                  className={`w-[62px] h-[62px] ${item.color} block rounded-full`}
                ></span>
                <p className="!w-max">{item.text}</p>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
};

export default Slider;
