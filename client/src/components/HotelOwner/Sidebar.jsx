import React from 'react'
import { NavLink } from 'react-router-dom'
import { assets } from '../../assets/assets'

const Sidebar = () => {

const sidebarlinks=[
  {
    name: "Dashboard",
    path:"/owner",
    icon: assets.dashboardIcon
},
{
    name: "Add Room",
    path:"/owner/add-room",
    icon: assets.addIcon
},
{
    name: "List Rooms",
    path:"/owner/list-rooms",
    icon: assets.listIcon
}
]

  return (
    <div className='md:w-64 w-16  border-r border-gray-300 h-full text-base bg-white flex flex-col transition-all duration-300 pt-4 '>
        {sidebarlinks.map((link, index) => (
            <NavLink to={link.path} key={index} end='/owner' className={({isActive})=>`flex items-center gap-3 md:px-8 px-4 py-3  ${isActive ? 'border-r-4 md:border-r-[6px] bg-blue-600/10 border-blue-600/10 text-blue-600' : 'text-gray-700 hover:bg-gray-100/90 border-white'} `}>
                < img src={link.icon} alt={link.name} className='min-h-6 min-w-6'/>
                <p className='md:block hidden text-center'>{link.name}</p>

            </NavLink>
        ))}

    </div>
  )
}

export default Sidebar