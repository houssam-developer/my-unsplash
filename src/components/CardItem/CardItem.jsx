import React from 'react'
import './CardItem.scss';

function CardItem({ photo = {}, fnBtnDeletePhoto }) {

	return (
		<li className='max-w-full'>
			<article className='card'>
				<div className='card__container-image'>
					<img className='card__container-image__image' src={photo.url} alt="" />
				</div>
				<div className='card__content'>
					<div className='card__content__container-btn'>
						<button onClick={(e) => fnBtnDeletePhoto(e, photo)} className='py-2 px-4 rounded-full border-[1px] border-[#EB5757] text-[#EB5757] font-medium text-xs'>delete</button>
					</div>
					<div className='card__content__container-description'>
						<p className='text-white font-bold text-lg'>{photo.label}</p>
					</div>
				</div>
			</article>
		</li>
	);
}

export default CardItem;