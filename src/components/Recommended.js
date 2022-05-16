import React from 'react'
import Card from './Card'

const Recommended = ({ shows, title }) => {
	return (
		<section className='recommended'>
			<h2 className='recommended__header'>{title}</h2>
			<div className='recommended__movies'>
				{shows.map((show, key) => {
					return (
						<Card
							key={key}
							title={show.title}
							year={show.year}
							category={show.category}
							rating={show.rating}
							isBookmarked={show.isBookmarked}
							imgSrc={
								window.innerWidth < 768
									? show.thumbnail.regular.small
									: show.thumbnail.regular.large
							}
							show={show}
						/>
					)
				})}
			</div>
		</section>
	)
}

export default Recommended
