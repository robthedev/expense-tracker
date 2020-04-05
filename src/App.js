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
      expenses: []
    }

  }

  render() {
    return (
      <div className="App">
        <Header />
        <Form />
        <AddButton />
        <Table expenses={this.state.expenses} />
      </div>
    );
  }
}

export default App;
