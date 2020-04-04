import React from 'react';
import './App.css';
import Header from './components/Header'
import Form from './components/Form'
import AddButton from './components/AddButton'
import Table from './components/Table'

class App extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      type: this.props.type,
      name: this.props.name,
      date: this.props.date,
      amount: this.props.amount
    }
    console.log(this.props.type)
  }

  render() {
    return (
      <div className="App">
        <Header />
        <Form />
        <AddButton />
        <Table type={this.state.type} />
      </div>
    );
  }
}

export default App;
