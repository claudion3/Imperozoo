import { MouseEvent, ReactNode } from 'react';
import style from './Button.module.scss';

/**
 * @memberOf Button
 * @category Design System
 */
export type SideDrawerProps = React.HTMLProps<HTMLButtonElement> & OwnProps;

type OwnProps = {
	variant?: string;
	children: ReactNode;
	onClick?: (event: MouseEvent<HTMLButtonElement>) => void;
};

export const Button: React.FC<OwnProps> = ({
	variant = 'default',
	children,
	onClick,
}) => {
	switch (variant) {
		case 'disabled':
			return (
				<button className={style.btn_disable} onClick={onClick} disabled>
					{children}
				</button>
			);
		default:
			return (
				<button className={style.btn} onClick={onClick}>
					{children}
				</button>
			);
	}
};
