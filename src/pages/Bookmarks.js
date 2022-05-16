import React, { useContext } from 'react'
import Navbar from '../components/Navbar'
import Recommended from '../components/Recommended'
import Search from '../components/Search'
import FilteredShows from '../components/FilteredShows'

import { showsContext } from '../contexts/showsContext'

const Bookmarks = () => {
	const { bookmarkedMovies, bookmarkedTVSeries, searchValue } =
		useContext(showsContext)
	return (
		<div className='bookmarks'>
			<Navbar />
			<Search placeholder='Search for bookmarked shows' />
			{searchValue.length > 0 ? (
				<FilteredShows
					shows={[...bookmarkedMovies, ...bookmarkedTVSeries]}
					title='Recommended For You'
				/>
			) : (
				<>
					{bookmarkedMovies.length > 0 && (
						<Recommended shows={bookmarkedMovies} title='Bookmarked Movies' />
					)}
					{bookmarkedTVSeries.length > 0 && (
						<Recommended
							shows={bookmarkedTVSeries}
							title='Bookmarked TV Series'
						/>
					)}
				</>
			)}
		</div>
	)
}

export default Bookmarks
