import React from 'react'
import { useEffect, useRef, useState } from 'react';
import { apiService } from '../../services/ApiService';
import './ModalDeletePhoto.scss';

const CSS_MODAL_DEFAULT_VALUES = 'modal-common';
const CSS_MODAL_VISIBLE = `${CSS_MODAL_DEFAULT_VALUES} flex`;
const CSS_MODAL_HIDDEN = `${CSS_MODAL_DEFAULT_VALUES} hidden`;

function ModalDeletePhoto({ showModal, fnCloseModal, photo, fnGetPhotos }) {
	const [cssClasses, setCssClasses] = useState('');
	const [displayModal, setDisplayModal] = useState(false);

	const modalContainerRef = useRef();

	useEffect(() => {
		console.log(`📦 #useEffect() #displayModal ${displayModal}`);
		if (displayModal) { setCssClasses(CSS_MODAL_VISIBLE); }
		else { setCssClasses(CSS_MODAL_HIDDEN); }
	}, [displayModal])

	useEffect(() => {
		console.log(`📦 #useEffect() #showModal ${showModal}`);
		setDisplayModal(showModal);
	}, [showModal])


	console.log(`🚀 ModalDeletePhoto.init()`);

	function handleModalContainerClickEvent(e) {
		if (e.target === modalContainerRef.current) { handleBtnCancelEvent(e); }
	}

	function handleBtnCancelEvent(e) {
		e.preventDefault();
		seekCloseModal();
		console.log(`🔥 handleBtnCancelEvent()`);
	}

	function seekCloseModal() {
		fnCloseModal(true);
		setCssClasses(CSS_MODAL_HIDDEN);
		setDisplayModal(false);
	}

	function handleFormSubmitDeletePhoto(e) {
		e.preventDefault();

		console.log(`🚀 FormSubmit DELETE`);

		apiService.deletePhoto(photo.id);
		fnGetPhotos();
		seekCloseModal();
	}

	return (
		<div ref={modalContainerRef} className={cssClasses} onClick={handleModalContainerClickEvent}>
			<div className='bg-white py-8 px-4 mx-4 w-full rounded-lg sm:max-w-[620px] sm:px-8 flex flex-col gap-6'>
				<h2 className="font-['Noto_Sans'] font-medium text-xl sm:text-2xl text-[#333333]">Are you sure ?</h2>
				<form onSubmit={handleFormSubmitDeletePhoto} className="text-sm font-medium text-[#4f4f4f] font-['Noto_Sans'] flex flex-col gap-6" >

					<div className="flex flex-col gap-2">
						<label htmlFor="passwordUser">Password</label>
						<div className='p-2 flex border-[1px] border-[#bdbdbd] rounded-lg'>
							<input type="password" name="password-user" id="passwordUser" placeholder='************' />
						</div>
					</div>
					<div className="flex items-center justify-end gap-4 " >
						<button onClick={handleBtnCancelEvent} className='px-4 py-3  shadow font-medium text-[#BDBDBD] rounded-xl border-[1px] border-transparent hover:border-[#BDBDBD] transition-colors'>Cancel</button>
						<button className='px-4 py-3  shadow font-medium border-[1px] border-transparent bg-[#EB5757] text-white rounded-xl' type='submit'>Delete</button>
					</div>
				</form>
			</div>
		</div>
	)
}

export default ModalDeletePhoto;