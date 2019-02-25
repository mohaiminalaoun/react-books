import React, {Component} from 'react';


class Counter extends Component {




    render() {
        return (
            <div>
                {this.props.children}
                <span className="badge badge-primary m-2">{this.formatCount()}</span>
                <button
                    onClick={() => this.props.onIncrement(this.props.counter)}
                    className="btn btn-secondary btn-sm">
                        Add to Cart
                </button>
                <button
                    onClick={() => this.props.onDelete(this.props.counter)}
                    className="btn btn-danger btn-sm m-2">
                    Delete
                </button>
            </div>
        );
    }

    formatCount() {
        const { value } = this.props.counter;
        // var c = this.props.counter.value;
        return value === 0 ? 'Zero' : value;
    }

}

export default Counter;