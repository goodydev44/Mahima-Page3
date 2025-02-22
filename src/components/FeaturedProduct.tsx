import React from 'react'
import Img1 from '../assets/Images/Furniture 1.png'
import Img2 from '../assets/Images/Furniture 2.png'
import Img3 from '../assets/Images/Furniture 3.png'
import Img4 from '../assets/Images/Furniture 4.png'
import Img5 from '../assets/Images/Furniture 5.png'
import Img6 from '../assets/Images/Furniture 6.png'
import BGImg from '../assets/Images/Vector2.png'
import { GoClock } from 'react-icons/go'
import { AiOutlineTruck } from 'react-icons/ai'
import { GoShieldCheck } from 'react-icons/go'

const FeaturedProduct: React.FC = () => {
  const productList = [
    { id: 1, item: 'Eclypse Bookcase', category: 'LOUNGE', IMG: Img1 },
    { id: 2, item: 'Ebony Stand', category: 'LOUNGE', IMG: Img2 },
    { id: 3, item: 'Wood Bed Frame', category: 'BEDROOM', IMG: Img3 },
    { id: 4, item: 'Coffee Table', category: 'DINNING', IMG: Img4 },
    { id: 5, item: 'Espirt Sideboard', category: 'BEDROOM', IMG: Img5 },
    { id: 6, item: 'Oak Stand', category: 'LOUNGE', IMG: Img6 },
  ]

  const renderProduct = productList.map((product) => {
    return (
      <div key={product.id} className='bg-white p-4'>
        <div className='place-items-center'>
          <img src={product.IMG} className='h-[260px] p-2 -mt-4' alt="" />
        </div>

        <div className='flex justify-between gap-[75px]'>
          <h4 className="font-semibold text-lg">{product.item}</h4>
          <h4 className='text-[#b39e78] text-xl font-medium italic'>$99.00</h4>
        </div>

        <p className='text-xs font-medium text-[#aeaaa7] mt-1'>{product.category}</p>

        <button className='bg-[#b39e78] hover:bg-[#897653] text-white w-full font-medium py-1.5 mt-10 cursor-pointer
                        transition duration-50 ease-in-out'
          style={{ wordSpacing: '5px' }}>
          ADD TO CHART
        </button>
      </div>
    )
  })

  return (
    <div className='bg-[#eae5d4]'
      style={{
        // backgroundImage: `url(${BGImg})`,
        // backgroundPosition: 'center',
        // backgroundSize: '100%'
      }}>
      <div className='pt-20 pb-36'>
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
            euismod sed. At urna adipiscing commodo suspondisse nunc enim tristique et.
          </p>
          <button className="text-white font-medium bg-[#332f2d] hover:bg-[#5c4f48] py-2 px-10 cursor-pointer
                      transition duration-50 ease-in-out">
            EXPLORE ALL PRODUCT
          </button>
        </div>

        <div className='mt-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
          {renderProduct}
        </div>
      </div>

      <div className='flex justify-between bg-[#332f2c] text-white py-12'>
        <div className='flex gap-5'>
          <GoClock className='text-[#af9a75] text-[40px]' />
          <div className='space-y-1'>
            <h3 className='text-lg font-medium'>DISPATCH</h3>
            <p className='text-sm'>
              We will dispatch your product within <br />
              2-3 weeks
            </p>
          </div>
        </div>

        <div className='flex gap-5'>
          <AiOutlineTruck className='text-[#af9a75] text-[47px]' />
          <div className='space-y-1'>
            <h3 className='text-lg font-medium'>DELIVERY</h3>
            <p className='text-sm'>
              We will deliver your product and <br />
              take care of the installation
            </p>
          </div>
        </div>

        <div className='flex gap-5'>
          <GoShieldCheck className='text-[#af9a75] text-[40px]' />
          <div className='space-y-1'>
            <h3 className='text-lg font-medium'>GUARANTEE</h3>
            <p className='text-sm'>
              We offer a guarantee on all our <br />
              products
            </p>
          </div>
        </div>

      </div>
    </div>
  )
}

export default FeaturedProduct