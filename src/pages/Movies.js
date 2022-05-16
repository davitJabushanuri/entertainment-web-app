import React, { useContext } from 'react'
import Navbar from '../components/Navbar'
import Recommended from '../components/Recommended'
import Search from '../components/Search'
import FilteredShows from '../components/FilteredShows'

import { showsContext } from '../contexts/showsContext'

const Movies = () => {
	const { movies, searchValue } = useContext(showsContext)
	return (
		<div className='movies'>
			<Navbar />
			<Search placeholder='Search for movies' />
			{searchValue.length > 0 ? (
				<FilteredShows shows={movies} title='Recommended For You' />
			) : (
				<Recommended shows={movies} title='Movies' />
			)}
		</div>
	)
}

export default Movies
