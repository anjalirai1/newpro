import { InMemoryDbService } from 'angular-in-memory-web-api';
export class InMemroyDataService implements InMemoryDbService {
	createDb() {
	const heroes = [
	{ id: 1, name: 'Mr.Nik'},
	{id:2, name:'Mr.Nice'},
	{id:3,name:'Mrs.Sunita'},
	{id:4,name:'Mrs.Kumari'}
	];
	return {heroes};
	}
}
