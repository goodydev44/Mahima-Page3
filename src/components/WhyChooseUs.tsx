import React from "react";
import Img1 from '../assets/Images/VectorSet 1.png'
import Img2 from '../assets/Images/VectorSet 2.png'
import Img3 from '../assets/Images/VectorSet 3.png'
import Img4 from '../assets/Images/VectorSet 4.png'

const WhyChooseUs: React.FC = () => {
  return (
    <div>
      <div className="flex items-end justify-between">
        <div className="flex h-fit gap-9">
          <div className="line2"></div>
          <div>
            <h4 className="font-semibold text-[#b7a47e] tracking-[4px] mb-2">
              WHY CHOOSE US
            </h4>
            <h3 className="text-4xl font-semibold text-[#332f2b]">
              ELEVATE YOUR <br />
              HOME WITH OUR <br />
              WOOD EURNITURE
            </h3>
          </div>
        </div>
        <p className="text-[#857f76] font-medium text-sm leading-6">
          Risus scelerisque a non turpis vitae malesuada sed venenatis, <br />
          in fringillo sollicitudin euismod sed. At urna adipiscing <br />
          commodo suspendisse nunc enim tristique et. <br />
          Orci clementum auctor accumsan semper lacus <br />
          accumsan. Uma adipiscing commodo suspendisse nunc <br />
          enim tristique et.
        </p>
      </div>
      <div className="flex justify-between">
        <div>
          <div className="escBox2"></div>
          <h1 className="text-8xl font-[900] ml-[26px] mb-3.5">230+</h1>
          <p className="font-medium text-[20px] text-[#332f2c] leading-6">Bespoke order <br /> production</p>
        </div>

        <div className="grid grid-cols-2">
          <div className="flex gap-8 items-start">
            <div>
              <div className="escBox3"></div>
              <img src={Img1} className="imgSty1" alt="" />
            </div>
            <div>
              <h3 className="headSty2">High <br /> Quality</h3>
              <p className="prgSty1">
                In fringilla sollicitudin euismod sed. <br /> 
                At urna adipiscing commodo <br /> 
                suspendisse nunc enim tristique et.
              </p>
            </div>
          </div>

          <div className="flex gap-8 items-start">
            <div>
              <div className="escBox3"></div>
              <img src={Img2} className="imgSty1" alt="" />
            </div>
            <div>
              <h3 className="headSty2">Professional <br /> Technique</h3>
              <p className="prgSty1">
                In fringilla sollicitudin euismod sed. <br /> 
                At urna adipiscing commodo <br /> 
                suspendisse nunc enim tristique et.
              </p>
            </div>
          </div>

          <div className="flex gap-8 items-start">
            <div>
              <div className="escBox3"></div>
              <img src={Img3} className="imgSty1" alt="" />
            </div>
            <div>
              <h3 className="headSty2">Variety of <br /> Wood</h3>
              <p className="prgSty1">
                In fringilla sollicitudin euismod sed. <br /> 
                At urna adipiscing commodo <br /> 
                suspendisse nunc enim tristique et.
              </p>
            </div>
          </div>

          <div className="flex gap-8 items-start">
            <div>
              <div className="escBox3"></div>
              <img src={Img4} className="imgSty1" alt="" />
            </div>
            <div>
              <h3 className="headSty2">Custom <br /> Production</h3>
              <p className="prgSty1">
                In fringilla sollicitudin euismod sed. <br /> 
                At urna adipiscing commodo <br /> 
                suspendisse nunc enim tristique et.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhyChooseUs;
