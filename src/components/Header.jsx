import React from 'react'

const Header = () => {
  return (
    <header class="text-gray-400 bg-gray-900 body-font">
  <div class="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
    <a href='#b' class="flex title-font font-medium items-center text-white mb-4 md:mb-0">
  
      <span class="ml-3 text-xl">Tailblocks</span>
    </a>
    <nav class="md:ml-auto flex flex-wrap items-center text-base justify-center">
      <a href class="mr-5 hover:text-white">First Link</a>
      <a href='#b' class="mr-5 hover:text-white">Second Link</a>
      <a href='#b' class="mr-5 hover:text-white">Third Link</a>
      <a href='#b' class="mr-5 hover:text-white">Fourth Link</a>
    </nav>
    <button class="inline-flex items-center bg-gray-800 border-0 py-1 px-3 focus:outline-none hover:bg-gray-700 rounded text-base mt-4 md:mt-0">Button
      <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-4 h-4 ml-1" viewBox="0 0 24 24">
        <path d="M5 12h14M12 5l7 7-7 7"></path>
      </svg>
    </button>
  </div>
</header>
  )
}

export default Header