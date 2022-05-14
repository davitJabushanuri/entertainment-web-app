import React, { useContext } from 'react'
import { showsContext } from '../contexts/showsContext'
import Card from './Card'

const Recommended = () => {
	const { shows } = useContext(showsContext)
	return (
		<section className='recommended'>
			<h2 className='recommended__header'>Recommended For You</h2>
			<div className='recommended__movies'>
				{shows.map(show => {
					return (
						<Card
							key={show.title}
							title={show.title}
							year={show.year}
							category={show.category}
							rating={show.rating}
							isBookmarked={show.isBookmarked}
							imgSrc={show.thumbnail.regular.small}
						/>
					)
				})}
			</div>
		</section>
	)
}

export default Recommended
