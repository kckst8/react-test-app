import React, {Component} from 'react';
import {DataService} from '../helpers/DataService.js';

export class Heroes extends Component {

    constructor(props) {
        super(props);

        this.state = {
            heroes: []
        };

        this.dataservice = new DataService();
    }

    componentDidMount() {
        this.dataservice.getHeroes().then(response => {
            this.setState({
                heroes: response.heroes
            });
        });
    }

    render() {
        return (
             <ul>
                {this.state.heroes.map(hero => <li>{hero.name}</li>)}
            </ul> 
        );
    }
}