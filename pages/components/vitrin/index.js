import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

const data = [
  {
    img: "rectangle.png",
  },
  {
    img: "rectangle.png",
  },
  {
    img: "rectangle.png",
  },
  {
    img: "rectangle.png",
  },
];

const Vitrin = () => {
  return (
    <div>
      <Swiper
        modules={[Pagination]}
        spaceBetween={-20}
        slidesPerView={1}
        pagination={{
          clickable: true,
          el: ".swiper-pagination",
        }}
      >
        {data.map((item, index) => {
          return (
            <SwiperSlide key={index}>
              <div className="flex justify-center">
                <img src={`${item.img}`} />
              </div>
            </SwiperSlide>
          );
        })}
        <div>
          <div className="swiper-pagination"></div>
        </div>
      </Swiper>
    </div>
  );
};

export default Vitrin;
