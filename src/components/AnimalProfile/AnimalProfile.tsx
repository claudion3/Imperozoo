import { Component } from 'react';
import dayjs from 'dayjs';
import { Button } from '../Button/Button';
import { AnimalType, FluffynessLevel } from '../../model/AnimalType';

import style from './AnimalProfile.module.scss';

/**
 * @memberOf HomeScreen
 */

export type AnimalProfileProps = {
	data: AnimalType;
	changeStatusToBooked: (id: number) => void;
};

type AnimalProfileState = {
	available: boolean;
};
/**
 * This page shows profile of animals.
 * @component
 * @hideConstructor
 */

export class AnimalProfile extends Component<
	AnimalProfileProps,
	AnimalProfileState
> {
	state: AnimalProfileState = { available: false };

	background =
		this.props.data.type === 'Cat'
			? `url("data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNTYiIGhlaWdodD0iNTIiIHZpZXdCb3g9IjAgMCA1NiA1MiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTMxLjgwNzEgMzUuMDA2NFYzNS4wMDY0QzMxLjAzOSAzNy42NDUyIDI4LjI3NzEgMzkuMTYxOCAyNS42MzgzIDM4LjM5MzdDMjQuMDA0MyAzNy45MTgxIDIyLjcyNjcgMzYuNjQwNCAyMi4yNTEgMzUuMDA2NEMyMi4yNTEgMzMuNjg3NyAyNC4zODkyIDMyLjYxNzQgMjcuMDI5MSAzMi42MTc0QzI5LjY2ODkgMzIuNjE3NCAzMS44MDcxIDMzLjY4NzcgMzEuODA3MSAzNS4wMDY0VjM1LjAwNjRaIiBzdHJva2U9IndoaXRlIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiLz4KPHBhdGggZD0iTTM3Ljc3OTYgMjMuNjU4NlYyMy42NTg2QzM4LjEwOTQgMjMuNjU4NiAzOC4zNzY4IDIzLjkyNiAzOC4zNzY4IDI0LjI1NTkiIHN0cm9rZT0id2hpdGUiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIvPgo8cGF0aCBkPSJNMzcuMTgyMyAyNC4yNTU5VjI0LjI1NTlDMzcuMTgyMyAyMy45MjYgMzcuNDQ5NyAyMy42NTg2IDM3Ljc3OTYgMjMuNjU4NiIgc3Ryb2tlPSJ3aGl0ZSIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIi8+CjxwYXRoIGQ9Ik0zNy43Nzk2IDI0Ljg1MzFWMjQuODUzMUMzNy40NDk3IDI0Ljg1MzEgMzcuMTgyMyAyNC41ODU3IDM3LjE4MjMgMjQuMjU1OSIgc3Ryb2tlPSJ3aGl0ZSIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIi8+CjxwYXRoIGQ9Ik0zOC4zNzY4IDI0LjI1NTlDMzguMzc2OCAyNC41ODU3IDM4LjEwOTQgMjQuODUzMSAzNy43Nzk2IDI0Ljg1MzEiIHN0cm9rZT0id2hpdGUiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIvPgo8cGF0aCBkPSJNMTYuMjc4NSAyMy42NTg2VjIzLjY1ODZDMTYuNjA4NCAyMy42NTg2IDE2Ljg3NTggMjMuOTI2IDE2Ljg3NTggMjQuMjU1OSIgc3Ryb2tlPSJ3aGl0ZSIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIi8+CjxwYXRoIGQ9Ik0xNS42ODEzIDI0LjI1NTlWMjQuMjU1OUMxNS42ODEzIDIzLjkyNiAxNS45NDg3IDIzLjY1ODYgMTYuMjc4NSAyMy42NTg2IiBzdHJva2U9IndoaXRlIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiLz4KPHBhdGggZD0iTTE2LjI3ODUgMjQuODUzMVYyNC44NTMxQzE1Ljk0ODcgMjQuODUzMSAxNS42ODEzIDI0LjU4NTcgMTUuNjgxMyAyNC4yNTU5IiBzdHJva2U9IndoaXRlIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiLz4KPHBhdGggZD0iTTE2Ljg3NTggMjQuMjU1OUMxNi44NzU4IDI0LjU4NTcgMTYuNjA4NCAyNC44NTMxIDE2LjI3ODUgMjQuODUzMSIgc3Ryb2tlPSJ3aGl0ZSIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIi8+CjxwYXRoIGQ9Ik0xOC44ODI2IDQyLjkzNTVWNDIuOTM1NUMyMi4xNjk3IDQ0LjA3MTggMjUuNzU1NSA0Mi4zMjgyIDI2Ljg5MTggMzkuMDQxQzI2Ljk0MzIgMzguODkyNCAyNi45ODg5IDM4Ljc0MTkgMjcuMDI5MSAzOC41ODk5IiBzdHJva2U9IndoaXRlIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiLz4KPHBhdGggZD0iTTM1LjE3NTYgNDIuOTM1NVY0Mi45MzU1QzMxLjg4ODQgNDQuMDcxOCAyOC4zMDI2IDQyLjMyODIgMjcuMTY2MyAzOS4wNDFDMjcuMTE1IDM4Ljg5MjQgMjcuMDY5MiAzOC43NDE5IDI3LjAyOTEgMzguNTg5OSIgc3Ryb2tlPSJ3aGl0ZSIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIi8+CjxwYXRoIGQ9Ik0yNy4wMjkxIDcuNjQwMzJWMTguMzkwOCIgc3Ryb2tlPSJ3aGl0ZSIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIi8+CjxwYXRoIGQ9Ik0xOS44NjIgOS4wNzM3NVYxNS45MDYzIiBzdHJva2U9IndoaXRlIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiLz4KPHBhdGggZD0iTTM0LjE5NjEgOS4wNzM3NVYxNS45MDYzIiBzdHJva2U9IndoaXRlIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiLz4KPHBhdGggZD0iTTIwLjMzMDMgOC44ODI2TDYuOTkwMDggMC44NzcwNDdWMC44NzcwNDdDNS44NTg2IDAuMTk4Mzc0IDQuMzkxMTggMC41NjU0NDcgMy43MTI1MSAxLjY5NjkzQzMuNDY3OTIgMi4xMDQ3IDMuMzUwNTkgMi41NzYxOSAzLjM3NTUyIDMuMDUxMDRMNS41MjU2MyAxNi40ODQ0IiBzdHJva2U9IndoaXRlIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiLz4KPHBhdGggZD0iTTMzLjcyNzggOC44ODI2TDQ3LjA2OCAwLjg3NzA0N1YwLjg3NzA0N0M0OC4xOTk1IDAuMTk4Mzc0IDQ5LjY2NjkgMC41NjU0NDcgNTAuMzQ1NiAxLjY5NjkzQzUwLjU5MDIgMi4xMDQ3IDUwLjcwNzUgMi41NzYxOSA1MC42ODI2IDMuMDUxMDRMNDguNTMyNSAxNi40ODQ0IiBzdHJva2U9IndoaXRlIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiLz4KPHBhdGggZD0iTTQxLjMzOTIgNDYuNjQzMlY0Ni42NDMyQzM3LjAyMTUgNDkuMjQwMyAzMi4wNjc0IDUwLjU4NzYgMjcuMDI5MSA1MC41MzQ5SDI3LjAyOTFDMjEuOTkwNyA1MC41ODc2IDE3LjAzNjcgNDkuMjQwNCAxMi43MTg5IDQ2LjY0MzIiIHN0cm9rZT0id2hpdGUiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIvPgo8cGF0aCBkPSJNNDguMjc5MyAzMC4xNDk1QzQ2LjgwMDUgMTkuMTYwMSAzOC44ODgxIDcuNTMyODIgMjcuMDI5MSA3LjUzMjgyQzE1LjE3IDcuNTMyODIgNy4yNTc2NSAxOS4xNzIxIDUuNzc4ODUgMzAuMTQ5NSIgc3Ryb2tlPSJ3aGl0ZSIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIi8+CjxwYXRoIGQ9Ik0zOC45NzQxIDM1LjAxODNINTQuNTAyNiIgc3Ryb2tlPSJ3aGl0ZSIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIi8+CjxwYXRoIGQ9Ik0zNy43Nzk2IDM5Ljc5NjRMNTIuMTEzNiA0NS43Njg5IiBzdHJva2U9IndoaXRlIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiLz4KPHBhdGggZD0iTTE1LjA4NCAzNi4yMTI4TDAuNzUgMzMuODIzOCIgc3Ryb2tlPSJ3aGl0ZSIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIi8+CjxwYXRoIGQ9Ik0xNS4wODQgNDAuOTkwOUwxLjk0NDUgNDUuNzY4OSIgc3Ryb2tlPSJ3aGl0ZSIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIi8+Cjwvc3ZnPgo=") #6316A0 no-repeat right 1.25rem top 0.9rem`
			: `url("data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNTgiIGhlaWdodD0iNTIiIHZpZXdCb3g9IjAgMCA1OCA1MiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTI4LjU0MDUgMzguNTUzM0MzMS4yMzQxIDM4LjU1MzMgMzMuNDE3NyAzNi45MTU3IDMzLjQxNzcgMzQuODk1NUMzMy40MTc3IDMyLjg3NTMgMzEuMjM0MSAzMS4yMzc2IDI4LjU0MDUgMzEuMjM3NkMyNS44NDY5IDMxLjIzNzYgMjMuNjYzNCAzMi44NzUzIDIzLjY2MzQgMzQuODk1NUMyMy42NjM0IDM2LjkxNTcgMjUuODQ2OSAzOC41NTMzIDI4LjU0MDUgMzguNTUzM1oiIHN0cm9rZT0id2hpdGUiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIvPgo8cGF0aCBkPSJNMzUuMjQ2NiAyMi43MDI2VjIyLjcwMjZDMzUuNTgzMyAyMi43MDI2IDM1Ljg1NjIgMjIuOTc1NiAzNS44NTYyIDIzLjMxMjMiIHN0cm9rZT0id2hpdGUiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIvPgo8cGF0aCBkPSJNMzQuNjM3IDIzLjMxMjNWMjMuMzEyM0MzNC42MzcgMjIuOTc1NiAzNC45MDk5IDIyLjcwMjYgMzUuMjQ2NiAyMi43MDI2IiBzdHJva2U9IndoaXRlIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiLz4KPHBhdGggZD0iTTM1LjI0NjYgMjMuOTIxOVYyMy45MjE5QzM0LjkwOTkgMjMuOTIxOSAzNC42MzcgMjMuNjQ5IDM0LjYzNyAyMy4zMTIzIiBzdHJva2U9IndoaXRlIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiLz4KPHBhdGggZD0iTTM1Ljg1NjIgMjMuMzEyM0MzNS44NTYyIDIzLjY0OSAzNS41ODMzIDIzLjkyMTkgMzUuMjQ2NiAyMy45MjE5IiBzdHJva2U9IndoaXRlIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiLz4KPHBhdGggZD0iTTIxLjgzNDQgMjIuNzAyNlYyMi43MDI2QzIyLjE3MTEgMjIuNzAyNiAyMi40NDQxIDIyLjk3NTYgMjIuNDQ0MSAyMy4zMTIzIiBzdHJva2U9IndoaXRlIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiLz4KPHBhdGggZD0iTTIxLjIyNDggMjMuMzEyM1YyMy4zMTIzQzIxLjIyNDggMjIuOTc1NiAyMS40OTc3IDIyLjcwMjYgMjEuODM0NCAyMi43MDI2IiBzdHJva2U9IndoaXRlIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiLz4KPHBhdGggZD0iTTIxLjgzNDQgMjMuOTIxOVYyMy45MjE5QzIxLjQ5NzcgMjMuOTIxOSAyMS4yMjQ4IDIzLjY0OSAyMS4yMjQ4IDIzLjMxMjMiIHN0cm9rZT0id2hpdGUiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIvPgo8cGF0aCBkPSJNMjIuNDQ0MSAyMy4zMTIzQzIyLjQ0NDEgMjMuNjQ5IDIyLjE3MTEgMjMuOTIxOSAyMS44MzQ0IDIzLjkyMTkiIHN0cm9rZT0id2hpdGUiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIvPgo8cGF0aCBkPSJNMzcuNjM4OCA0Ny4wODg0VjQ3LjA4ODRDMzIuOTQyOSA0Ni44MTM3IDI5LjExNDMgNDMuMjIyMiAyOC41NDA1IDM4LjU1MzNWMzguNTUzM0MyNy45NjY3IDQzLjIyMjIgMjQuMTM4MSA0Ni44MTM3IDE5LjQ0MjIgNDcuMDg4NCIgc3Ryb2tlPSJ3aGl0ZSIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIi8+CjxwYXRoIGQ9Ik00Ni40MTA0IDI1LjY0ODRDNDQuNTgzOSA0Mi41NzcgMzcuMDIxOSA1MC43NDYyIDI4LjU0MDUgNTAuNzQ2MkMyMC4wNTkyIDUwLjc0NjIgMTIuNDk3MSA0Mi41NzcgMTAuNjcwNiAyNS42NDg0IiBzdHJva2U9IndoaXRlIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiLz4KPHBhdGggZD0iTTQwLjA3OTkgMTAuODc1NUM0MC4wNzk5IDEwLjg3NTUgNDIuOTY3MSAyOC4xODk0IDUwLjE3OCAyNi43NDMzQzU2LjE3OTMgMjUuNTQxMSA2MC4yNzYxIDUuMTAzNDMgNTEuNjIxNiAyLjIxODU5VjIuMjE4NTlDNDYuOTgzOSAwLjQyMTk3MSA0MS44NDI1IDAuNDIxOTcxIDM3LjIwNDggMi4yMTg1OUwzNy4yMDQ4IDIuMjE4NTlDMzEuNjAwNCAwLjI1NTQwMSAyNS40OTUyIDAuMjU1NDA0IDE5Ljg5MDkgMi4yMTg2TDE5Ljg5MDkgMi4yMTg2QzE1LjI0OTYgMC40MjM0NTIgMTAuMTA1NiAwLjQyMzQ1MiA1LjQ2NDMgMi4yMTg2Qy0zLjE5MDIgNS4xMDM0MyAwLjkwNjYwNyAyNS41NDExIDYuOTA3OTMgMjYuNzQzM0MxNC4xMTM5IDI4LjE4OTQgMTcuMDAxMiAxMC44NzU1IDE3LjAwMTIgMTAuODc1NSIgc3Ryb2tlPSJ3aGl0ZSIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIi8+Cjwvc3ZnPgo=") #518E3C no-repeat right 1.25rem top 0.9rem`;
	isDisabled =
		this.props.data.status === 'Adopted' ||
		this.props.data.status === 'Booked' ||
		this.state.available;
	isDogGoodBoy =
		this.props.data.type === 'Dog' && this.props.data.goodBoy ? 'Yes' : 'No';

	fluffynessLevelDescription = (level: FluffynessLevel) => {
		let text;
		switch (level) {
			case 1:
				text = 'Below Average';
				break;
			case 3:
				text = 'More Than Average';
				break;
			case 4:
				text = 'Extreme';
				break;
			default:
				text = 'Average';
		}
		return text;
	};
	render() {
		return (
			<div className={style.wrapper}>
				<div
					style={{ background: this.background }}
					className={style.profile_image}>
					<div className=''>
						<img
							src={this.props.data.photo}
							className={style.image}
							alt={this.props.data.name}
						/>
					</div>
					<h2 className={style.animal_name}>{this.props.data.name}</h2>
					<h3 className={style.animal_bread}>{this.props.data.breed}</h3>
				</div>
				<div className={style.info}>
					<div>
						<div className={style.animal_info}>Sex</div>
						<div className={style.animal_info_data}>{this.props.data.sex}</div>
					</div>
					<div>
						<div className={style.animal_info}>Status</div>
						<div className={style.animal_info_data}>
							{this.props.data.status}
						</div>
					</div>
					<div>
						<div className={style.animal_info}>
							{this.props.data.type === 'Cat'
								? 'Number of meows per day'
								: 'Tail length (cm)'}
						</div>
						<div className={style.animal_info_data}>
							{this.props.data.type === 'Cat'
								? this.props.data.meowsPerDay
								: this.props.data.tailLength}
						</div>
					</div>
					<div>
						<div className={style.animal_info}>Age</div>
						<div className={style.animal_info_data}>
							{dayjs().diff(this.props.data.birth, 'year')}
						</div>
					</div>
					<div>
						<div className={style.animal_info}>
							{this.props.data.type === 'Cat'
								? 'Fluffyness level'
								: 'Is a good boy'}
						</div>
						<div className={style.animal_info_data}>
							{this.props.data.type === 'Cat'
								? this.fluffynessLevelDescription(
										this.props.data.fluffynessLevel,
								  )
								: this.isDogGoodBoy}
						</div>
					</div>
					<div>
						<div className={style.animal_info}>Notes</div>
						<div className={style.animal_info_data}>
							{this.props.data.note ? this.props.data.note : 'none'}
						</div>
					</div>
				</div>
				<div>
					<Button
						variant={this.isDisabled ? 'disabled' : 'default'}
						onClick={() => {
							this.setState({ available: true });
							this.props.changeStatusToBooked(this.props.data.id);
						}}>
						Adopt me
					</Button>
				</div>
			</div>
		);
	}
}

export default AnimalProfile;
