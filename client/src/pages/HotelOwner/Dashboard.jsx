import React, { useState } from 'react'
import Title from '../../components/Title'
import { assets, dashboardDummyData } from '../../assets/assets'

const Dashboard = () => {

    const [dashboardData, setDashboardData] = useState(dashboardDummyData);
  return (
    <div>
        <Title title="Dashboard" subtitle="Welcome to your hotel management dashboard.View performance insights track room listings, and manage bookings seamlessly.Everything you need to run your hotel efficiently — all in one place." align='left' font='outfit'/>
        <div className='flex gap-4 my-8'>
            {/*booking stats*/}
            <div className='bg-primary/3 border border-primary/10 rounded flex p-4 pr-8'>
            <img src={assets.totalBookingIcon} alt='image' className='max-sm:hidden h-10'/>
            <div className='flex flex-col sm:ml-4 font-medium'>
                <p className='text-blue-500 text-lg'>Total Bookings</p>
                <p className='text-neutral-400 text-base'>{dashboardData.totalBookings}</p>
            </div>


            </div>
            {/*revenue stats*/}
             <div className='bg-primary/3 border border-primary/10 rounded flex p-4 pr-8'>
            <img src={assets.totalRevenueIcon} alt='image' className='max-sm:hidden h-10'/>
            <div className='flex flex-col sm:ml-4 font-medium'>
                <p className='text-blue-500 text-lg'>Total Revenue</p>
                <p className='text-neutral-400 text-base'>${dashboardData.totalRevenue}</p>
            </div>


            </div>

        </div>

        {/*Recent Bookings*/}
        <h2 className='text-xl text-blue-950/70 font-medium mb-5'>Recent Bookings</h2>
        <div className='w-full max-w-3xl text-left border border-gray-300  rounded-lg max-h-80 overflow-y-scroll'>
            <table className='w-full '>
                <thead className='bg-gray-59'>
                    <tr>
                        <th className='py-3 px-4 text-gray-800 font-medium'>User Name</th>
                        <th className='py-3 px-4 text-gray-800 font-medium max-sm:hidden'>Room Name</th>
                        <th className='py-3 px-4 text-gray-800 font-medium text-center'>Total Amount</th>
                        <th className='py-3 px-4 text-gray-800 font-medium text-center'>Payment Status</th>

                    </tr>

                </thead>

                <tbody className='text-sm'>
                    {dashboardData.bookings.map((item, index) => (
                        <tr key={index}>
                          <td className='py-3 px-4 text-gray-700 border-t border-gray-300'>
                            {item.user.username}
                          </td>
                          <td className='py-3 px-4 text-gray-700 border-t border-gray-300 max-sm:hidden'>
                            {item.room.roomType}
                          </td>
                          <td className='py-3 px-4  text-center  text-gray-700 border-t border-gray-300'>
                            ${item.totalPrice}
                          </td>

                          <td className='py-3 px-4 border-t border-gray-300 flex'>
                            <button className={`py-1 px-3 text-xs  rounded-full mx-auto ${item.isPaid ? 'bg-green-100 text-green-700' : 'bg-amber-200 text-yellow-600'} transition-all duration-300 hover:scale-105`}>
                                {item.isPaid ? 'Completed' : 'Pending'}
                            </button>

                          </td>

                        </tr>
                    ))}


                </tbody>
            </table>
        </div>
    </div>
  )
}

export default Dashboard