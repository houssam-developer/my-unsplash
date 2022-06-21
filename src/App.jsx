
import { useEffect, useRef, useState } from 'react';
import './App.scss';
import { MdPerson, MdSearch, MdSync } from "react-icons/md";
import path from 'path';
import ModalAddNewPhoto from './components/ModalAddNewPhoto/ModalAddNewPhoto';
import ModalDeletePhoto from './components/ModalDeletePhoto/ModalDeletePhoto';
import CardItem from './components/CardItem/CardItem';
import { v4 as uuidv4 } from 'uuid';
import { apiService } from './services/ApiService';


const ROOT_DOCUMENT = document.documentElement;

function App() {
	const [showModalAddNewPhotoFlag, setShowModalAddNewPhotoFlag] = useState(false);
	const [showModalDeletePhotoFlag, setShowModalDeletePhotoFlag] = useState(false);
	const [photos, setPhotos] = useState([]);
	const [targetPhotoToDelete, setTargetPhotoToDelete] = useState({});

	//console.log(`🚀 App.init()`);

	useEffect(() => {
		getPhotos();
	}, []);

	function getPhotos() {
		apiService.findAll()
			.then(res => {
				//console.log(`📡 data.photos: `, res.data.photos);
				setPhotos(res.data.photos);
			})
			.catch(err => console.log(`🚩 findAll() #err: `, err))
	}

	function handleBtnAddNewPhoto(e) {
		e.preventDefault();
		console.log(`🔥 handleBtnAddNewPhoto() `);
		setShowModalDeletePhotoFlag(false);
		setShowModalAddNewPhotoFlag(true);

		updateCssVariablesOnOpenModal();
	}

	function handleBtnDeletePhoto(e, photo) {
		e.preventDefault();
		console.log(`🔥 handleBtnDeletePhoto() `);

		setTargetPhotoToDelete(photo);
		setShowModalAddNewPhotoFlag(false);
		setShowModalDeletePhotoFlag(true);

		updateCssVariablesOnOpenModal();
	}

	function updateCssVariablesOnOpenModal() {
		ROOT_DOCUMENT.style.setProperty('--full-page--brightness', '70%');
		ROOT_DOCUMENT.style.setProperty('--full-page--bg', '#bdbdbd');
	}

	function updateCssVariablesOnCloseModal() {
		ROOT_DOCUMENT.style.setProperty('--full-page--brightness', '100%');
		ROOT_DOCUMENT.style.setProperty('--full-page--bg', '#fff');
		setTargetPhotoToDelete({});
	}

	function closeModal(closeModalFlag) {
		console.log(`🔥 closeModal() #innerFlag: ${closeModalFlag}`);
		if (closeModalFlag) { updateCssVariablesOnCloseModal(); }
		setShowModalAddNewPhotoFlag(false);
		setShowModalDeletePhotoFlag(false);
	}

	function handleFormSubmitSearch(e) {
		e.preventDefault();
		console.log(`🔥 handleFormSubmitSearch() `);
		const formData = new FormData(e.target);
		const searchInputArray = Array.from(formData.entries())
			.filter(it => it[0] === 'search-keyword')
			.map(it => [`${it[0]}`, `${it[1]}`]);

		const [searchInputKey, searchInputValue] = searchInputArray[0]; // array in array get the first one

		console.log(`📡 #key: ${searchInputKey} #value: ${searchInputValue} `);

		apiService.findByKeyword(searchInputValue)
			.then(res => {
				const photosVal = res.data.photos || [];
				setPhotos(photosVal)
				console.log(`👍 ok #photosVal: `, photosVal);
			})
			.catch(err => console.log(`🚫 handleFormSubmitSeach() #err: `, err));
	}

	return (
		<div className="">
			<ModalAddNewPhoto key={showModalAddNewPhotoFlag} showModal={showModalAddNewPhotoFlag} fnCloseModal={closeModal} fnGetPhotos={getPhotos} />
			<ModalDeletePhoto key={showModalDeletePhotoFlag} showModal={showModalDeletePhotoFlag} fnCloseModal={closeModal} photo={targetPhotoToDelete} fnGetPhotos={getPhotos} />
			<div className="px-2 py-2 sm:py-8 w-full flex flex-col gap-14 full-page-filter">
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
					<form onSubmit={handleFormSubmitSearch} className="container-input" >
						<MdSearch className='min-w-[30px]' size={20} />
						<input type="text" placeholder='Search by name' name='search-keyword' />
					</form>

					{/* Button */}
					<button onClick={handleBtnAddNewPhoto} className='p-4 px-8 text-xs sm:text-base ml-auto rounded-xl shadow-lg text-white font-bold bg-[#3DB46D] '>Add a photo</button>
				</header>

				<main className=''>
					<ul className='container-masonry'>
						{
							photos.length > 0 ?
								photos.map(it => <CardItem key={it.id} photo={it} fnBtnDeletePhoto={handleBtnDeletePhoto} />)
								:
								<img className='max-w-[250px] mx-auto' src="./images/no-image-available.png" alt="picture of no available image" />
						}
					</ul>
				</main>

				<footer className='flex justify-center'>
					<p className="text-center text-[#444] p-4 ">created by <span className='font-medium text-[#111]'>houssam-developer</span> - devChallenges.io</p>
				</footer>
			</div>
		</div>
	)
}

export default App;
