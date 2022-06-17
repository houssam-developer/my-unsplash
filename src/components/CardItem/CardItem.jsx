import React from 'react'
import './CardItem.scss';

function CardItem({ idx, fnBtnDeletePhoto }) {
	const isCardTall = idx === 1 || idx === 4 || idx === 6;
	const cssClassesCard = isCardTall ? 'max-w-full card-tall' : 'max-w-full';
	const cssClassesContainerImage = isCardTall ? 'container-ratio card__image' : 'card__image';

	return (
		<li className={cssClassesCard}>
			<article className='card'>
				<div className={cssClassesContainerImage}>
					<img className=' rounded-2xl' src={`/stock-images/mystock-image-${idx}.jpg`} alt="" />
				</div>
				<div className='card__content'>
					<div className='card__content__container-btn'>
						<button onClick={(e) => fnBtnDeletePhoto(e, idx)} className='py-2 px-4 rounded-full border-[1px] border-[#EB5757] text-[#EB5757] font-medium text-xs'>delete</button>
					</div>
					<div className='card__content__container-description'>
						<p className='text-white font-bold text-lg'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae, adipisci.</p>
					</div>
				</div>
			</article>
		</li>
	);
}

export default CardItem