import React, { useState, useContext, useEffect } from 'react'
import Card from './Card'

import { showsContext } from '../contexts/showsContext'

const FilteredShows = ({ shows }) => {
	const [filteredShows, setFilteredShows] = useState([])
	const { searchValue } = useContext(showsContext)

	const handleFilterShows = () => {
		if (searchValue)
			setFilteredShows(
				shows.filter(show =>
					show.title.toLowerCase().includes(searchValue.toLowerCase())
				)
			)
	}

	useEffect(() => {
		handleFilterShows()
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [searchValue])

	return (
		<section className='recommended'>
			<h2 className='recommended__header'>{`Found ${filteredShows.length} results for '${searchValue}'`}</h2>
			<div className='recommended__movies'>
				{filteredShows.map((show, key) => {
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

export default FilteredShows
