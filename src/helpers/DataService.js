import axios from 'axios';

export class DataService {
    getHeroes() {
        return Promise.resolve(
            {heroes: [
                {
                    id: 1,
                    name: "Yoda",
                    specialty: "wisdom",
                    roles: ["Jedi"]
                },
                {
                    id: 2,
                    name: "Mace Windu",
                    specialty: "discernment",
                    roles: ["Jedi"]
                },
                {
                    id: 3,
                    name: "Qui-Gon Jin",
                    specialty: "leadership",
                    roles: ["Jedi"]
                },
                {
                    id: 4,
                    name: "Obi-Wan Kenobi",
                    specialty: "patience",
                    roles: ["Jedi"]
                },
                {
                    id: 5,
                    name: "Anakin Skywalker",
                    specialty: "force awareness",
                    roles: ["Jedi"]
                },
                {
                    id: 6,
                    name: "Luke Skywalker",
                    specialty: "honor",
                    roles: ["Jedi"]
                },
                {
                    id: 7,
                    name: "Leia Organa",
                    specialty: "courage",
                    roles: ["Princess","General"]
                },
                {
                    id: 8,
                    name: "Han Solo",
                    specialty: "bravado",
                    roles: ["Pilot","Smuggler"]
                },
                {
                    id: 9,
                    name: "Chewbacca",
                    specialty: "loyalty",
                    roles: ["Pilot","Smuggler"]
                },
                {
                    id: 10,
                    name: "Finn",
                    specialty: "righteousness",
                    roles: ["Soldier"]
                },
                {
                    id: 11,
                    name: "Rey",
                    specialty: "independence",
                    roles: ["Jedi"]
                },
                {
                    id: 12,
                    name: "Peo Dameron",
                    specialty: "bravado",
                    roles: ["Pilot"]
                }
            ]
            }
        );
       // return axios.get('assets/heroes.json');
    }
}