import { Component } from 'react';
import axios from 'axios';
import { AnimalType } from '../../model/AnimalType';
import { AnimalList } from '../../components/AnimalList/AnimalList';

/**
 * @memberOf HomeScreen
 */

type HomeScreenState = {
	data: Array<AnimalType>;
	error: string | null;
	changeStatus: boolean;
};

/**
 * This page shows profile of animals.
 * @component
 * @category Pages
 * @subcategory AnimalList
 * @hideConstructor
 */
export class HomeScreen extends Component<HomeScreenState> {
	state: HomeScreenState = { data: [], changeStatus: false, error: null };

	componentDidMount() {
		this.getAll();
	}

	getAll = async () => {
		const response = await axios.get('http://localhost:3000/animals');
		this.setState({ data: response.data });
	};
	changeData = async (id: number) => {
		await axios
			.patch(`http://localhost:3000/animals/${id}`, { status: 'Booked' })
			.catch(err => this.setState({ error: err }));
		this.setState({ changeStatus: true });
	};
	render() {
		return (
			<div>
				{this.state.error ? (
					<div>{this.state.error}</div>
				) : (
					<AnimalList
						dataAnimals={this.state.data}
						changeStatus={this.changeData}
					/>
				)}
			</div>
		);
	}
}

export default HomeScreen;
