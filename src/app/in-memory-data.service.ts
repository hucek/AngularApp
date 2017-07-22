//This is the in memory database which will be used as HTTP backend for this application

import { InMemoryDbService } from 'angular-in-memory-web-api';
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const lawmakers = [
      { id: 0,  name: 'Ibrahim' , party: 'MDP' , description: 'He is now a politician who is the current MP for Galolhu-South constituency in the Peoples Majlis.'},
      { id: 11, name: 'Mahuloof' , party: 'PPM' , description: 'Ahmed Mahloof is a Maldivian former footballer who is the manager of the Maldives national football team. '},
      { id: 12, name: 'Maariyaa' , party: 'MDP' , description: 'Mariya Ahmed Didi is a member of the parliament of Maldives and a womens rights activist.'},
      { id: 15, name: 'Nihan' , party: 'PPM', description: 'Ahmed Mahloof is a Maldivian former footballer who is the manager of the Maldives national football team. ' },
      { id: 16, name: 'Moosa' , party: 'MDP' , description: 'Moosa Manik is a Maldivian former footballer who is the manager of the Maldives national football team. ' }
    ];
    return {lawmakers};
  }
} 