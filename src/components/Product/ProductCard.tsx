import React from 'react'

function ProductCard({
  imageSrc = '/defaultProduct.png',
  name = 'Beats Studio3 Wireless Headphone',
  rating = '5',
  description = 'Ergonomic or cupe with on-oor controls up to 22 hours of tening time. Apple Wi crip & Closs ',
  price = '50',
  color = '#532',
  quantity = '5',
}: any) {
  return (
    <div className='flex items-center '>
      <div className='w-[713px] rounded-lg shadow-[0_22px_40px_-15px_rgba(0,0,0,0.25)] overflow-hidden md:flex'>
        <div className='md:flex-shrink-0 flex justify-center items-center'>
          <img
            className='h-48 w-full object-cover '
            src={imageSrc}
            alt={name}
          />
        </div>
        <div className='p-8'>
          <div className='text-[22px] font-[600] leading-[24px]'>{name}</div>
          <div className='flex  mt-2'>
            <div className='flex'>
              <svg
                className='h-5 w-5 fill-current text-yellow-500 ml-2'
                viewBox='0 0 24 24'
              >
                <path d='M12 2.25L9.46 8.2175L2.9175 9.1575C2.1075 9.2625 1.6675 10.1925 2.1075 10.8025L6.2175 16.3825L5.255 23.125C5.125 23.9325 5.85 24.5275 6.54 24.2525L12 21.1725L17.46 24.2525C18.15 24.5275 18.875 23.9325 18.745 23.125L17.7825 16.3825L21.8925 10.8025C22.3325 10.1925 21.8925 9.2625 21.0825 9.1575L14.54 8.2175L12 2.25Z' />
              </svg>
              <svg
                className='h-5 w-5 fill-current text-yellow-500 ml-2'
                viewBox='0 0 24 24'
              >
                <path d='M12 2.25L9.46 8.2175L2.9175 9.1575C2.1075 9.2625 1.6675 10.1925 2.1075 10.8025L6.2175 16.3825L5.255 23.125C5.125 23.9325 5.85 24.5275 6.54 24.2525L12 21.1725L17.46 24.2525C18.15 24.5275 18.875 23.9325 18.745 23.125L17.7825 16.3825L21.8925 10.8025C22.3325 10.1925 21.8925 9.2625 21.0825 9.1575L14.54 8.2175L12 2.25Z' />
              </svg>
              <svg
                className='h-5 w-5 fill-current text-yellow-500 ml-2'
                viewBox='0 0 24 24'
              >
                <path d='M12 2.25L9.46 8.2175L2.9175 9.1575C2.1075 9.2625 1.6675 10.1925 2.1075 10.8025L6.2175 16.3825L5.255 23.125C5.125 23.9325 5.85 24.5275 6.54 24.2525L12 21.1725L17.46 24.2525C18.15 24.5275 18.875 23.9325 18.745 23.125L17.7825 16.3825L21.8925 10.8025C22.3325 10.1925 21.8925 9.2625 21.0825 9.1575L14.54 8.2175L12 2.25Z' />
              </svg>
              <svg
                className='h-5 w-5 fill-current text-yellow-500 ml-2'
                viewBox='0 0 24 24'
              >
                <path d='M12 2.25L9.46 8.2175L2.9175 9.1575C2.1075 9.2625 1.6675 10.1925 2.1075 10.8025L6.2175 16.3825L5.255 23.125C5.125 23.9325 5.85 24.5275 6.54 24.2525L12 21.1725L17.46 24.2525C18.15 24.5275 18.875 23.9325 18.745 23.125L17.7825 16.3825L21.8925 10.8025C22.3325 10.1925 21.8925 9.2625 21.0825 9.1575L14.54 8.2175L12 2.25Z' />
              </svg>
              <svg
                className='h-5 w-5 fill-current text-yellow-500 ml-2'
                viewBox='0 0 24 24'
              >
                <path d='M12 2.25L9.46 8.2175L2.9175 9.1575C2.1075 9.2625 1.6675 10.1925 2.1075 10.8025L6.2175 16.3825L5.255 23.125C5.125 23.9325 5.85 24.5275 6.54 24.2525L12 21.1725L17.46 24.2525C18.15 24.5275 18.875 23.9325 18.745 23.125L17.7825 16.3825L21.8925 10.8025C22.3325 10.1925 21.8925 9.2625 21.0825 9.1575L14.54 8.2175L12 2.25Z' />
              </svg>
            </div>
            <div>( 200+ Reviews )</div>
          </div>
          <p className='mt-2 text-gray-500'>{description}</p>
          <div className='mt-2 text-gray-600'>{price}</div>
          <div className='mt-2 flex items-center'>
            <div className='text-gray-600 font-semibold mr-2'>Color:</div>
            <div
              className='h-4 w-4 rounded-full'
              style={{ backgroundColor: color }}
            ></div>
            <div className='text-gray-600 font-semibold ml-2 mr-2'>
              Quantity:
            </div>
            <div className='text-gray-600'>{quantity}</div>
          </div>
          <div className='mt-4 flex justify-between'>
            <button className='px-4 py-2 text-white bg-gray-800 rounded hover:bg-gray-700'>
              Add to Cart
            </button>
            <button className='px-4 py-2 text-white bg-indigo-500 rounded hover:bg-indigo-400'>
              Buy Now
            </button>
            <button className='px-4 py-2 text-gray-600 rounded border border-gray-600 hover:text-gray-800 hover:border-gray-800'>
              Add to Wishlist
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProductCard
