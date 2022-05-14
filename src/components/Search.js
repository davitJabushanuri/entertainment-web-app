import React from 'react'
import SearchIcon from './assets/icon-search.svg'

const Search = () => {
	return (
		<div className='search'>
			<img className='search__icon' src={SearchIcon} alt='' />

			<input
				type='text'
				className='search__input'
				placeholder='Search for movies or TV series'
			/>
		</div>
	)
}

export default Search
