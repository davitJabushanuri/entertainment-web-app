import React, { useContext } from 'react'
import Logo from './assets/logo.svg'
import HomeIcon from './assets/icon-nav-home.svg'
import MoviesIcon from './assets/icon-nav-movies.svg'
import TVseriesIcon from './assets/icon-nav-tv-series.svg'
import BookmarksIcon from './assets/icon-nav-bookmark.svg'
import UserIcon from './assets/image-avatar.png'

import { NavLink } from 'react-router-dom'

import { useLocation } from 'react-router-dom'

import { showsContext } from '../contexts/showsContext'

const Navbar = () => {
	const location = useLocation()

	//destructuring pathname from location
	const { pathname } = location

	//Javascript split method to get the name of the path in array
	const splitLocation = pathname.split('/')

	const { setSearchValue } = useContext(showsContext)
	return (
		<section className='navbarContainer'>
			<nav className='navbar'>
				<div className='navbar__logo'>
					<NavLink onClick={() => setSearchValue('')} to='/'>
						<img src={Logo} alt='' />
					</NavLink>
				</div>
				<ul className='navbar__links'>
					<li className='navbar__links__link'>
						<NavLink
							style={({ isActive }) =>
								isActive
									? {
											filter:
												'invert(99%) sepia(91%) saturate(2%) hue-rotate(167deg) brightness(152%) contrast(100%)',
									  }
									: {}
							}
							onClick={() => setSearchValue('')}
							to='/'
						>
							<img className='listIcon' src={HomeIcon} alt='' />
						</NavLink>
					</li>
					<li className='navbar__links__link'>
						<NavLink
							style={({ isActive }) =>
								isActive
									? {
											filter:
												'invert(99%) sepia(91%) saturate(2%) hue-rotate(167deg) brightness(152%) contrast(100%)',
									  }
									: {}
							}
							onClick={() => setSearchValue('')}
							to='/movies'
						>
							<img className='listIcon' src={MoviesIcon} alt='' />
						</NavLink>
					</li>
					<li className='navbar__links__link'>
						<NavLink
							style={({ isActive }) =>
								isActive
									? {
											filter:
												'invert(99%) sepia(91%) saturate(2%) hue-rotate(167deg) brightness(152%) contrast(100%)',
									  }
									: {}
							}
							onClick={() => setSearchValue('')}
							to='/tvseries'
						>
							<img className='listIcon' src={TVseriesIcon} alt='' />
						</NavLink>
					</li>
					<li className='navbar__links__link'>
						<NavLink
							style={({ isActive }) =>
								isActive
									? {
											filter:
												'invert(99%) sepia(91%) saturate(2%) hue-rotate(167deg) brightness(152%) contrast(100%)',
									  }
									: {}
							}
							onClick={() => setSearchValue('')}
							to='/bookmarks'
						>
							<img className='listIcon' src={BookmarksIcon} alt='' />
						</NavLink>
					</li>
				</ul>

				<div className='navbar__user'>
					<img src={UserIcon} alt='' />
				</div>
			</nav>
		</section>
	)
}

export default Navbar
