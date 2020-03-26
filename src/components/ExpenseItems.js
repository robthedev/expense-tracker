import React, { Component } from 'react'
import DatePicker from './DatePicker'

class ExpenseItems extends Component {
    render() {
        return (
            <div>

                <h3 className="mt-5 mb-3">Add Items:</h3>

                < div class="row justify-content-around mt-5" >
                    <div class="col-4">
                        <div className="dropdown">
                            <button className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                Payment Type
  </button>
                            <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                                <button className="dropdown-item">Card</button>
                                <button className="dropdown-item">Cash</button>
                                <button className="dropdown-item">Crypto</button>
                                <button className="dropdown-item">Check</button>
                                <button className="dropdown-item">Other</button>
                            </div>
                        </div>
                    </div>

                    <div class="input-group mb-3 col-2">
                        <div class="input-group-prepend">
                            <span class="input-group-text" id="inputGroup-sizing-default">Name:</span>
                        </div>
                        <input type="text" class="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default" />
                    </div>
                </div >

                <div class="row justify-content-around mt-5">
                    <input class='mb-3' type='date' name='date' />

                    <div class="input-group mb-3 col-2">
                        <div class="input-group-prepend">
                            <span class="input-group-text" id="inputGroup-sizing-default">Amount:</span>
                        </div>
                        <input type="text" class="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default" />
                    </div>
                </div>
            </div >
        )
    }
}

export default ExpenseItems
