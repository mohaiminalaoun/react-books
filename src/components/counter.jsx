import React, {Component} from 'react';


class Counter extends Component {

    state = {
        value: this.props &&this.props.value
    };



    handleIncrement = () => {
        /*inherit the this using arrow function*/
        this.setState({ count: this.state.value++}); /*tells react to update state*/
    }


    render() {
        console.log("in render");
        console.log("props", this.props);
        return (
            <div>
                {this.props.children}
                <span className="badge badge-primary m-2">{this.formatCount()}</span>
                <button onClick={this.handleIncrement}
                        className="btn btn-secondary btn-sm">Add to Cart</button>
            </div>
        );
    }

    formatCount() {
        const { count } = this.state;
        console.log(count);
        return count === 0 ? 'Zero' : count;
    }

}

export default Counter;