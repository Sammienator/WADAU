import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import about from '../assets/about.png'

const Hero = () => {

  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);


  return (
    

    <section class="text-white bg-gray-800 body-font">
  <div data-aos="zoom-in-up" data-aos-duration="2000" class="container mx-auto flex px-5 py-24 items-center justify-center flex-col">
    <img class="lg:w-2/6 md:w-3/6 w-5/6 mb-10 object-cover object-center rounded shadow-lg" alt="hero" src={about} />
    
    <div  class="text-center lg:w-2/3 w-full">
      <h1  class="title-font sm:text-4xl text-3xl mb-4 font-medium text-white">About Wadau Music...</h1>
      <p class="mb-8 leading-relaxed">A🎵 Wadau Music Group celebrates the heartbeat of Kenya through music. Our diverse ensemble of talented musicians draws inspiration from our rich cultural heritage, blending traditional rhythms with contemporary flair. <br/> Here’s what sets us apart:
<br/>
Authenticity: Our melodies resonate with the soul of Kenya. From the rhythmic beats of the djembe to the haunting notes of the nyatiti, we honor our roots. <br/>
Unity in Harmony: Our band members come from different backgrounds, languages, and tribes. Yet, when we play together, we create a harmonious fusion that transcends boundaries. <br/>
Community Connection: Whether performing at local festivals, intimate gatherings, or bustling markets, we engage with our audience.  <br/>Music is our bridge—a shared experience that unites us all.
Join us on this melodic journey as we celebrate Kenya’s vibrant spirit. 🇰🇪🎶

 Wadau Music is more than a platform—it’s a movement to keep our culture alive and thriving. 🇰🇪✨</p>
      <div data-aos="zoom-in-down" data-aos-duration="3000" data-aos-delay="400"   class="flex justify-center">
        <button class="inline-flex text-white bg-black border-0 py-2 px-6 focus:outline-none hover:bg-purple-600 rounded text-lg">Button</button>
        <button class="ml-4 inline-flex text-black bg-white border-0 py-2 px-6 focus:outline-none hover:bg-purple-600 rounded text-lg">Button</button>
      </div>
    </div>
  </div>
</section>
  )
}

export default Hero