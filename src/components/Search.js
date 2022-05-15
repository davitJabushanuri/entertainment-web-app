import React, { useContext } from 'react'
import SearchIcon from './assets/icon-search.svg'

import { showsContext } from '../contexts/showsContext'

const Search = ({ placeholder }) => {
	const { searchValue, setSearchValue } = useContext(showsContext)
	return (
		<div className='search'>
			<img className='search__icon' src={SearchIcon} alt='' />

			<input
				value={searchValue}
				onChange={e => setSearchValue(e.target.value)}
				on
				type='text'
				className='search__input'
				placeholder={placeholder}
			/>
		</div>
	)
}

export default Search
