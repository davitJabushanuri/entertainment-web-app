import React, { useState, useEffect } from 'react'

import Navbar from './components/Navbar'
import Trending from './components/Trending'
import './scss/main.scss'

import Database from './data.json'

function App() {
	const [shows, setShows] = useState(Database)
	const [movies, setMovies] = useState([])
	const [tvShows, setTvShows] = useState([])
	const [trending, setTrending] = useState([])
	const [bookmarks, setBookmarks] = useState([])

	console.log(shows)

	const sortShows = Database => {
		const moviesData = Database.filter(show => show.category === 'Movie')
		const tvShowsData = Database.filter(show => show.category === 'TV Series')
		const trendingData = Database.filter(show => show.isTrending === true)
		const bookmarksData = Database.filter(show => show.isBookmarked === true)
		setMovies(moviesData)
		setTvShows(tvShowsData)
		setTrending(trendingData)
		setBookmarks(bookmarksData)
	}

	useEffect(() => {
		sortShows(shows)
	}, [shows])

	return (
		<div className='App'>
			<Navbar />
			<Trending />
			{bookmarks.map(show => {
				return <p>{show.title}</p>
			})}
		</div>
	)
}

export default App
