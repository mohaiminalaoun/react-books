import React, {Component} from 'react';


class Counter extends Component {

    state = {
        count: 0,
        tags: ["tag1", "tag2", "tag3", "tag4"]
    };

    styles = {
        fontSize: 18,
        fontWeight: 'bold'
    };

    constructor() {
        {/*have to call super*/}
        super();
        /*this.handleIncrement = this.handleIncrement.bind(this);*/
    }

    renderTags() {
        if (this.state.tags.length === 0) {
            return <p>There are no tags</p>;
        } else {
            return <ul>
                {this.state.tags.map(tag => <li key={tag}>{tag}</li>)}
                </ul>;
        }
    }

    handleIncrement = () => {
        /*inherit the this using arrow function*/
        this.state.count++;
        this.setState({ count: this.state.count++}); /*tells react to update state*/
    }

    render() {
        return (
            <React.Fragment>
                <span style ={this.styles} className="badge badge-primary m-2">{this.formatCount()}</span>
                <button onClick={this.handleIncrement} className="btn btn-secondary btn-sm">Add to Cart</button>
                <ul>

                    {this.state.tags.length === 0 && <p>There are no tags</p>}
                    {this.renderTags()}
                </ul>
            </React.Fragment>
        );
    }

    formatCount() {
        const { count } = this.state;
        console.log(count);
        return count === 0 ? 'Zero' : count;
    }

}

export default Counter;