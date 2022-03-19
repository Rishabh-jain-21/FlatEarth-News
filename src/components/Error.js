import React, { Component } from "react";
class Error extends Component {
    render() {
        return (
            <>
                <div style={{ display: "flex", justifyContent: "center", alignItems: "center", width: "100vw", height: "100vh" }}>
                    <div style={{ textAlign: "center", color: "grey" }}>
                        <h1>OOPS 404!</h1>
                        <h2>Page NOT FOUND!</h2>
                        <p>Seems like the page you are looking for doesn't exists or may be temporarily unavailable</p>
                    </div>
                </div>
            </>
        )
    }
}
export default Error;