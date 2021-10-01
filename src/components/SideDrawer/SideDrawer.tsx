import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import style from './SideDrawer.module.scss';

/**
 * @memberOf Modal side Drawer
 */
export type SideDrawerProps = React.HTMLProps<HTMLDivElement> & OwnProps;

type OwnProps = {
	show: boolean;
	click: () => void;
};

/**
 * Modal Side Drawer.
 * @component
 * @category Design System
 * @hideConstructor
 */

export class SideDrawer extends Component<SideDrawerProps> {
	render() {
		const { show, click } = this.props;
		const sideDrawerClass = [style.sideDrawer];
		if (show) {
			sideDrawerClass.push(style.show);
		}

		return (
			<div className={sideDrawerClass.join(' ')}>
				<ul className={style.sideDrawer_links} onClick={click}>
					<li>
						<Link to='/'>Adopt an animal</Link>
					</li>
					<li>
						<Link to='/admin'>Administration</Link>
					</li>
				</ul>
			</div>
		);
	}
}

export default SideDrawer;
