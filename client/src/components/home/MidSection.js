import React from 'react'
import { imageURL } from '../constant/data'

const MidSection = () => {
  return (
    <div className='md:flex justify-between gap-2'>
      {
        imageURL.map((data,i) =>
            <div key={i} className='mb-4 md:mb-0'>
                <img src={data} alt="banner" className='' />
            </div>
        )
      }
    </div>
  )
}

export default MidSection
