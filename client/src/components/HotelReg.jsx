import React, { useState } from 'react'
import { assets, cities } from '../assets/assets'
import { useAppContext } from '../context/AppContext'
import toast from 'react-hot-toast';

const HotelReg = () => {


const {setShowHotelReg,axios,getToken,setIsOwner}=useAppContext();
const [name,setName]=useState("");
const [address,setAddress]=useState("");
const [contact,setContact]=useState("");
const [city,setCity]=useState("");

const onSubmitHandler=async(event)=>{
  try{
    event.preventDefault();
    const {data}=await axios.post(`/api/hotels`,{name,contact,address,city},{headers:{Authorization:`Bearer ${await getToken()}`}})
    if(data.success){
      toast.success(data.message);
      setIsOwner(true);
      setShowHotelReg(false);
          navigate("/owner");
    }
    else{
      toast.error(data.message);
    }


  }catch(error){
    toast.error(error.message);

  }
}



  return (
   <div onClick={()=>setShowHotelReg(false)} className="fixed inset-0 z-50 flex items-center justify-center bg-black/70">
  <form onSubmit={onSubmitHandler} onClick={(e)=>e.stopPropagation()} className="flex flex-col md:flex-row bg-white rounded-2xl max-w-4xl w-full shadow-2xl max-md:mx-4 overflow-hidden">
    
    {/* Left image */}
    <img src={assets.regImage} alt="register" className="w-1/2 object-cover hidden md:block" />
    
    {/* Form content */}
    <div className="relative flex flex-col items-start md:w-1/2 w-full p-8 md:p-10 space-y-4">
      
      {/* Close icon */}
      <img
        src={assets.closeIcon}
        alt="close icon"
        className="absolute top-4 right-4 h-5 w-5 cursor-pointer hover:scale-110 transition-transform" onClick={()=>setShowHotelReg(false)}
      />

      <p className="text-2xl font-semibold text-gray-800 mt-6 w-full text-center">
        Register Your Hotel
      </p>

      {/* Hotel Name */}
      <div className="w-full">
        <label htmlFor="name" className="block font-medium text-gray-600 mb-1">
          Hotel Name
        </label>
        <input
          id="name" onChange={(e)=>setName(e.target.value)} value={name}
          type="text"
          placeholder="Type here"
          className="border border-gray-300 rounded-lg w-full px-4 py-2.5 outline-indigo-500 text-sm"
          required
        />
      </div>

      {/* Contact */}
      <div className="w-full">
        <label htmlFor="contact" className="block font-medium text-gray-600 mb-1">
          Phone
        </label>
        <input onChange={(e)=>setContact(e.target.value)} value={contact}
          id="contact"
          type="tel"
          placeholder="Type here"
          className="border border-gray-300 rounded-lg w-full px-4 py-2.5 outline-indigo-500 text-sm"
          required
        />
      </div>

      {/* Address */}
      <div className="w-full">
        <label htmlFor="address" className="block font-medium text-gray-600 mb-1">
          Address
        </label>
        <input onChange={(e)=>setAddress(e.target.value)} value={address}
          id="address"
          type="text"
          placeholder="Type here"
          className="border border-gray-300 rounded-lg w-full px-4 py-2.5 outline-indigo-500 text-sm"
          required
        />
      </div>

      {/* City Dropdown */}
      <div className="w-full">
        <label htmlFor="city" className="block font-medium text-gray-600 mb-1">
          City
        </label>
        <select onChange={(e)=>setCity(e.target.value)} value={city}
          id="city"
          className="border border-gray-300 rounded-lg w-full px-4 py-2.5 outline-indigo-500 text-sm"
          required
        >
          <option value="">Select City</option>
          {cities.map((city) => (
            <option key={city} value={city}>
              {city}
            </option>
          ))}
        </select>
      </div>

      {/* Submit Button */}
      <button className="bg-indigo-600 hover:bg-indigo-700 text-white font-medium px-6 py-2 rounded-lg mt-4 self-start transition-all">
        Register
      </button>
    </div>
  </form>
</div>

  )
}

export default HotelReg