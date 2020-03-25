import React from 'react';
import './App.css';
import Header from './components/Header'
import ExpenseItems from './components/ExpenseItems'

function App() {
  return (
    <div className="App">
      <Header />
      <ExpenseItems />
    </div>
  );
}

export default App;
