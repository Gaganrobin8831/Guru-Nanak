import { useEffect, useState } from "react";
import { obj1 } from "../data/data";

const Infra = () => {
    const [data,setData] = useState([]);
    useEffect(()=>{
        setData(obj1.infra)
    },[])
  return (
    <div className="min-h-screen bg-gray-200 p-8">
        <h1 className="text-center text-2xl sm:text-3xl lg:text-[35px] font-extrabold text-orange-400 mb-6 about-title">Infrastructure</h1>
         <div className='min-h-[80%] flex flex-wrap justify-center gap-4'>
                {
                    data.map((item) => (
                        <div  className="bg-white p-4 rounded-lg shadow-md">
                            <h2 className="text-xl font-bold my-3">{item.name}</h2>
                            <img src={item.imgurl} alt={item.name} className=" w-75 h-75 object-cover rounded-md" />
                        </div>
                    ))
                }
         </div>
  
    </div>
  )
}

export default Infra
                    
    