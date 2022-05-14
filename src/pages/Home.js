import React from 'react'
import Navbar from '../components/Navbar'
import Search from '../components/Search'
import Trending from '../components/Trending'
import Recommended from '../components/Recommended'

const Home = () => {
	return (
		<div className='home'>
			<Navbar />
			<Search />
			<Trending />
			<Recommended />
		</div>
	)
}

export default Home
