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
			<Search placeholder='Search for bookmarked shows' />
			{bookmarkedMovies.length > 0 && (
				<Recommended shows={bookmarkedMovies} title='Bookmarked Movies' />
			)}
			{bookmarkedTVSeries.length > 0 && (
				<Recommended shows={bookmarkedTVSeries} title='Bookmarked TV Series' />
			)}
		</div>
	)
}

export default Bookmarks
