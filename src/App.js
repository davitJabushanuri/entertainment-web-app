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
	const [bookmarkedMovies, setBookmarkedMovies] = useState([])
	const [bookmarkedTVSeries, setBookmarkedTVSeries] = useState([])
	const [searchValue, setSearchValue] = useState('')

	const sortShows = shows => {
		const moviesData = shows.filter(show => show.category === 'Movie')
		const tvShowsData = shows.filter(show => show.category === 'TV Series')
		const trendingData = shows.filter(show => show.isTrending === true)
		const bookmarkedMovies = shows.filter(
			show => show.isBookmarked === true && show.category === 'Movie'
		)
		const bookmarkedTVSeries = shows.filter(
			show => show.isBookmarked === true && show.category === 'TV Series'
		)
		setMovies(moviesData)
		setTvShows(tvShowsData)
		setTrending(trendingData)
		setBookmarkedMovies(bookmarkedMovies)
		setBookmarkedTVSeries(bookmarkedTVSeries)
	}

	const handleBookmarks = show => {
		if (show.isBookmarked) {
			const title = show.title
			if (show.category === 'Movie') {
				setBookmarkedMovies(arr => arr.filter(movie => movie.title !== title))

				show.isBookmarked = false
			}
			if (show.category === 'TV Series') {
				setBookmarkedTVSeries(arr =>
					arr.filter(tvseries => tvseries.title !== title)
				)
				show.isBookmarked = false
			}
			return
		}
		if (show.category === 'Movie') {
			setBookmarkedMovies(bookmarks => [...bookmarks, show])
			show.isBookmarked = true
		}
		if (show.category === 'TV Series') {
			setBookmarkedTVSeries(bookmarks => [...bookmarks, show])
			show.isBookmarked = true
		}
	}

	useEffect(() => {
		sortShows(shows)
	}, [shows])

	return (
		<div className='App'>
			<showsContext.Provider
				value={{
					shows,
					movies,
					tvShows,
					trending,
					bookmarkedMovies,
					bookmarkedTVSeries,
					searchValue,
					setBookmarkedMovies,
					setBookmarkedTVSeries,
					handleBookmarks,
					setSearchValue,
				}}
			>
				<Routes>
					<Route path='' element={<Home />} />
					<Route path='/movies' element={<Movies />} />
					<Route path='/tvseries' element={<TVSeries />} />
					<Route path='/bookmarks' element={<Bookmarks />} />
				</Routes>
			</showsContext.Provider>
		</div>
	)
}

export default App
