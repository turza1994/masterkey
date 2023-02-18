import React from 'react'
import { AiOutlineMenu } from 'react-icons/ai'
import { useStateContext } from '../../contexts/ContextProvider'

function Navbar(props: any) {
  const { isSidebar, setIsSidebar } = useStateContext()

  return (
    <div className='flex items-center justify-between w-full sticky top-0 py-[20px] px-[40px] text-xl text-current-color bg-main-bg dark:bg-main-dark-bg'>
      <button
        type='button'
        className='rounded-full p-3 hover:bg-light-gray block lg:hidden'
        onClick={() => {
          setIsSidebar(!isSidebar)
        }}
      >
        <AiOutlineMenu />
      </button>

      <div className='flex flex-col items-center'>
        <h2 className='text-4xl font-semibold leading-[39px]'>Headphone</h2>
        <h3 className='text-[18px] font-semibold leading-[20px]'>
          For the top band
        </h3>
      </div>

      <div className='flex items-center gap-4'>
        <div className='relative flex items-center mr-[15px]'>
          <div className='absolute inset-y-0 left-0 pl-3 flex items-center'>
            <img src='/icon-search.png' alt='' />
          </div>
          <input
            type='text'
            placeholder='Search Product'
            className='w-[371px] h-[47px] rounded-[10px] shadow-2xl drop-shadow-lg px-[25px]'
          />
          <div className='absolute inset-y-0 right-0 pr-3 flex items-center'>
            <img src='/icon-filter.png' alt='' />
          </div>
        </div>

        <button className='w-[47px] h-[47px] rounded-[5px] p-2 hover:bg-light-gray bg-[#17FF3C8C]'>
          <img
            src='/icon-mail.png'
            alt=''
            className='w-full h-auto object-contain'
          />
        </button>
        <button className='w-[47px] h-[47px] rounded-[5px] p-2 hover:bg-light-gray bg-[#53FF027D]'>
          <img
            src='/icon-notification.png'
            alt=''
            className='w-full h-auto object-contain'
          />
        </button>
        <button className='w-[47px] h-[47px] rounded-[5px] p-2 hover:bg-light-gray bg-[#50D322AB]'>
          <img
            src='/icon-customer.png'
            alt=''
            className='w-full h-auto object-contain'
          />
        </button>
      </div>
    </div>
  )
}

export default Navbar
