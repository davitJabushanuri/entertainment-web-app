import React from 'react'
import MovieIcon from './assets/icon-category-movie.svg'
import TvIcon from './assets/icon-category-tv.svg'
import bookmarkEmpty from './assets/icon-bookmark-empty.svg'
import bookmarkFull from './assets/icon-bookmark-full.svg'

const Card = ({ title, year, rating, category, isBookmarked, imgSrc }) => {
	console.log(imgSrc)
	return (
		<div
			// style={{
			// 	backgroundImage: `url(${require('' + imgSrc)})`,
			// }}
			className='card'
		>
			<div className='card__imgContainer'>
				<img
					className='card__imgContainer__image'
					src={require('' + imgSrc)}
					alt=''
				/>
			</div>

			<div className='card__bookmark'>
				<img src={isBookmarked ? bookmarkFull : bookmarkEmpty} alt='' />
			</div>
			<div className='card__info'>
				<p>{year}</p>
				<div className='card__info__dot'></div>
				<div className='card__info__category'>
					<img src={category === 'Movie' ? MovieIcon : TvIcon} alt='' />
					<p>{category}</p>
				</div>
				<div className='card__info__dot'></div>
				<p className='card__rating'>{rating}</p>
			</div>
			<h3 className='card__header'>{title}</h3>
		</div>
	)
}

export default Card
