import React, { Component } from 'react';
import NavBar from './navbar';
import Counters from './counters';

class App extends React.Component {
    state = {
        counters : [
            {id: 1, value: 4},
            {id: 2, value: 0},
            {id: 3, value: 0},
            {id: 4, value: 0},
        ]
    }

    constructor(props) {
        super(props);
        console.log("App-Constructor");
    }

    componentDidMount(){
        console.log("App = Mounted");
    }

    handleIncrement = (counter) => {
        const counters = [...this.state.counters];
        const index = counters.indexOf(counter);
        counters[index] = {...counter};
        counters[index].value++
        this.setState({counters});
    }
    handleDecrement = (counter) => {
        const counters = [...this.state.counters];
        const index = counters.indexOf(counter);
        counters[index] = {...counter};
        counters[index].value--
        this.setState({counters});
    }

    handleReset = () => {
        const counters = this.state.counters.map(counter => {
            counter.value = 0;
            return counter;
        });
        this.setState({counters});
    }

    handleDelete = (counterId) => {
        const counters = this.state.counters.filter(counter => counter.id != counterId);
        this.setState({counters});
    }

    render() { 
        console.log("App Rendered");
        return (
            <React.Fragment>
                <NavBar totalCounters = {this.state.counters.filter(c=>c.value > 0).length}/>
                <main className = "container">
                    <Counters 
                        onIncrement = {this.handleIncrement}
                        onReset = {this.handleReset}
                        onDelete = {this.handleDelete}
                        onDecrement = {this.handleDecrement}
                        counters = {this.state.counters}
                    />
                </main>
            </React.Fragment>
        )
    }
}
 
export default App;