import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import style from './Navbar.module.scss';

/**
 * @memberOf Navbar
 */
export type NavbarProps = React.HTMLProps<HTMLDivElement> & OwnProps;

type OwnProps = {
	click: () => void;
};

/**
 * Default navigation bar.
 * @component
 * @alias Navbar
 * @category Design System
 * @hideConstructor
 * @example
 * return (<Navbar />)
 */

export class Navbar extends Component<NavbarProps> {
	render() {
		const { click } = this.props;
		return (
			<nav className={style.navbar}>
				<div className={style.navbar_logo}>
					<h2>Imperozoo</h2>
				</div>
				<ul className={style.navbar_links}>
					<li>
						<Link to='/' className={style.adopt_link}>
							Adopt an animal
						</Link>
					</li>
					<li>
						<Link to='/admin' className={style.admin_link}>
							Administration
						</Link>
					</li>
				</ul>
				<div className={style.hamburger_menu} onClick={click}>
					<div></div>
					<div></div>
					<div></div>
				</div>
			</nav>
		);
	}
}

export default Navbar;
