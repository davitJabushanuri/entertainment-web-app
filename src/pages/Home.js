import React, { useContext } from 'react'
import Navbar from '../components/Navbar'
import Search from '../components/Search'
import Trending from '../components/Trending'
import Recommended from '../components/Recommended'
import { showsContext } from '../contexts/showsContext'
import FilteredShows from '../components/FilteredShows'

const Home = () => {
	const { shows, searchValue } = useContext(showsContext)
	return (
		<div className='home'>
			<Navbar />
			<Search placeholder='Search for movies or TV series' />
			{searchValue.length > 0 ? (
				<FilteredShows shows={shows} title='Recommended For You' />
			) : (
				<>
					<Trending />
					<Recommended shows={shows} title='Recommended For You' />
				</>
			)}
		</div>
	)
}

export default Home
