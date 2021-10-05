import { Component } from 'react';
import axios from 'axios';
import { AdminTable, TableData } from '../../components/AdminTable/AdminTable';
import dayjs from 'dayjs';
/**
 * @memberOf AdminScreen
 */

type AdminScreenState = {
	data: Array<TableData>;
	allAnimal: Array<any>;
	available: boolean;
};

/**
 * This page shows details of Animals on Administrators side.
 * @component
 * @category Pages
 * @subcategory adminTable
 * @hideConstructor
 */
export class AdminScreen extends Component<AdminScreenState> {
	state: AdminScreenState = {
		data: [],
		allAnimal: [],
		available: false,
	};

	componentDidMount() {
		this.getAll();
	}

	getAll = async () => {
		const response = await axios.get('http://localhost:3000/animals');
		this.setState({ allAnimal: response.data });
		if (this.state.allAnimal) {
			const filteredData = this.state.allAnimal.map(row => {
				return {
					name: row.name,
					type: row.type,
					breed: row.breed,
					age: dayjs().diff(row.birth, 'year'),
					status: row.status,
				};
			});
			this.setState({ data: filteredData });
		}
	};

	adoptHandler = () => {};
	deleteHandler = () => {};
	render() {
		return (
			<div>
				{this.state.data.length ? (
					<AdminTable
						data={this.state.data}
						deleteHandler={this.deleteHandler}
						adoptHandler={this.adoptHandler}
					/>
				) : (
					<div> No data!</div>
				)}
			</div>
		);
	}
}

export default AdminScreen;
