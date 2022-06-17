
import { useEffect, useRef, useState } from 'react';
import './App.scss';
import { MdPerson, MdSearch } from "react-icons/md";
import path from 'path';
import ModalAddNewPhoto from './components/ModalAddNewPhoto/ModalAddNewPhoto';
import ModalDeletePhoto from './components/ModalDeletePhoto/ModalDeletePhoto';
import CardItem from './components/CardItem/CardItem';

const ROOT_DOCUMENT = document.documentElement;

function App() {
	const [showModalAddNewPhotoFlag, setShowModalAddNewPhotoFlag] = useState(false);
	const [showModalDeletePhotoFlag, setShowModalDeletePhotoFlag] = useState(false);



	function handleBtnAddPhoto(e) {
		e.preventDefault();
		console.log(`🔥 handleBtnAddPhoto() `);
		setShowModalAddNewPhotoFlag(true);

		ROOT_DOCUMENT.style.setProperty('--full-page--brightness', '70%');
		ROOT_DOCUMENT.style.setProperty('--full-page--bg', '#bdbdbd');

	}

	return (
		<div className="px-2 py-4 w-full">
			{showModalAddNewPhotoFlag && <ModalAddNewPhoto />}
			{showModalDeletePhotoFlag && <ModalDeletePhoto />}
			<div className="w-full flex flex-col gap-14 full-page-filter">
				<header className="flex flex-wrap gap-4 md:gap-8 lg:gap-10 xl:gap-14 ">
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
					<button onClick={handleBtnAddPhoto} className='p-4 px-8 text-xs sm:text-base ml-auto rounded-xl shadow-lg text-white font-bold bg-[#3DB46D] '>Add a photo</button>
				</header>

				<main className=''>
					<ul className='container-masonry'>
						{[...Array(7).keys()].map(idx => <CardItem idx={idx} />)}
					</ul>
				</main>
			</div>
		</div>
	)
}

export default App;
