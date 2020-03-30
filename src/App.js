import React from 'react';
import './App.css';
import Header from './components/Header'
import ExpenseItems from './components/ExpenseItems'
import AddButton from './components/AddButton'
import Table from './components/Table'

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Header />
        <ExpenseItems />
        <AddButton />
        <Table />
      </div>
    );
  }
}

export default App;
