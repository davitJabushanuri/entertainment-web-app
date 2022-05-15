import React, { useContext } from 'react'
import Navbar from '../components/Navbar'
import Recommended from '../components/Recommended'
import Search from '../components/Search'

import { showsContext } from '../contexts/showsContext'

const Movies = () => {
	const { movies } = useContext(showsContext)
	return (
		<div className='movies'>
			<Navbar />
			<Search placeholder='Search for movies' />
			{movies.length > 0 && <Recommended shows={movies} title='Movies' />}
		</div>
	)
}

export default Movies
