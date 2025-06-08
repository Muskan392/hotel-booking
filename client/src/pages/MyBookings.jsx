import React, { useState } from 'react'
import Title from '../components/Title'
import { assets, userBookingsDummyData } from '../assets/assets'
import { UserButton } from '@clerk/clerk-react';

const MyBookings = () => {


const [bookings,setBookings] = useState(userBookingsDummyData);





  return (
    <div className='py-28 md:py-35 px-4 md:px-16 lg:px-24 xl:px-32'>
        <Title title="My Bookings" subtitle="Seamlessly manage bookings with our intuitive and efficient system.
Track reservations, guest details, and availability — all in one place." align='left'/>

<div className='max-w-6xl mt-8 w-full text-gray-800'>
    <div className='hidden md:grid md:grid-cols-[3fr_2fr_1fr] gap-4 w-full  border-gray-300 font-medium text-base py-3 border-b pb-2'>
        <div className='w-1/3'>Hotels</div>
          <div className='w-1/3'>Date & Timings</div>
            <div className='w-1/3'>Payment</div>
    </div>

{ bookings.map((booking) => (
    <div key={booking._id} className='grid grid-cols-[3fr_2fr_1fr] gap-4 w-full  border-gray-300 font-medium text-base py-3 border-b pb-2 last:border-0'>
        {/* Hotel details */}
        <div className='flex  flex-col md:flex-row items-start gap-4'>
            <img src={booking.room.images[0]} alt='hotel-image' className='min-md:w-44 rounded shadow object-cover'/>
            <div className='flex flex-col gap-1 mt-2'>
                <p className='font-playfair text-2xl'>{booking.hotel.name}
                      <span className='font-inter text-sm'> ({ booking.room.roomType})</span>
                </p>
                <div className='flex items-center gap-2 text-sm text-gray-500'>
                     <img src={assets.locationIcon} alt='location-image' />
                     <span>{booking.hotel.address}</span>
                </div>

                  <div className='flex items-center gap-2 text-sm text-gray-500'>
                     <img src={assets.guestsIcon} alt='guets-image' />
                     <span>Guests: {booking.guests}</span>
                </div>
                <p className='text-base'>Total:$ {booking.totalPrice}</p>
              
            </div>
        </div>
        {/*Time & Date*/}
        <div className='flex flex-row md:items-center md:gap-12 mt-3 gap-8'>
            <div>
                <p>Check-In:</p>
                <p className='text-gray-500 text-sm'>{new Date(booking.checkInDate).toDateString()}</p>
            </div>
            <div>
                <p>Check-Out:</p>
                <p className='text-gray-500 text-sm'>{new Date(booking.checkOutDate).toDateString()}</p>
            </div>

        </div>
        {/*Payment Status*/}
        <div className="flex flex-col items-start justify-center pt-3">
  <div className="flex items-center gap-2">
    <div className={`h-3 w-3 rounded-full ${booking.isPaid ? 'bg-green-500' : 'bg-red-500'}`}></div>
    
    <p className={`text-sm font-medium px-2 py-0.5 rounded-full 
      ${booking.isPaid 
        ? ' text-green-700' 
        : ' text-red-700'
      }`}>
      {booking.isPaid ? 'Paid' : 'Not Paid'}
    </p>
  </div>
  {!booking.isPaid && (
<button className="px-4 py-1.5 font-inter text-xs bg-white border border-gray-400 text-gray-600  hover:bg-gray-300 transition-all cursor-pointer duration-300 shadow-md rounded-full mt-2">
  Pay Now
</button>

  )}
</div>

       

    </div>
))}



</div>



    </div>
  )
}

export default MyBookings