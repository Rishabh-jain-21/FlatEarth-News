import React, { Component } from "react";
import '../App.css';
import flatEathIcon from "./planet-earth.png";
import { Link } from "react-router-dom";
export default class Navbar extends Component {

    render() {
        return (<>
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
                <div className="container-fluid">
                    <a className="navbar-brand" href="/" ><div style={main_icon_styles}><img src={flatEathIcon} alt="flat-earth" style={{ height: "45px" }} />FLAT-Earth</div></a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                        <div className="navbar-nav">
                            <Link className="nav-link active" aria-current="page" to="/world">World</Link>
                            <Link className="nav-link active" aria-current="page" to="/india">India</Link>
                            <Link className="nav-link active" aria-current="page" to="/education">Education</Link>
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