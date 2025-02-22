import React from 'react'
import Img from '../assets/Images/Person 1.png'

const StudyProgram: React.FC = () => {
  return (
    <div className='bg-[#332f2d] flex'>
      <img src={Img} className='w-[450px]' alt="" />
      <div className='grid'>
        <div className='w-full pt-16 pl-20'>
          <h4 className="font-semibold text-[#b7a47e] tracking-[4px] mb-2"
            style={{ wordSpacing: '5px' }}>
            STUDY PROGRAM
          </h4>
          <div className="flex flex-col items-start mb-5">
            <div className="escBox"></div>
            <h3 className="text-4xl font-semibold text-white leading-12">
              EMBRACE THE LIMITLESS <br />
              POSSIBILITIES OF THE CRAFT
            </h3>
          </div>
        </div>
        <div className='bg-[#b39e78] w-full pt-10 pl-20'>
          <p className="text-[#ede7d4] font-medium text-sm mb-11">
            Risus scelerisque a non turpis vitae malesuada sed <br />
            venenatis. In fringilla sollicitudin euismod sed. At urna <br />
            adipiscing commodo suspendisse nunc enim tristique et.
          </p>
          <button className="text-white font-medium bg-[#332f2d] hover:bg-[#5c4f48] py-2 px-10 cursor-pointer
                      transition duration-50 ease-in-out">
            JOIN NOW
          </button>
        </div>
      </div>
    </div>
  )
}
''
export default StudyProgram