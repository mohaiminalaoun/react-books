import React, {Component} from 'react';


class Counter extends Component {

    state = {
        value: this.props &&this.props.value,
        id: this.props && this.props.id
    };



    handleIncrement = () => {
        /*inherit the this using arrow function*/
        this.setState({ count: this.state.value++}); /*tells react to update state*/
    }


    render() {
        return (
            <div>
                {this.props.children}
                <span className="badge badge-primary m-2">{this.formatCount()}</span>
                <button
                    onClick={this.handleIncrement}
                    className="btn btn-secondary btn-sm">
                        Add to Cart
                </button>
                <button
                    onClick={() => this.props.onDelete(this.props.id)}
                    className="btn btn-danger btn-sm m-2">
                    Delete
                </button>
            </div>
        );
    }

    formatCount() {
        const { count } = this.state;
        var c = this.state.value;
        return c === 0 ? 'Zero' : c;
    }

}

export default Counter;