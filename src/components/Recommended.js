import React from 'react'

import Card from './Card'

const Recommended = ({ shows, title }) => {
	return (
		<section className='recommended'>
			<h2 className='recommended__header'>{title}</h2>
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
							show={show}
						/>
					)
				})}
			</div>
		</section>
	)
}

export default Recommended
