import React from 'react'
import MovieIcon from './assets/icon-category-movie.svg'
import TvIcon from './assets/icon-category-tv.svg'
import bookmarkEmpty from './assets/icon-bookmark-empty.svg'
import bookmarkFull from './assets/icon-bookmark-full.svg'

const TrendingCard = ({
	title,
	year,
	rating,
	category,
	isBookmarked,
	imgSrc,
}) => {
	return (
		<div
			// style={{
			// 	backgroundImage: `url(${require('' + imgSrc)})`,
			// }}
			className='trendingCard'
		>
			<div className='trendingCard__imgContainer'>
				<img
					className='trendingCard__imgContainer__image'
					src={require('' + imgSrc)}
					alt=''
				/>
			</div>

			<div className='trendingCard__bookmark'>
				<img src={isBookmarked ? bookmarkFull : bookmarkEmpty} alt='' />
			</div>
			<div className='trendingCard__info'>
				<p>{year}</p>
				<div className='trendingCard__info__dot'></div>
				<div className='trendingCard__info__category'>
					<img src={category === 'Movie' ? MovieIcon : TvIcon} alt='' />
					<p>{category}</p>
				</div>
				<div className='trendingCard__info__dot'></div>
				<p className='trendingCard__rating'>{rating}</p>
			</div>
			<h3 className='trendingCard__header'>{title}</h3>
		</div>
	)
}

export default TrendingCard
