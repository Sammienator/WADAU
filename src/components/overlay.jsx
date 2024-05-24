import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import pic5 from '../assets/pic5.jpg'
import pic4 from '../assets/pic4.jpg'


const Overlee = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <div className="flex items-center justify-center">
      <div className="max-w-screen-lg w-full mx-auto flex flex-col lg:flex-row">
        <div
          className="w-full lg:w-1/2"
          data-aos="fade-right"
          data-aos-offset="200"
        >
          <img
            src={pic4}
            alt="Big "
            className="to lg:mb-8"
            width={1280} height={501}
          />
          <img
            src={pic5}
            alt="Small"
            className=" -mt-16 ml-10 lg:absolute"
            width={278} height={401}
          />


        </div>
        <div
          className="w-full lg:w-1/2 lg:pl-8"
          data-aos="fade-left"
          data-aos-offset="200"
          
        >
          <h2 className="text-2xl font-bold mb-4">Main Heading</h2>
          <p className="mb-4">
            Explanation Lorem ipsum dolor sit amet, consectetur adipiscing
            elit. Duis condimentum placerat mauris at finibus. Vestibulum
            dignissim, felis quis tincidunt aliquam, turpis metus molestie
            nulla, vel molestie odio lorem ac tortor.
          </p>
          <h3 className="text-lg font-bold mb-2">Subheading 1</h3>
          <p className="mb-4">
            Subheading 1 Explanation Lorem ipsum dolor sit amet, consectetur
            adipiscing elit. Duis condimentum placerat mauris at finibus.
          </p>
          <h3 className="text-lg font-bold mb-2">Subheading 2</h3>
          <p>
            Subheading 2 Explanation Lorem ipsum dolor sit amet, consectetur
            adipiscing elit. Duis condimentum placerat mauris at finibus.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Overlee;
