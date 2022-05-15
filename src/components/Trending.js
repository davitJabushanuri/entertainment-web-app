import React, { useContext } from 'react'
import { showsContext } from '../contexts/showsContext'
import TrendingCard from './TrendingCard'

const Trending = () => {
	const { trending } = useContext(showsContext)

	return (
		<section className='trending'>
			<h2 className='trending__header'>Trending</h2>
			<div className='trending__movies'>
				{trending.map(show => {
					return (
						<TrendingCard
							key={show.title}
							title={show.title}
							year={show.year}
							category={show.category}
							rating={show.rating}
							isBookmarked={show.isBookmarked}
							imgSrc={show.thumbnail.trending.small}
							show={show}
						/>
					)
				})}
			</div>
		</section>
	)
}

export default Trending
