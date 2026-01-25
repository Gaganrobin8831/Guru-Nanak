// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/navigation';
import 'swiper/css/pagination';



// import required modules
import { EffectFade, Navigation, Pagination, Autoplay } from 'swiper/modules';
import { Link } from 'react-router-dom';

const EventsSlide = () => {
  const imgArr = [
    "/slider2/slide4.jpg",
    "/slider2/slide13.jpg",
    "/slider2/slide2.jpg",
    "/slider2/slide12.jpg",
    "/slider2/slide14.jpg",
    "/slider2/slide15.jpg",
    "/slider2/slide16.jpg",
    "/slider2/slide3.jpg",

    "/slider2/slide1.jpg",
    "/slider2/slide5.jpg",
    "/slider2/slide6.jpg",
    "/slider2/slide7.jpg",
    "/slider2/slide8.jpg",
    "/slider2/slide9.jpg",
    "/slider2/slide10.jpg",
    "/slider2/slide11.jpg",


  ]
  return (
    <div className='m-h-screen py-10 bg-gray-200'>

      <h1 className='text-center text-[55px] font-extrabold text-orange-400 '>Events</h1>
      <Swiper
        spaceBetween={20}
        navigation={true}
        pagination={{ clickable: true }}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        breakpoints={{
          0: {
            slidesPerView: 1, // phones
          },
          640: {
            slidesPerView: 2, // small tablets
          },
          1024: {
            slidesPerView: 4, // desktops
          },
          1280: {
            slidesPerView: 5, // large screens
          },
        }}
        modules={[Pagination, Autoplay, Navigation]}
        className="mySwiper h-75!  my-10!"
      >

        {imgArr.map((img, index) => (
          <SwiperSlide key={index}>
            <img
              src={img}
              className="w-full h-75 md:h-100 object-cover rounded-lg"
            />
          </SwiperSlide>
        ))}

      </Swiper>

     <div className='text-center my-5'>
      <Link to="/events"><button className='py-3 px-6 bg-orange-400 rounded-full font-bold text-white hover:cursor-pointer'>View More </button></Link>
      </div> 
    </div>
  )
}

export default EventsSlide