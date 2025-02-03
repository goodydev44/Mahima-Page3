import React from 'react'
import Img1 from '../assets/Images/Furniture 1.png'
import Img2 from '../assets/Images/Furniture 2.png'
import Img3 from '../assets/Images/Furniture 3.png'
import Img4 from '../assets/Images/Furniture 4.png'
import Img5 from '../assets/Images/Furniture 5.png'
import Img6 from '../assets/Images/Furniture 6.png'

const FeaturedProduct: React.FC = () => {
  const productList = [
    { id: 1, item: 'Eclypse Bookcase', category: 'LOUNGE', IMG: Img1 },
    { id: 2, item: 'Eclypse Bookcase', category: 'LOUNGE', IMG: Img2 },
    { id: 3, item: 'Eclypse Bookcase', category: 'LOUNGE', IMG: Img3 },
    { id: 4, item: 'Eclypse Bookcase', category: 'LOUNGE', IMG: Img4 },
    { id: 5, item: 'Eclypse Bookcase', category: 'LOUNGE', IMG: Img5 },
    { id: 6, item: 'Eclypse Bookcase', category: 'LOUNGE', IMG: Img6 },
  ]
  return (
    <div className='bg-[#eae5d4]'>
      <div className="relative">
        <h4 className="font-semibold text-[#b7a47e] tracking-[4px] mb-2"
          style={{ wordSpacing: '5px' }}>
          FEATURED PRODUCT
        </h4>
        <div className="flex flex-col items-start mb-5">
          <div className="escBox"></div>
          <h3 className="text-4xl font-semibold text-[#332f2b]">
            EXPLORE BEST PRODUCT <br />
            FROM OUR MASTER CRAFTSMAN
          </h3>
        </div>
        <p className="text-[#857f76] font-medium text-sm mb-11">
          Risus scelerisque a non turpis vitae malesuada sed venenatis, in fringilla sollicitudin <br />
          euismod sed. At urna adipiscing commodo suspondisse nunc enim tristique of
        </p>
        <button className="text-white font-medium bg-[#332f2d] py-2 px-10">EXPLORE ALL PRODUCT</button>
      </div>

      <div className='mt-20'>
        <div className='bg-white w-fit p-4'>
          <div className='place-items-center'>
            <img src={Img1} className='h-[260px] p-2 -mt-4' alt="" />
          </div>

          <div className='flex justify-between gap-[75px]'>
            <h4 className="font-semibold text-lg">Eclypse Bookcase</h4>
            <h4 className='text-[#b39e78] text-xl font-medium italic'>$99.00</h4>
          </div>

          <p className='text-xs font-medium text-[#aeaaa7] mt-1'>LOUNGE</p>

          <button className='bg-[#b39e78] text-white w-full font-medium py-1.5 mt-10 cursor-pointer'
            style={{ wordSpacing: '5px' }}>
            ADD TO CHART
          </button>
        </div>
      </div>
    </div>
  )
}

export default FeaturedProduct