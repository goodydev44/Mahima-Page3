import React from 'react'
import BGImg from '../assets/Images/bgImg-1.png'
import BGImg2 from '../assets/Images/Vector2.png'
import { IoBedOutline } from 'react-icons/io5'
import { GrLounge } from 'react-icons/gr'
import { MdOutlineTableRestaurant } from 'react-icons/md'
import { PiOfficeChair } from 'react-icons/pi'

const Hero: React.FC = () => {
  const Icons = [
    { id: 1, item: 'BEDROOM', icon: <IoBedOutline className='iconSty1' /> },
    { id: 2, item: 'LOUNGE', icon: <GrLounge className='iconSty1' /> },
    { id: 3, item: 'DINNING ROOM', icon: <MdOutlineTableRestaurant className='iconSty1' /> },
    { id: 4, item: 'OFFICE', icon: <PiOfficeChair className='iconSty1' /> },
  ];

  const Selections = Icons.map((I) => {
    return (
      <div key={I.id} className='sty1'>
        {I.icon}
        <h4 className='headSty1'>{ I.item }</h4>
      </div>
    )
  })

  return (
    <div>
      <div className='text-white bg-[#332f2c] bg-no-repeat py-28 space-y-7'
        style={{
          backgroundImage: `url(${BGImg2}) ,url(${BGImg})`,
          backgroundPosition: 'left center, right center',
          backgroundSize: '33% 100%, 67% 100%',
        }}>
        <h2 className="text-[43px] font-bold tracking-wide leading-[3.8rem]"
          style={{ wordSpacing: '5px' }}>
          ELEVATE YOUR HOME <br /> WITH EXQUISITE <br /> WOOD FURNITURE
        </h2>

        <div className="line"></div>

        <p className='font-medium text-lg'>
          Risus scelerisque a non turpis vitae malesuada sed venenatis. <br />
          In fringilla sollicitudin euismod sed. At urna adipiscing <br />
          commodo suspendisse nunc enim tristique et.
        </p>
        <button className='bg-[#b39e78] text-lg font-medium py-1.5 px-8'>DISCOVER</button>
      </div>

      <div className="grid grid-cols-4 text-center">
        { Selections }
      </div>
    </div>
  )
}

export default Hero