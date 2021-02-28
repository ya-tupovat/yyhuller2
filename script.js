class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = { count: 0 }
        }
    addOne = () => {
        this.setState({ count: this.state.count + 1 })
        console.log("count: ", this.state.count)
    }

    addNumber(numb) {
        this.setState({ count: this.state.count + numb })
    }

    render() {
        return (
            <div>
                {element}
                <h2>Counter: {this.state.count}</h2>
                <button onClick={this.addOne}>Add 1</button>
                <button onClick={() => this.addNumber(10)}>Add 10</button>
            </div>
        )
    }
}

ReactDOM.render(<App />, document.getElementById('root'));