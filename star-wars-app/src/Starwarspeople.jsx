import React, { Component } from 'react';
import Starwarscharacter from './Starwarscharacter'

class Starwarspeople extends Component {

    state = {
        personajes: []
    }
    componentDidMount(){

        fetch('https://swapi.dev/api/people/')
        .then(response => response.json())
        .then(response => this.setState({json:response.results}));
        
        fetch('https://swapi.dev/api/people/')
        .then(response => response.json())
        .then(response => console.log(response.results));
        //this.constructPeople()
    
    
    }

    render(){
        return( 
            <Starwarscharacter personajes = {this.state.personajes}/>
        );
    }
}
 
export default Starwarspeople;