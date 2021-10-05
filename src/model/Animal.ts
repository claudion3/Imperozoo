/**
 * @category Data Models
 */

enum Status {
	Booked = 'Booked',
	Adopted = 'Adopted',
	Un_adopted = 'Un-adopted',
}
enum Sex {
	Female = 'Female',
	Male = 'Male',
}

export type Animal = {
	id: number;
	name: string;
	sex: Sex;
	breed: string;
	birth: string;
	photo: string;
	status: Status;
	note?: string;
};

export default Animal;
