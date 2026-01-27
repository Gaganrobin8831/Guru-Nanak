// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/navigation';
import 'swiper/css/pagination';



// import required modules
import { EffectFade, Navigation, Pagination, Autoplay } from 'swiper/modules';

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
    // "/slider/slide8.jpg",
    "/slider/slide9.jpg",
    // "/slider/slide10.jpg",
    "/slider/slide11.jpg",


  ]
  return (
    <>
      <div className="w-full min-h-[60svh] md:min-h-[80svh]">
  <Swiper
    spaceBetween={30}
    effect="fade"
    pagination={{ clickable: true }}
    autoplay={{
      delay: 3000,
      disableOnInteraction: false,
    }}
    modules={[EffectFade, Pagination, Autoplay]}
    className="w-full h-full"
  >
    {imgArr.map((img, index) => (
      <SwiperSlide key={index} className="h-full">
        <img
          src={img}
          className="w-full h-full object-cover md:object-cover"
          alt="slide"
        />
      </SwiperSlide>
    ))}
  </Swiper>
</div>

    </>
  )
}

export default Slider