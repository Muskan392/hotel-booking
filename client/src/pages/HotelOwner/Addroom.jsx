import React, { useState } from 'react';
import Title from '../../components/Title';
import { assets } from '../../assets/assets';

const Addroom = () => {
  const [images, setImages] = useState({
    1: null, 2: null, 3: null, 4: null
  });

  const [input, setInput] = useState({
    roomType: '',
    pricePerNight: 0,
    amenities: {
      'Free Wi-Fi': false,
      'Breakfast Included': false,
      'Parking': false,
      'Pool': false,
      'Gym': false,
      'Spa': false,
      'Mountain View': false,
      'City View': false,
    }
  });

  return (
    <form className="max-w-4xl mx-auto px-4 pb-28">
      <Title
        align="left"
        font="outfit"
        title="Add Room"
        subtitle={
          'Add a new room to your hotel listing.\nProvide essential details like room type, price, and amenities.\nEnsure guests get accurate and appealing information.'
        }
      />

      {/* Upload Images */}
      <p className="text-gray-800 font-semibold mt-10">Images</p>
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 my-4">
        {Object.keys(images).map((key) => (
          <label htmlFor={`roomImage${key}`} key={key} className="cursor-pointer">
            <img
              className="h-24 w-24 object-cover rounded-lg border-2 border-dashed border-gray-300 hover:border-blue-500 transition-all duration-300 shadow-sm"
              src={images[key] ? URL.createObjectURL(images[key]) : assets.uploadArea}
              alt="room-preview"
            />
            <input
              type="file"
              accept="image/*"
              id={`roomImage${key}`}
              hidden
              onChange={(e) => setImages({ ...images, [key]: e.target.files[0] })}
            />
          </label>
        ))}
      </div>

      {/* Room Type & Price */}
      <div className="flex flex-wrap sm:items-end gap-6 mt-6">
        <div className="flex-1 min-w-[200px]">
          <label className="text-gray-800 font-medium block mb-1">Room Type</label>
          <select
            onChange={(e) => setInput({ ...input, roomType: e.target.value })}
            value={input.roomType}
            className="border border-gray-300 rounded-md p-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-400"
          >
            <option value="">Select Room Type</option>
            <option value="Single Bed">Single Bed</option>
            <option value="Double Bed">Double Bed</option>
            <option value="Luxury Room">Luxury Room</option>
            <option value="Family Suite">Family Suite</option>
          </select>
        </div>

        <div>
          <label className="text-gray-800 font-medium block mb-1">Price <span className="text-sm text-gray-500">/night</span></label>
          <input
            type="number"
            placeholder="0"
            className="border border-gray-300 rounded-md p-2 w-28 focus:outline-none focus:ring-2 focus:ring-blue-400"
            value={input.pricePerNight}
            onChange={(e) => setInput({ ...input, pricePerNight: e.target.value })}
          />
        </div>
      </div>

      {/* Amenities */}
      <p className="text-gray-800 font-semibold mt-8">Amenities</p>
      <div className="grid grid-cols-2 sm:grid-cols-3 gap-y-2 text-gray-700 mt-2 max-w-xl">
        {Object.keys(input.amenities).map((amenity, index) => (
          <label key={index} className="flex items-center space-x-2">
            <input
              type="checkbox"
              className="accent-blue-500"
              id={`amenities${index + 1}`}
              checked={input.amenities[amenity]}
              onChange={() =>
                setInput({
                  ...input,
                  amenities: {
                    ...input.amenities,
                    [amenity]: !input.amenities[amenity]
                  }
                })
              }
            />
            <span>{amenity}</span>
          </label>
        ))}
      </div>

      {/* Submit Button */}
      <button
        type="submit"
        className="bg-primary hover:bg-blue-700 text-white font-medium px-6 py-2 rounded-lg mt-8 shadow transition duration-300"
      >
        Add Room
      </button>
    </form>
  );
};

export default Addroom;
