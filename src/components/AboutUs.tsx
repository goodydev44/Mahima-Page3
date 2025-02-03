import React from "react";
import Img1 from "../assets/Images/PFrame1-1.png";
import Img2 from "../assets/Images/PFrame1-2.png";

const AboutUs: React.FC = () => {
  return (
    <div className="flex justify-between mt-40">
      <div className="flex gap-4">
        <img src={Img1} className="h-[400px] w-[280px]]" alt="" />
        <img src={Img2} className="h-[400px] w-[280px]] mt-[63px]" alt="" />
      </div>
      <div className="relative">
        <h4 className="font-semibold text-[#b7a47e] tracking-[4px] mb-2"
          style={{ wordSpacing: '5px' }}>ABOUT US</h4>
        <div className="flex flex-col items-start mb-5">
          <div className="escBox"></div>
          <h3 className="text-4xl font-semibold text-[#332f2b]">
            OUR HISTORY OF <br />
            MAKING THE BEST <br />
            WOOD PRODUCT
          </h3>
        </div>
        <p className="text-[#857f76] font-medium text-sm mb-11">
          Risus scelerisque a non turpis vitae malesuada sed venenatis in <br />
          fringilla sollicitudin euismod sed. At uma adipiscing commodo <br />
          suspendisse nunc enim tristique ot
        </p>
        <button className="text-white font-medium bg-[#332f2d] py-2 px-10">READ MORE</button>
      </div>
    </div>
  );
};

export default AboutUs;
