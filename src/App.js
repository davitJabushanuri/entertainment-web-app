import React, { useState, useEffect } from 'react'
import { showsContext } from './contexts/showsContext'
import { Routes, Route } from 'react-router-dom'

import Home from './pages/Home'
import Movies from './pages/Movies'
import TVSeries from './pages/TVSeries'
import Bookmarks from './pages/Bookmarks'

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
				<Routes>
					<Route path='/' element={<Home />} />
					<Route path='/movies' element={<Movies />} />
					<Route path='/tvseries' element={<TVSeries />} />
					<Route path='/bookmarks' element={<Bookmarks />} />
				</Routes>
			</showsContext.Provider>
		</div>
	)
}

export default App
