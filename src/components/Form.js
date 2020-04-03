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
        this.handleInput = this.handleInput.bind(this)
    }

    handleInput(e) {
        this.setState({ type: 'cash' })
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit} className="container" className='expense-items'>
                <div className="row">
                    <div className="select" className="col">
                        <select value={this.state.type} className="btn btn-secondary dropdown-toggle">
                            Payment Type
                            <option onClick={e => this.handleInput(e, 'value')} value="Card">Card</option>
                            <option onClick={e => this.handleInput(e, 'value')} value="Cash">Cash</option>
                            <option onClick={e => this.handleInput(e, 'value')} value="Crypto">Crypto</option>
                            <option onClick={e => this.handleInput(e, 'value')} value="Check">Check</option>
                            <option onClick={e => this.handleInput(e, 'value')} value="Other">Other</option>
                        </select>
                    </div>

                    <div className="col input-group mb-5">
                        <div className="input-group-prepend">
                            <span className="input-group-text">Name:</span>
                        </div>
                        <div>
                            <input className="textarea" type="text" className="form-control" />
                        </div>
                    </div>

                    <div className="w-100"></div>

                    <div className="col">
                        <input className='mb-3' type='date' name='date' />
                    </div>

                    <div className="col input-group mb-5">
                        <div className="input-group-prepend">
                            <span className="input-group-text">Amount:</span>
                        </div>
                        <div>
                            <input type="text" className="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default" />
                        </div>
                    </div>

                </div>
            </form >
        )
    }
}

export default Form