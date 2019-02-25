import React, {Component} from 'react';
import Navbar from './components/navbar';
import Counters from './components/counters';
import './App.css';

class App extends Component {
    state = {
        counters: [
            {id: 1, value: 4},
            {id: 2, value: 0},
            {id: 3, value: 0},
            {id: 4, value: 0},

        ]
    };

    onIncrement = counter => {
        const counters = [...this.state.counters]; // clone
        var idx = counters.indexOf(counter);
        counters[idx] = {...counter};
        counters[idx].value++;
        this.setState({counters});
    };

    handleDelete = counter => {
        console.log(counter);
        const counters = this.state.counters.filter(c => c.id !== counter.id).length;
        console.log(counters);
        this.setState({counters: counters});
    };

    render() {
        return (
            <React.Fragment>
                <Navbar totalCounters={this.state.counters.filter(c => c.value > 0).length}/>
                <main className="container">
                    <Counters
                        counters={this.state.counters}
                        onIncrement={this.onIncrement}
                        onDelete={this.handleDelete}/>
                </main>
            </React.Fragment>
        );
    }
}

export default App;
