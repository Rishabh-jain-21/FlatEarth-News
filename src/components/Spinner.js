import React, { Component } from 'react'
import loader from "./loader.gif";
export class Spinner extends Component {
    render() {
        return (
            <div className='text-center my-3'>
                <img src={loader} alt="loader" style={{ width: "50px" }} />
            </div>
        )
    }
}

export default Spinner