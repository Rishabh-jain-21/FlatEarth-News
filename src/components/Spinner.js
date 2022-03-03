import React, { Component } from 'react'
import loader from "./loader.gif";
export class Spinner extends Component {
    render() {
        return (
            <div className='text-center my-3' style={{ height: "80vh", width: "100%", display: "flex", alignItems: "center", justifyContent: "center" }}>
                <img src={loader} alt="loader" style={{ width: "50px" }} />
            </div>
        )
    }
}

export default Spinner