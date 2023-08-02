import React from "react";

class TestingComp extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            count: 0
        };
        this.increment = this.increment.bind(this);
        this.decrement = this.decrement.bind(this);
    }
    increment() {
        this.setState({
            count: this.state.count + 1
        });
    }
    decrement() {
        if (this.state.count == 0) {
            this.setState({
                count: 0
            })
        }
        else {
            this.setState({
                count: this.state.count - 1
            })
        }
    }
    render() {
        return (
            <>
                <p className='text-xl'>REACT CLASS COMPONENT EXAMPLE</p>
                <h1>The Count is {this.state.count}</h1>
                <button className="bg-blue-500 hover:bg-blue-600 text-white px-2 py-2 ml-2 rounded-xl mt-2" onClick={this.increment}>Increment</button>
                <button className="bg-blue-500 hover:bg-blue-600 text-white px-2 py-2 ml-2 rounded-xl mt-2" onClick={this.decrement}>Decrement</button>
            </>
        )
    }
}

export default TestingComp;