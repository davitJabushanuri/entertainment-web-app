import React, { useContext } from 'react'
import Logo from './assets/logo.svg'
import HomeIcon from './assets/icon-nav-home.svg'
import MoviesIcon from './assets/icon-nav-movies.svg'
import TVseriesIcon from './assets/icon-nav-tv-series.svg'
import BookmarksIcon from './assets/icon-nav-bookmark.svg'
import UserIcon from './assets/image-avatar.png'

import { Link } from 'react-router-dom'

import { showsContext } from '../contexts/showsContext'

const Navbar = () => {
	const { setSearchValue } = useContext(showsContext)
	return (
		<section className='navbarContainer'>
			<nav className='navbar'>
				<div className='navbar__logo'>
					<Link to='/'>
						<img src={Logo} alt='' />
					</Link>
				</div>
				<ul className='navbar__links'>
					<li className='navbar__links__link'>
						<Link onClick={() => setSearchValue('')} to='/'>
							<img className='listIcon' src={HomeIcon} alt='' />
						</Link>
					</li>
					<li className='navbar__links__link'>
						<Link onClick={() => setSearchValue('')} to='/movies'>
							<img className='listIcon' src={MoviesIcon} alt='' />
						</Link>
					</li>
					<li className='navbar__links__link'>
						<Link onClick={() => setSearchValue('')} to='/tvseries'>
							<img className='listIcon' src={TVseriesIcon} alt='' />
						</Link>
					</li>
					<li className='navbar__links__link'>
						<Link onClick={() => setSearchValue('')} to='/bookmarks'>
							<img className='listIcon' src={BookmarksIcon} alt='' />
						</Link>
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
