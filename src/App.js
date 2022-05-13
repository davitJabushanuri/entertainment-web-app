import React, { useState, useEffect } from 'react'

import Navbar from './components/Navbar'
import Trending from './components/Trending'
import './scss/main.scss'

import Database from './data.json'

function App() {
	const [shows, setShows] = useState(Database)
	const [movies, setMovies] = useState([])
	const [tvShows, setTvShows] = useState([])

	const getMovies = Database => {
		const moviesData = Database.filter(show => show.category === 'Movie')
		const tvShowsData = Database.filter(show => show.category === 'TV Series')
		setMovies(moviesData)
		setTvShows(tvShowsData)
	}

	useEffect(() => {
		getMovies(Database)
	}, [])

	return (
		<div className='App'>
			<Navbar />
			<Trending />
			{tvShows.map(show => {
				return <p>{show.title}</p>
			})}
		</div>
	)
}

export default App
