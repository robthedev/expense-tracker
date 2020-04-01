import React from 'react'

class Table extends React.Component {
    render() {
        return (
            <table class="table" className='table'>
                <thead>
                    <tr>
                        <th scope="col">Type</th>
                        <th scope="col">Name</th>
                        <th scope="col">Date</th>
                        <th scope="col">amount</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td id="type"></td>
                        <td id="name"></td>
                        <td id="date"></td>
                        <td id="amount"></td>
                    </tr>
                </tbody>
            </table>
        )
    }
}

export default Table
