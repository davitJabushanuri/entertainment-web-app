import React from 'react'
import Logo from './assets/logo.svg'
import HomeIcon from './assets/icon-nav-home.svg'
import MoviesIcon from './assets/icon-nav-movies.svg'
import TVseriesIcon from './assets/icon-nav-tv-series.svg'
import BookmarksIcon from './assets/icon-nav-bookmark.svg'
import UserIcon from './assets/image-avatar.png'

const Navbar = () => {
	return (
		<nav className='navbar'>
			<div className='navbar__logo'>
				<img src={Logo} alt='' />
			</div>
			<ul className='navbar__links'>
				<li className='navbar__links__link'>
					<img src={HomeIcon} alt='' />
				</li>
				<li className='navbar__links__link'>
					<img src={MoviesIcon} alt='' />
				</li>
				<li className='navbar__links__link'>
					<img src={TVseriesIcon} alt='' />
				</li>
				<li className='navbar__links__link'>
					<img src={BookmarksIcon} alt='' />
				</li>
			</ul>

			<div className='navbar__user'>
				<img src={UserIcon} alt='' />
			</div>
		</nav>
	)
}

export default Navbar
