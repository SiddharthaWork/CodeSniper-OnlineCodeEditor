import { Icon } from '@iconify/react/dist/iconify.js'
import React from 'react'
import { useState } from 'react';
import GridCard from '../components/GridCard';
import ListCard  from '../components/ListCard';
const Home = () => {
  const [layout, setLayout] = useState(false);
  return (
    <div className='w-full h-full'>
      <div className='flex flex-col justify-center items-center gap-6'>
        <h1 className='font-kanit text-white text-4xl'>Welcome <span className='text-sky-400'> Siddhartha</span></h1>
        <div className='md:w-[20rem] h-[2rem] bg-white rounded-full p-6 flex justify-center items-center '>
          {/* <h1 className='font-body text-sm text-black'>Search Your Code File</h1> */}

          <div className='w-full flex gap-2 items-center justify-center'>
            {/* Added Icon */}
            <Icon icon="mingcute:search-3-line" width="24" height="24" color='black' />
            <input type="text" className="w-full h-full outline-none border-none text-black " placeholder='Enter Your Code File Name' />
            {/* <Icon icon="mingcute:search-3-line" width="24" height="24" color='black' />  */}
          </div>

          

        </div>

      </div>
      <div className='w-full h-full bg-white'>
        {
          layout ?
            (
              <>
              <GridCard />
              </>
            ) : (
              <>
              <ListCard />
              </>
            )
        }
      </div>

    </div>
  )
}

export default Home