import { Animal } from './Animal';

/**
 * @category Data Models
 */

export enum FluffynessLevel {
	BelowAverage = 1,
	Average = 2,
	MoreThanAverage = 3,
	Extreme = 4,
}

type Dog = Animal & {
	type: 'Dog';
	tailLength: number;
	goodBoy: boolean;
};

type Cat = Animal & {
	type: 'Cat';
	meowsPerDay: number;
	fluffynessLevel: FluffynessLevel;
};

export type AnimalType = Dog | Cat;
