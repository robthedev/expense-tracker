import React, { Component } from 'react'

class Form extends Component {

    constructor() {
        super()
        this.state = {
            type: null,
            name: null,
            date: null,
            amount: null
        }
        this.handleNameChange = this.handleNameChange.bind(this)
        this.handleAmountChange = this.handleAmountChange.bind(this)
        this.handleDateChange = this.handleDateChange.bind(this)
        this.handleTypeChange = this.handleTypeChange.bind(this)
    }

    handleNameChange(e) {
        this.setState({
            name: e.target.value
        })
    }

    handleAmountChange(e) {
        this.setState({
            amount: e.target.value
        })
    }


    handleDateChange(e) {
        this.setState({
            date: e.target.value
        })
    }

    handleTypeChange(e) {
        this.setState({
            type: e.target.value
        })
    }

    render() {
        console.log(this.state)
        return (
            <form onSubmit={this.handleSubmit} className="container" className='expense-items'>
                <div className="row">
                    <div className="select" className="col">
                        <select value={this.state.type} className="btn btn-secondary dropdown-toggle" onChange={this.handleTypeChange}>
                            Payment Type
                            <option value="Card">Card</option>
                            <option value="Cash">Cash</option>
                            <option value="Crypto">Crypto</option>
                            <option value="Check">Check</option>
                            <option value="Other">Other</option>
                        </select>
                    </div>

                    <div className="col input-group mb-5">
                        <div className="input-group-prepend">
                            <span className="input-group-text">Name:</span>
                        </div>
                        <div>
                            <input className="textarea" type="text" className="form-control" onChange={this.handleNameChange} />
                        </div>
                    </div>

                    <div className="w-100"></div>

                    <div className="col">
                        <input className='mb-3' type='date' name='date' onChange={this.handleDateChange} />
                    </div>

                    <div className="col input-group mb-5">
                        <div className="input-group-prepend">
                            <span className="input-group-text">Amount:</span>
                        </div>
                        <div>
                            <input type="text" className="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default" onChange={this.handleAmountChange} />
                        </div>
                    </div>

                </div>
            </form >
        )
    }
}

export default Form