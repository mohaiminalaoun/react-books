import React, {Component} from 'react';
// import Counter component
import Counter from './counter';

class Counters extends Component {

    render() {
        return (<div>
            {this.props.counters.map(counter =>(
                <Counter
                    onDelete={this.props.onDelete}
                    onIncrement={this.props.onIncrement}
                    counter={counter}>
                <h4>Title {counter.id}</h4>
                </Counter>
            ))}
        </div>)
    }
}


export default Counters;
