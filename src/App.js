import React from 'react';
import './App.css';
import Header from './components/Header'
import Form from './components/Form'
import AddButton from './components/AddButton'
import Table from './components/Table'

class App extends React.Component {
  constructor() {
    super()

    this.state = {
      type: '',
      name: '',
      date: '',
      amount: '',
      items: []
    }
  }

  handleFormSubmit = (e) => {

    let items = [...this.state.items]

    items.push({
      type: this.state.type,
      name: this.state.name,
      date: this.state.date,
      amount: this.state.amount
    })

    this.setState({
      items,
      type: '',
      name: '',
      date: '',
      amount: ''
    })
  }

  handleInput = (e) => {
    let input = e.target

  }

  render() {
    return (
      <div className="App">
        <Header />
        <Form />
        <AddButton />
        <Table />
      </div>
    );
  }
}

export default App;
