import Link from 'next/link'
import React, { useState } from 'react'
import { SiShopware } from 'react-icons/si'
import { MdOutlineCancel } from 'react-icons/md'
import { sidebarMenus } from '../../data/data'
// import { Disclosure, Transition } from '@headlessui/react'
import { BsChevronDown } from 'react-icons/bs'
import { useStateContext } from '../../contexts/ContextProvider'
// import ActiveLink from '../common/ActiveLink'

function Sidebar(props: any) {
  const { isSidebar, setIsSidebar } = useStateContext()

  return (
    <div
      className={`sidebar overflow-auto dark:bg-secondary-dark-bg bg-white h-screen fixed top-0 left-0   pb-12 drop-shadow-[7px_6px_4px_rgba(0,0,0,0.25)] transition-width duration-300 ease-in-out z-[1]  ${
        isSidebar ? 'w-full sm:w-72 px-3 opacity-100' : 'w-0 opacity-0'
      }`}
    >
      <div className='mt-4 flex justify-center items-center'>
        <Link
          href='/'
          className='flex items-center gap-3 text-xl font-extrabold tracking-tight text-gray-600 dark:text-white'
        >
          <img src='/logo.png' className='w-full h-[auto] object-contain' />
        </Link>
      </div>

      <div className='mt-[73px]'>
        <ul className='text-xl font-medium leading-[22.16px] tracking-[1%] pl-[43px] pr-[73px] flex flex-col gap-[45px] sidebar overflow-auto h-[70vh]'>
          <li className='flex gap-10 cursor-pointer'>
            <img src='/icon-home.png' className='w-fit h-[auto]' />
            <span>Home</span>
          </li>
          <li className='flex gap-10 cursor-pointer'>
            <img src='/icon-explore.png' className='w-fit h-[auto]' />
            <span>Explore</span>
          </li>
          <li className='flex gap-10 cursor-pointer'>
            <img src='/icon-saved.png' className='w-fit h-[auto]' />
            <span>Saved</span>
          </li>
          <li className='flex gap-10 cursor-pointer'>
            <img src='/icon-cart.png' className='w-fit h-[auto]' />
            <span>Cart</span>
          </li>
          <li className='flex gap-10 cursor-pointer'>
            <img src='/icon-selling.png' className='w-fit h-[auto]' />
            <span>Selling</span>
          </li>
          <li className='flex gap-10 cursor-pointer'>
            <img src='/icon-profile.png' className='w-fit h-[auto]' />
            <span>Profile</span>
          </li>
          <li className='flex gap-10 cursor-pointer'>
            <img src='/icon-history.png' className='w-fit h-[auto]' />
            <span>History</span>
          </li>
          <li className='flex gap-10 cursor-pointer'>
            <img src='/icon-contact.png' className='w-fit h-[auto]' />
            <span>Contact us</span>
          </li>
          <li className='flex gap-10 cursor-pointer'>
            <img src='/icon-settings.png' className='w-fit h-[auto]' />
            <span>Setting</span>
          </li>
        </ul>
      </div>
      <div className=''>
        <img
          src='/customer-service.png'
          className='w-[236px] h-[auto] mx-auto mt-[51px]'
        />
      </div>
    </div>
  )
}

export default Sidebar
