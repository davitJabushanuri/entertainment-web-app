import React from 'react'
import Logo from './assets/logo.svg'
import HomeIcon from './assets/icon-nav-home.svg'
import MoviesIcon from './assets/icon-nav-movies.svg'
import TVseriesIcon from './assets/icon-nav-tv-series.svg'
import BookmarksIcon from './assets/icon-nav-bookmark.svg'
import UserIcon from './assets/image-avatar.png'

import { Link } from 'react-router-dom'

const Navbar = () => {
	return (
		<nav className='navbar'>
			<div className='navbar__logo'>
				<Link to='/'>
					<img src={Logo} alt='' />
				</Link>
			</div>
			<ul className='navbar__links'>
				<li className='navbar__links__link'>
					<Link to='/'>
						<img src={HomeIcon} alt='' />
					</Link>
				</li>
				<li className='navbar__links__link'>
					<Link to='/movies'>
						<img src={MoviesIcon} alt='' />
					</Link>
				</li>
				<li className='navbar__links__link'>
					<Link to='/tvseries'>
						<img src={TVseriesIcon} alt='' />
					</Link>
				</li>
				<li className='navbar__links__link'>
					<Link to='/bookmarks'>
						<img src={BookmarksIcon} alt='' />
					</Link>
				</li>
			</ul>

			<div className='navbar__user'>
				<img src={UserIcon} alt='' />
			</div>
		</nav>
	)
}

export default Navbar
