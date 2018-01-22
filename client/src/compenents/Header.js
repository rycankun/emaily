import React, { Component } from 'react';

class Header extends Component {
	render() {
		return (
			<nav className="top-nav">
				<div className="nav-wrapper">
					<a href="/" className="brand-logo">
						Logo
					</a>
					<ul id="nav-mobile" className="right">
						<li>
							<a href="/login">Login</a>
						</li>
						<li>
							<a href="/signup">Sign Up</a>
						</li>
					</ul>
				</div>
			</nav>
		);
	}
}

export default Header;
