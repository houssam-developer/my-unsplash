
import { useEffect, useRef, useState } from 'react';
import './App.scss';
import { MdPerson, MdSearch } from "react-icons/md";
import path from 'path';


function App() {

	return (
		<div className="p-3 w-full flex flex-col gap-14">
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
				<button className='p-4 px-8 text-xs sm:text-base ml-auto rounded-xl text-white font-bold bg-[#3DB46D] '>Add a photo</button>
			</header>

			<main>
				<ul className='container-masonry'>
					{[...Array(7).keys()].map((it, idx) =>
						idx === 1 || idx === 6 ?
							<li className='max-w-full card-tall'>
								<img className=' max-w-full  rounded-2xl' src={`/stock-images/mystock-image-${it}.jpg`} alt="" srcset="" />
							</li>
							:
							<li className='max-w-full max-h-[280px]'>
								<img className=' rounded-2xl' src={`/stock-images/mystock-image-${it}.jpg`} alt="" srcset="" />
							</li>
					)}
				</ul>
			</main>
		</div>
	)
}

export default App;
