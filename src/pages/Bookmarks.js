import React, { useContext } from 'react'
import Navbar from '../components/Navbar'
import Recommended from '../components/Recommended'
import Search from '../components/Search'

import { showsContext } from '../contexts/showsContext'

const Bookmarks = () => {
	const { bookmarkedMovies, bookmarkedTVSeries } = useContext(showsContext)
	return (
		<div className='bookmarks'>
			<Navbar />
			<Search />
			<Recommended shows={bookmarkedMovies} title='Bookmarked Movies' />
			<Recommended shows={bookmarkedTVSeries} title='Bookmarked TV Series' />
		</div>
	)
}

export default Bookmarks
