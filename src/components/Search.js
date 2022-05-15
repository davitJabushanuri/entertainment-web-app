import React, { useContext } from 'react'
import SearchIcon from './assets/icon-search.svg'

import { showsContext } from '../contexts/showsContext'

const Search = () => {
	const { handleChange, searchValue } = useContext(showsContext)
	return (
		<div className='search'>
			<img className='search__icon' src={SearchIcon} alt='' />

			<input
				value={searchValue}
				onChange={handleChange}
				on
				type='text'
				className='search__input'
				placeholder='Search for movies or TV series'
			/>
		</div>
	)
}

export default Search
