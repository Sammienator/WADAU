import React from 'react';
import pic9 from '../assets/pic9.jpg'
import pic10 from '../assets/pic10.jpg'
import pic8 from '../assets/pic8.jpg'

const Before = () => {
  return (
    
    <section class="py-10 dark:bg-dark">
      <div class="container mx-auto">
        <div class="-mx-4 flex flex-wrap">
          <div class="w-full px-4 lg:w-8/12 ">
            <div class="relative mb-8 h-[370px] md:h-[480px] shadow-xl">
              <img src={pic10} alt="product" class="h-full w-full object-cover object-center "/>

              <div class="absolute left-0 top-0 flex h-full w-full items-center px-8 md:px-12">
                <div class="max-w-[420px]">
                  <h3>
                    <a href="#b" class="mb-5 block text-4xl font-bold text-white hover:text-primary sm:text-4xl">
                      Mega Sale Up To 50% Off For All
                    </a>
                  </h3>
                  <p class="mb-9 text-base text-white font-bold underline italic">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Integer ac accumsan nunc.
                  </p>
                  <a href="#b" class="inline-flex items-center justify-center rounded-md bg-primary px-7 py-[13px] text-center text-base font-medium text-white hover:bg-blue-dark">
                    Grab The Offer
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div class="w-full px-4 lg:w-4/12">
            <div class="-mx-4 flex flex-wrap">
              <div class="w-full px-4 md:w-1/2 lg:w-full">
                <div class="relative mb-8 h-[223px] shadow-xl">
                  <img src={pic9} alt="product" class="h-full w-full object-cover object-center"/>

                  <div class="absolute left-0 top-0 flex h-full w-full items-end justify-end p-6 sm:p-9">
                    <div class="max-w-[180px] text-right">
                      <h3>
                        <a href="#b" class="mb-3 block text-4xl font-bold text-white hover:text-primary xl:text-2xl">
                          Summer Music Playlist. 
                        </a>
                      </h3>
                      <a href="#b" class="text-base font-medium text-white hover:text-primary">
                       Wadau Bangers! 
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div class="w-full px-4 md:w-1/2 lg:w-full">
                <div class="relative mb-8 h-[223px] shadow-xl">
                  <img src={pic8} alt="product" class="h-full w-full object-cover object-center"/>

                  <div class="absolute left-0 top-0 flex h-full w-full items-end justify-end p-6 sm:p-9">
                    <div class="max-w-[180px] text-right">
                      <h3>
                        <a href="#b" class="mb-3 block text-3xl font-bold text-dark hover:text-primary xl:text-xl">
                          Get 30% Off Physical Music Copies.
                        </a>
                      </h3>
                      <a href="#b" class="text-base text-dark font-bold hover:text-primary">
                        Shop Now
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Before