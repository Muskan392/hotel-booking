import React from 'react'
import { assets, cities } from '../assets/assets'

const HotelReg = () => {
  return (
   <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70">
  <form className="flex flex-col md:flex-row bg-white rounded-2xl max-w-4xl w-full shadow-2xl max-md:mx-4 overflow-hidden">
    
    {/* Left image */}
    <img src={assets.regImage} alt="register" className="w-1/2 object-cover hidden md:block" />
    
    {/* Form content */}
    <div className="relative flex flex-col items-start md:w-1/2 w-full p-8 md:p-10 space-y-4">
      
      {/* Close icon */}
      <img
        src={assets.closeIcon}
        alt="close icon"
        className="absolute top-4 right-4 h-5 w-5 cursor-pointer hover:scale-110 transition-transform"
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
          id="name"
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
        <input
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
        <input
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
        <select
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