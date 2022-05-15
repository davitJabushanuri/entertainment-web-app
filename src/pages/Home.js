import React, { useContext } from 'react'
import Navbar from '../components/Navbar'
import Search from '../components/Search'
import Trending from '../components/Trending'
import Recommended from '../components/Recommended'
import { showsContext } from '../contexts/showsContext'

const Home = () => {
	const { shows } = useContext(showsContext)
	return (
		<div className='home'>
			<Navbar />
			<Search placeholder='Search for movies or TV series' />
			<Trending />
			<Recommended shows={shows} title='Recommended For You' />
		</div>
	)
}

export default Home
