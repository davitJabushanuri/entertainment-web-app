import React, { useState, useEffect } from 'react'

import { showsContext } from './contexts/showsContext'

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

	const sortShows = shows => {
		const moviesData = shows.filter(show => show.category === 'Movie')
		const tvShowsData = shows.filter(show => show.category === 'TV Series')
		const trendingData = shows.filter(show => show.isTrending === true)
		const bookmarksData = shows.filter(show => show.isBookmarked === true)
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
			<showsContext.Provider
				value={{ shows, movies, tvShows, trending, bookmarks, setBookmarks }}
			>
				<Navbar />
				<Trending />
			</showsContext.Provider>
		</div>
	)
}

export default App
