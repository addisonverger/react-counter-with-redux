class Counter extends React.Component {
  constructor(props) {
    console.log('This is the constructor running', props)
    super(props)
    this.state = {
      value: 0
    }
  }
  componentDidMount() {
    console.log('My component has landed!')
  }
  componentDidUpdate() {
    console.log('This component has changes in props or state')
  }
  componentWillUnmount() {
    console.log('Component is being removed from the DOM')
  }
  handleClick = () => {
    console.log('Hi Im being clicked!')
    this.setState({
      value: this.state.value + 1
    })
  }
  render () {
    console.log('This is the render being called', this.props)
    return <div>
      <h1>{this.state.value}</h1>
      <button type="button" onClick={this.handleClick}>Increment</button>
    </div>

  }
}

ReactDOM.render(<Counter />, document.getElementById('root'))
