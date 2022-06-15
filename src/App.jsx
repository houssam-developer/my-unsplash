
import { useEffect, useRef, useState } from 'react';
import './App.scss';
import { MdPerson, MdSearch } from "react-icons/md";


function App() {

	return (
		<div className="p-4 w-full">
			<header className="flex flex-wrap gap-4 md:gap-8 lg:gap-10 xl:gap-14" >
				{/* User */}
				<div className="p-1 flex items-center gap-2 self-start" >
					<MdPerson size={30} />
					<div className="flex flex-col" >
						<h1 className="text-xs sm:text-md md:text-base font-extrabold text-[#333333]" >My Unsplash</h1>
						<p className='text-[9px] sm:text-xs font-medium text-[#333333]'>devchellenges.io</p>
					</div>
				</div>

				{/* Search */}
				<div className="container-input" >
					<MdSearch size={20} />
					<input type="text" placeholder='Search by name' />
				</div>

				{/* Button */}
				<button className='py-4 px-5 text-xs sm:text-base ml-auto rounded-xl text-white font-bold bg-[#3DB46D] '>Add a photo</button>
			</header>
		</div>
	)
}

export default App;
