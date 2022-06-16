
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
				<button className='p-4 px-8 text-xs sm:text-base ml-auto rounded-xl shadow-lg text-white font-bold bg-[#3DB46D] '>Add a photo</button>
			</header>

			<main>
				<ul className='container-masonry'>
					{[...Array(7).keys()].map(idx => <CardItem idx={idx} />)}
				</ul>
			</main>
		</div>
	)

	function CardItem({ idx }) {
		const isCardTall = idx === 1 || idx === 4 || idx === 6;
		const cssClassesCard = isCardTall ? 'max-w-full card-tall' : 'max-w-full';
		const cssClassesContainerImage = isCardTall ? 'container-ratio card__image' : 'card__image';

		return (
			<li className={cssClassesCard}>
				<article className='card'>
					<div className={cssClassesContainerImage}>
						<img className=' rounded-2xl' src={`/stock-images/mystock-image-${idx}.jpg`} alt="" srcset="" />
					</div>
					<div className='card__content'>
						<div className='card__content__container-btn'>
							<button className='py-2 px-4 rounded-full border-[1px] border-[#EB5757] text-[#EB5757] font-medium text-xs'>delete</button>
						</div>
						<div className='card__content__container-description'>
							<p className='text-white font-bold text-lg'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae, adipisci.</p>
						</div>
					</div>
				</article>
			</li>
		);
	}

}

export default App;
