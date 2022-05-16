import React, { useContext } from 'react'
import Navbar from '../components/Navbar'
import Recommended from '../components/Recommended'
import Search from '../components/Search'
import FilteredShows from '../components/FilteredShows'

import { showsContext } from '../contexts/showsContext'

const TVSeries = () => {
	const { tvShows, searchValue } = useContext(showsContext)
	return (
		<div className='tvseries'>
			<Navbar />
			<Search placeholder='Search for TV series' />
			{searchValue.length > 0 ? (
				<FilteredShows shows={tvShows} title='Recommended For You' />
			) : (
				<Recommended shows={tvShows} title='TV Series' />
			)}
		</div>
	)
}

export default TVSeries
