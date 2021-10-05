import { Component } from 'react';
import { AnimalProfile } from '../AnimalProfile/AnimalProfile';
import { AnimalType } from '../../model/AnimalType';
import style from './AnimalList.module.scss';

type ListAnimalsProps = {
	dataAnimals: AnimalType[];
	changeStatus: (id: number) => void;
};

export class AnimalList extends Component<ListAnimalsProps> {
	render() {
		return (
			<div className={style.animal_list}>
				{this.props.dataAnimals.map(animal => {
					return (
						<AnimalProfile
							data={animal}
							key={animal.id}
							changeStatusToBooked={this.props.changeStatus}
						/>
					);
				})}
			</div>
		);
	}
}

export default AnimalList;
