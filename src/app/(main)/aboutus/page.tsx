import { OurValues } from '@/components/our-values'
import React from 'react'

const page = () => {
  return (
    <div className='py-16'>
      <div className='bg-gray-200 container rounded-xl py-16'>
        <h1 className='text-4xl font-bold text-center'>Our Values</h1>
      
      <OurValues/>
      </div>
    </div>
  )
}

export default page
