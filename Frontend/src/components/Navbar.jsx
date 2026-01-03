import React from 'react'
const Navbar = ({ setSearch }) => {

  return (
    <nav className='bg-[#FB923C] p-5 flex justify-between items-center'>
      <div className='text-center text-5xl main-font font-bold text-[#431407]'>
        TICKLY
      </div>
      <div className="search">
        <input type="text"
          className='outline-none  p-1 py-2 px-3 rounded-full border-none focus:outline-none focus:ring-0'
          placeholder='search...'
          onChange={(e) => setSearch && setSearch(e.target.value)} />

      </div>
    </nav>
  )
}

export default Navbar