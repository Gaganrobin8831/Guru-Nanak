
const Events = () => {
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
    <div className='min-h-screen p-8 bg-gray-200'>
        <h1 className="text-center text-2xl sm:text-3xl lg:text-[35px] font-extrabold text-orange-400 mb-6 about-title">
        School activities
      </h1>
      <p className='lg:w-[60%] mx-auto p-7 text-center'>School activities play a crucial role in shaping students academic, social, and personal development. These activities go beyond the standard classroom curriculum and provide students with practical learning experiences.</p>
      <div className='min-h-[80%] flex flex-wrap justify-center gap-4'>
        {
           imgArr.map((value,index)=>(
              <div key={index} className='w-72 h-72 shadow-lg rounded-lg overflow-hidden'>
                    <img src={value} alt={`Event ${index + 1}`} className='w-full h-full object-cover hover:scale-105 transition-transform duration-300'/>
                </div>
           ))
        }
      </div>
    </div>
  )
}

export default Events