import React, { useContext } from 'react'
import Navbar from '../components/Navbar'
import Recommended from '../components/Recommended'
import Search from '../components/Search'

import { showsContext } from '../contexts/showsContext'

const TVSeries = () => {
	const { tvShows } = useContext(showsContext)
	return (
		<div className='tvseries'>
			<Navbar />
			<Search />
			<Recommended shows={tvShows} title='TV Series' />
		</div>
	)
}

export default TVSeries
