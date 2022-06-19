import React from 'react'
import { useEffect, useRef, useState } from 'react';
import { apiService } from '../../services/ApiService';
import './ModalAddNewPhoto.scss';

const CSS_MODAL_DEFAULT_VALUES = 'modal-common';
const CSS_MODAL_VISIBLE = `${CSS_MODAL_DEFAULT_VALUES} flex`;
const CSS_MODAL_HIDDEN = `${CSS_MODAL_DEFAULT_VALUES} hidden`;

function ModalAddNewPhoto({ showModal, fnCloseModal }) {
	const [cssClasses, setCssClasses] = useState('');
	const [displayModal, setDisplayModal] = useState(false);

	const modalContainerRef = useRef();
	const formAddNewPhotoRef = useRef();

	console.log(`🚀 ModalAddNewPhoto.init()`);

	function handleModalContainerClickEvent(e) {
		if (e.target === modalContainerRef.current) { handleBtnCancelEvent(e); }
		// else propagate to child (form) e.preventDefault stops the propagation
	}

	function handleBtnCancelEvent(e) {
		e.preventDefault();

		fnCloseModal(true);
		setCssClasses(CSS_MODAL_HIDDEN);
		setDisplayModal(false);

		console.log(`🔥 handleBtnCancelEvent()`);
	}

	useEffect(() => {
		console.log(`📦 #useEffect() #displayModal ${displayModal}`);
		if (displayModal) { setCssClasses(CSS_MODAL_VISIBLE); }
		else { setCssClasses(CSS_MODAL_HIDDEN); }
	}, [displayModal])

	useEffect(() => {
		console.log(`📦 #useEffect() #showModal ${showModal}`);
		setDisplayModal(showModal);
	}, [showModal])

	function handleFormAddNewPhotoEvent(e) {
		e.preventDefault();
		console.log('formAddNewPhoto', e);
		const formData = new FormData(formAddNewPhotoRef.current);

		let photoLabelArray;
		let photoUrlArray;
		Array.from(formData.entries()).forEach(it => {

			if (it[0] === 'photo-label') { photoLabelArray = it[1]; }
			else if (it[0] === 'photo-url') { photoUrlArray = it[1]; }
			else { }
		});

		const photo = {
			label: photoLabelArray ? photoLabelArray : 'empty',
			photoUrlArray: photoUrlArray ? photoUrlArray : 'empty'
		};

		console.log(`📦 #photo: `, photo);

		apiService.addNewPhoto(photo);
	}

	return (
		<div ref={modalContainerRef} onClick={handleModalContainerClickEvent} className={cssClasses}>
			<div className='bg-white p-8 rounded-lg min-w-[280px] sm:min-w-[500px] sm:max-w-[620px] sm:px-8 flex flex-col gap-6 '>
				<h2 className="font-['Noto_Sans'] font-medium text-xl sm:text-2xl text-[#333333]">Add new photo</h2>
				<form ref={formAddNewPhotoRef} onSubmit={handleFormAddNewPhotoEvent} className="text-sm font-medium text-[#4f4f4f] font-['Noto_Sans'] flex flex-col gap-6" >
					<div className="flex flex-col gap-2">
						<label htmlFor="photoLabel">Label</label>
						<div className='p-2 flex border-[1px] border-[#bdbdbd] rounded-lg'>
							<input type="text" name="photo-label" id="photoLabel" placeholder='Suspendisse elit massa' />
						</div>
					</div>
					<div className="flex flex-col gap-2">
						<label htmlFor="photoUrl">PhotoUrl</label>
						<div className='p-2 flex border-[1px] border-[#bdbdbd] rounded-lg'>
							<input type="text" name="photo-url" id="photoUrl" placeholder='Suspendisse elit massa' />
						</div>
					</div>
					<div className="flex items-center justify-end gap-4 " >
						<button onClick={handleBtnCancelEvent} className='px-4 py-3  shadow font-medium text-[#BDBDBD] rounded-xl border-[1px] border-transparent hover:border-[#BDBDBD] transition-colors'>Cancel</button>
						<button type="submit" className='px-4 py-3  shadow font-medium bg-[#3DB46D] text-white rounded-xl border-[1px] border-transparent hover:border-[#BDBDBD] transition-colors'>Submit</button>
					</div>
				</form>
			</div >
		</div >
	);
}

export default ModalAddNewPhoto