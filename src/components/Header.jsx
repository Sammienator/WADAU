import React from 'react'

const Header = () => {
  return ( 
    <header className=" shadow-lg" >
  <div class="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
    <a href='#b' class="flex title-font font-medium items-center text-black mb-4 md:mb-0">
  
      <span class="ml-3 text-xl hover:text-[aqua] ">WADAU MUSIC</span>
    </a>
    <nav data-aos="fade-left" class="md:ml-auto flex flex-wrap items-center text-base justify-center">
      <a href class="mr-5 hover:text-[aqua]">Home.</a>
      <a href='#b' class="mr-5 hover:text-[aqua]">About Us.</a>
      <a href='#b' class="mr-5 hover:text-[aqua]">Our Team.</a>
    </nav>
    <button class="inline-flex items-center bg-black border-0 py-1 px-3 focus:outline-none hover:bg-[aqua] rounded text-white mt-4 md:mt-0">Our Music
      <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-4 h-4 ml-1" viewBox="0 0 24 24">
        <path d="M5 12h14M12 5l7 7-7 7"></path>
      </svg>
    </button>
  </div>
</header>
  )
}

export default Header