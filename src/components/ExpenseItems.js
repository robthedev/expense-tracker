import React, { Component } from 'react'


function handleInputEvent(e) {
    this.setState({ type: e.target.value })
}


class ExpenseItems extends Component {

    constructor() {
        super()
        this.handleInput = this.handleInput.bind(this)
    }

    handleInput(e) {
        console.log(e.target.value)
    }

    render() {
        return (
            <form class="container" className='expense-items'>
                <div class="row">
                    <div className="dropdown" class="col">
                        <button className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            Payment Type
</button>
                        <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                            <button onClick={e => this.handleInput(e, 'value')} className="dropdown-item" value="Card">Card</button>
                            <button onClick={e => this.handleInput(e, 'value')} className="dropdown-item" value="Cash">Cash</button>
                            <button onClick={e => this.handleInput(e, 'value')} className="dropdown-item" value="Crypto">Crypto</button>
                            <button onClick={e => this.handleInput(e, 'value')} className="dropdown-item" value="Check">Check</button>
                            <button onClick={e => this.handleInput(e, 'value')} className="dropdown-item" value="Other">Other</button>
                        </div>
                    </div>

                    <div class="col input-group mb-5">
                        <div class="input-group-prepend">
                            <span class="input-group-text">Name:</span>
                        </div>
                        <div>
                            <input className="textarea" type="text" class="form-control" />
                        </div>
                    </div>

                    <div class="w-100"></div>

                    <div class="col">
                        <input class='mb-3' type='date' name='date' />
                    </div>

                    <div class="col input-group mb-5">
                        <div class="input-group-prepend">
                            <span class="input-group-text">Amount:</span>
                        </div>
                        <div>
                            <input type="text" class="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default" />
                        </div>
                    </div>

                </div>
            </form >
        )
    }
}

export default ExpenseItems