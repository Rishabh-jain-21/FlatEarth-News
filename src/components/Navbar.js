import React, { Component } from "react";
import flatEathIcon from "./planet-earth.png";
export default class Navbar extends Component {

    render() {
        function jadusReply() {
            alert("JAADOO want some sunlight so he is going to sun ");
        }
        return (<>
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
                <div className="container-fluid">
                    <a className="navbar-brand" href="/" ><div style={main_icon_styles}><img src={flatEathIcon} alt="flat-earth" style={{ height: "45px" }} />FLAT-Earth</div></a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                        <div className="navbar-nav">
                            <a className="nav-link active" aria-current="page" href="/">Home</a>
                            <a className="nav-link disabled" onClick={jadusReply} href="/">Contact-Aliens</a>
                        </div>
                    </div>
                </div>
            </nav>
        </>);
    }
}
const main_icon_styles = {
    display: "flex",
    alignItems: "center"
};