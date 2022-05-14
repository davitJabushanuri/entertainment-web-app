import React, { useContext } from 'react'
import MovieIcon from './assets/icon-category-movie.svg'
import TvIcon from './assets/icon-category-tv.svg'
import bookmarkEmpty from './assets/icon-bookmark-empty.svg'
import bookmarkFull from './assets/icon-bookmark-full.svg'

import { showsContext } from '../contexts/showsContext'

const Card = ({
	title,
	year,
	rating,
	category,
	isBookmarked,
	imgSrc,
	show,
}) => {
	const { handleBookmarks } = useContext(showsContext)

	return (
		<div className='card'>
			<div className='card__imgContainer'>
				<img
					src={require('' + imgSrc)}
					alt=''
					className='card__imgContainer__image'
				/>
			</div>

			<div onClick={() => handleBookmarks(show)} className='card__bookmark'>
				<img
					className='card__bookmark__icon'
					src={isBookmarked ? bookmarkFull : bookmarkEmpty}
					alt=''
				/>
			</div>

			<div className='card__info'>
				<p className='card__info__year'>{year}</p>
				<div className='card__info__dot'></div>
				<div className='card__info__category'>
					<img src={category === 'Movie' ? MovieIcon : TvIcon} alt='' />
					<p className='card__info__category__paragraph'>{category}</p>
				</div>
				<div className='card__info__dot'></div>
				<p className='card__rating'>{rating}</p>
			</div>
			<h3 className='card__title'>{title}</h3>
		</div>
	)
}

export default Card
