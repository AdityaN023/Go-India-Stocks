import React from 'react'

const comment = () => {
  return (
    <div className='flex p-2 gap-1 border-t-[1px] shadow-[6px_6px_0px_#d6d6d6] rounded-lg w-[90%]'>
        <div className='w-[20%] sm:w-[10%] p-2'><img src="favicon.ico" alt="logo" width="50px" /></div>
        <div className='py-2'>
          <h2 className='pb-2 font-medium'>Lorem Ipsum <button className='px-4 text-white text-sm mx-4 rounded-full bg-blue-700'>Sector 2</button></h2>
          <p className='text-gray-800 text-sm sm:text-base'>Lorem ipsum is simply dumming text of the printing and typesetting industry.Lorem ipsum is</p>
          <div className='flex justify-between items-center mt-2'>
            <button className='flex justify-center items-center gap-1 text-base sm:text-2xl'>
              <ion-icon name="heart-outline"></ion-icon>
              <span className='sm:text-lg text-sm'>2k</span>
            </button>
            <button className='flex justify-center items-center gap-1 text-base sm:text-2xl'>
              <ion-icon name="eye-outline"></ion-icon>
              <span className='sm:text-lg text-sm'>2k</span>
            </button>
            <button className='flex justify-center items-center gap-1 text-base sm:text-2xl'>
              <ion-icon name="chatbox-outline"></ion-icon>
              <span className='sm:text-lg text-sm'>2k Comments</span>
            </button>
            <button className='flex justify-center items-center gap-1 text-base sm:text-2xl'>
              <ion-icon name="share-social-outline"></ion-icon>
              <span className='sm:text-lg text-sm'>Share</span>
            </button>
          </div>
        </div>
        <div className='w-[12%] sm:w-[12%] min-w-fit'>
          <span className='text-blue-500 font-semibold'>2 min ago</span>
        </div>
    </div>
  )
}

export default comment
