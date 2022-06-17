import React from 'react'

import './ModalDeletePhoto.scss';

function ModalDeletePhoto() {
	return (
		<div className='modal-z-index absolute w-screen h-screen flex justify-center items-center'>
			<div className='bg-white py-8 px-4 mx-4 w-full rounded-lg sm:mx-auto sm:max-w-[620px] sm:px-8 flex flex-col gap-6'>
				<h2 className="font-['Noto_Sans'] font-medium text-xl sm:text-2xl text-[#333333]">Are you sure ?</h2>
				<form className="text-sm font-medium text-[#4f4f4f] font-['Noto_Sans'] flex flex-col gap-6" >

					<div className="flex flex-col gap-2">
						<label htmlFor="passwordUser">Password</label>
						<div className='p-2 flex border-[1px] border-[#bdbdbd] rounded-lg'>
							<input type="password" name="password-user" id="passwordUser" placeholder='************' />
						</div>
					</div>
					<div className="flex items-center justify-end gap-4 " >
						<button className='px-4 py-3  shadow font-medium text-[#BDBDBD] rounded-xl border-[1px] border-transparent hover:border-[#BDBDBD] transition-colors'>Cancel</button>
						<button className='px-4 py-3  shadow font-medium border-[1px] border-transparent bg-[#EB5757] text-white rounded-xl' type='submit'>Delete</button>
					</div>
				</form>
			</div>
		</div>
	)
}

export default ModalDeletePhoto;