import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/pagination';

import { EffectFade, Pagination, Autoplay } from 'swiper/modules';

const Slider = () => {
  const imgArr = [
    "/slider/slide4.jpg",
    "/slider/slide13.jpg",
    "/slider/slide2.jpg",
    "/slider/slide12.jpg",
    "/slider/slide14.jpg",
    "/slider/slide15.jpg",
    "/slider/slide16.jpg",
    "/slider/slide3.jpg",
    "/slider/slide1.jpg",
    "/slider/slide5.jpg",
    "/slider/slide6.jpg",
    "/slider/slide7.jpg",
    "/slider/slide9.jpg",
    "/slider/slide11.jpg",
  ];

  return (
    <div className="w-full h-[55svh] md:h-[80svh] overflow-hidden bg-black">
      <Swiper
        effect="fade"
        fadeEffect={{ crossFade: true }}
        pagination={{ clickable: true }}
        autoplay={{ delay: 3000, disableOnInteraction: false }}
        modules={[EffectFade, Pagination, Autoplay]}
        className="w-full h-full"
      >
        {imgArr.map((img, index) => (
          <SwiperSlide key={index} className="w-full h-full">
            <img
  src={img}
  alt="slide"
  className="w-full h-full object-contain md:object-cover"
/>

          </SwiperSlide>
        ))}
        
      </Swiper>
    </div>
  );
};

export default Slider;
