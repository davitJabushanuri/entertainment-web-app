import React from 'react'
import Navbar from '../components/Navbar'
import Trending from '../components/Trending'
import Search from '../components/Search'

const Home = () => {
	return (
		<div className='home'>
			<Navbar />
			<Search />
			<Trending />
		</div>
	)
}

export default Home
