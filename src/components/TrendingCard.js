import React, { useContext } from 'react'
import MovieIcon from './assets/icon-category-movie.svg'
import TvIcon from './assets/icon-category-tv.svg'
import bookmarkEmpty from './assets/icon-bookmark-empty.svg'
import bookmarkFull from './assets/icon-bookmark-full.svg'
import playIcon from './assets/icon-play.svg'

import { showsContext } from '../contexts/showsContext'

const TrendingCard = ({
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

				<div className='card__imgContainer__play'>
					<div>
						<img
							src={playIcon}
							alt=''
							className='card__imgContainer__play__img'
						/>
						<p className='card__imgContainer__play__text'>Play</p>
					</div>
				</div>
			</div>

			<div
				onClick={() => handleBookmarks(show)}
				className='trendingCard__bookmark'
			>
				<img src={isBookmarked ? bookmarkFull : bookmarkEmpty} alt='' />
			</div>
			<div className='trendingCard__info'>
				<div className='trendingCard__info__flex'>
					<p>{year}</p>
					<div className='trendingCard__info__dot'></div>
					<div className='trendingCard__info__category'>
						<img src={category === 'Movie' ? MovieIcon : TvIcon} alt='' />
						<p>{category}</p>
					</div>
					<div className='trendingCard__info__dot'></div>
					<p className='trendingCard__rating'>{rating}</p>
				</div>
				<h3 className='trendingCard__info__header'>{title}</h3>
			</div>
		</div>
	)
}

export default TrendingCard
