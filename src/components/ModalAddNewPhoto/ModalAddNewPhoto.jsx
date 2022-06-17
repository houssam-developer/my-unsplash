import React from 'react'

import './ModalAddNewPhoto.scss';

function ModalAddNewPhoto() {
	return (
		<div className='modal-z-index absolute w-screen h-screen flex justify-center items-center'>
			<div className='bg-white py-8 px-4 mx-4 w-full rounded-lg sm:mx-auto sm:max-w-[620px] sm:px-8 flex flex-col gap-6'>
				<h2 className="font-['Noto_Sans'] font-medium text-xl sm:text-2xl text-[#333333]">Add new photo</h2>
				<form className="text-sm font-medium text-[#4f4f4f] font-['Noto_Sans'] flex flex-col gap-6" >
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
						<button className='px-4 py-3  shadow font-medium text-[#BDBDBD] rounded-xl border-[1px] border-transparent hover:border-[#BDBDBD] transition-colors'>Cancel</button>
						<button className='px-4 py-3  shadow font-medium border-[1px] border-transparent bg-[#3DB46D] text-white rounded-xl' type='submit'>Submit</button>
					</div>
				</form>
			</div>
		</div>
	)
}

export default ModalAddNewPhoto