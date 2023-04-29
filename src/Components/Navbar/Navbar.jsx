import React from 'react';
import search from '../../Assets/Search.png';

const Navbar = () => {
    return (
        <div className='relative w-full flex justify-center gap-3 items-center mb-10'>
            <button className='border p-2 rounded border-slate-300 bg-BackWhite'>Table & Map</button>
            <button className='border p-2 rounded border-slate-300 bg-BackWhite'>Filter</button>
            <div className="flex items-center w-4/12 relative">
                <img className='absolute p-1 cursor-pointer' src={search} alt="search" />
                <input className='h-10 pl-8 w-full rounded outline-0' type="search" placeholder='search' />
                <button className='border p-2 rounded bg-Gray'>Search</button> 
            </div>
        </div>
    );
}

export default Navbar;
