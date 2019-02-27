import React, {Component} from 'react';
// import Counter component
import Counter from './counter';

class Counters extends Component {

    render() {
        const {counters, onDelete, onIncrement} = this.props;
        return (<div>
            {counters.map(counter =>(
                <Counter
                    onDelete={onDelete}
                    onIncrement={onIncrement}
                    counter={counter}>
                <h4>Title {counter.id}</h4>
                </Counter>
            ))}
        </div>)
    }
}


export default Counters;
