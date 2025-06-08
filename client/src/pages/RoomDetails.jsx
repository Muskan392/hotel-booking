import React, { use, useEffect, useState } from 'react'
import { assets, facilityIcons, roomCommonData, roomsDummyData } from '../assets/assets';
import { useParams } from 'react-router-dom';
import StarRating from '../components/StarRating';

const RoomDetails = () => {

const {id} = useParams();
// Fetch room details using the id from the URL
// Use useEffect to fetch data from the server or a mock API
const [room,setRoom] = useState(null);
const [mainImage,setMainImage] = useState(null);

useEffect(() => {
    const room=roomsDummyData.find(room=>room._id===id) 
    room && setRoom(room)
    room && setMainImage(room.images[0])

}, [id]);


  return room &&  (
    <div className=' py-28 md:py-35 px-4 md:px-16 lg:px-24 xl:px-32'>
        {/*roomDetails*/}
        <div className='flex flex-col md:flex-row items-start md:items-center gap-2'>
            <h1 className='text-3xl md:text-4xl font-playfair '>
                {room.hotel.name} <span className='font-inter text-sm'>{room.roomType}</span>
            </h1>
            <p className='text-xs font-inter py-1.5 px-3 text-white bg-orange-600 rounded-full'>20% OFF</p>
        </div>
        {/*room rating*/}
        <div className='flex items-center gap-1 mt-2'>
            <StarRating/>
            <p className='ml-2'>200+ reviews</p>
        </div>

        {/*room address*/}
        <div className='flex items-center gap-2 mt-2 text-gray-500'>
            <img src={assets.locationIcon} alt='location icon'/>
            <span>{room.hotel.address}</span>
        </div>

        {/*room image*/}
        <div className='flex flex-col lg:flex-row  gap-6 mt-6    '>
            <div className='w-full lg:w-1/2'>
                <img src={mainImage} alt='room image' className='w-full rounded-xl shadow-lg object-cover'/>
            </div>
            <div className='grid grid-cols-2 gap-4 w-full lg:w-1/2'>
                {room?.images.length>1 && room.images.map((image, index) => (
                    <img onClick={() => setMainImage(image)}
                    key={index} src={image} alt='room-image' className={`w-full rounded-xl shadow-md object-cover cursor-pointer ${mainImage===image && 'outline-3 outline-orange-500'}`}/>
                    ))}
            </div>
        </div>

        {/*room highlights*/}
        <div className='flex flex-col md:flex-row  md:justify-between  mt-10'>
            <div className='flex flex-col '>
                <h1 className='text-3xl md:text-4xl font-playfair'>Experience luxury like never before.</h1>
                <div className='flex flex-wrap items-center mb-6 gap-4 mt-3'>
                    {room.amenities.map((item, index) => (
                        <div key={index}>
                            <img src={facilityIcons[item]} alt={item} className='w-5 h-5'/>
                            <p className='text-xs'>{item}</p>

                        </div>
                        
                    ))}
                </div>
            </div>
            {/*room price*/}
            <p className='text-2xl font-medium'>${room.pricePerNight}/night</p>

        </div>
        {/* check in and check out form */}
       <form className="flex flex-col md:flex-row items-start md:items-center bg-white shadow-[0_0_20px_rgba(0,0,0,0.15)] justify-between p-6 rounded-2xl mx-auto max-w-6xl gap-6 mt-16">



            <div className='flex flex-col flex-wrap md:flex-row items-start md:items-center md:gap-10 gap-4 w-full text-gray-600'>
                <div className='flex flex-col '>
                    <label htmlFor="checkInDate" className='font-medium'>Check-In</label>
                    <input type="date" id='checkInDate' placeholder='Check-In' className='w-full rounded border border-gray-300 px-3 py-2 mt-1.5 outline-none' required/>
                </div>
 <div className='w-px h-15 bg-gray-300/70 max-md:hidden'></div>
                <div className='flex flex-col '>
                    <label htmlFor="checkOutDate" className='font-medium'>Check-Out</label>
                    <input type="date" id='checkOutDate' placeholder='Check-Out' className='w-full rounded border border-gray-300 px-3 py-2 mt-1.5 outline-none' required/>
                </div>

                <div className='w-px h-15 bg-gray-300/70 max-md:hidden'></div>

                 <div className='flex flex-col '>
                    <label htmlFor="guests" className='font-medium'>Guests</label>
                    <input type="number" id='guests' placeholder='0' className='max-w-20 rounded border border-gray-300 px-3 py-2 mt-1.5 outline-none' required/>
                </div>

            </div>
            <button type='submit' className='bg-primary text-white px-6 md:py-4  font-medium hover:bg-primary-dull active:scale-95 transition-all rounded-md max-md:w-full max-md:mt-6 md:px-25 text-base cursor-pointer'>
               Check Availability
            </button>

        </form>
        {/*common policies*/}
        <div className='mt-25 space-y-6'>
            {roomCommonData.map((item, index) => (
                <div key={index} className='flex items-start gap-3 mt-6'>
                    <img src={item.icon} alt={item.title} className='w-8 h-8'/>
                    <div>
                        <h2 className='text-base font-medium'>{item.title}</h2>
                        <p className='text-gray-600 text-sm mt-1'>{item.description}</p>
                    </div>
                </div>
            ))}
        </div>

        <div className='max-w-xl border-y border-gray-300 py-10 my-16 text-gray-600'>
            <h2 className='text-2xl font-playfair mb-4 text-black'>About this room</h2>
            <p>Escape into elegance at our luxury hotel, where every detail is crafted for comfort.Experience world-class service, opulent interiors, and breathtaking views.Our spacious suites offer a perfect blend of modern design and timeless charm. Indulge in gourmet dining curated by top chefs from around the world.Relax with exclusive spa treatments and rooftop infinity pools. Whether for business or leisure, your stay will be nothing short of extraordinary.</p>
        </div>

        {/*owner contact*/}
        <div className='flex flex-col items-start gap-4'>
           
           <div className='flex gap-4 items-center'>
            <img src={room.hotel.owner.image} alt='owner' className='w-14 h-14 rounded-full object-cover shadow-lg'/>
            <div>
                <p className='text-lg md:text-xl'>Hosted By {room.hotel.name}</p>
                <div className='flex items-center gap-1 text-gray-500 mt-2'>
                    <StarRating/>
                    <p className='ml-2'>200+ reviews</p>
                </div>
            </div>
           </div>

           <button className='px-6 py-2.5 mt-4 rounded text-white bg-primary hover:bg-primary-dull transition-all cursor-pointer'>Contact Now</button>

        </div>
      

    </div>
  )
}

export default RoomDetails