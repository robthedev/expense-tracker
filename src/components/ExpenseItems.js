import React from 'react'


function handleInputEvent(e) {
    this.setState({ type: e.target.value })
}


function ExpenseItems() {
    return (
        <form class="container" className='expense-items'>
            <div class="row">
                <div className="dropdown" class="col">
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

                <div class="col input-group mb-5">
                    <div class="input-group-prepend">
                        <span class="input-group-text" id="inputGroup-sizing-default">Name:</span>
                    </div>
                    <div>
                        <textarea className="textarea" type="text" class="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default" />
                    </div>
                </div>

                <div class="w-100"></div>

                <div class="col">
                    <input class='mb-3' type='date' name='date' />
                </div>

                <div class="col input-group">
                    <div class="input-group-prepend">
                        <span class="input-group-text">Amount:</span>
                    </div>
                    <div>
                        <textarea type="text" class="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default" />
                    </div>
                </div>

            </div>
        </form >
    )
}

export default ExpenseItems