import React, { Component } from 'react';
import "../App.css"
import noimg from "./imagesnotfound.png"
export default class NewsItem extends Component {
    render() {
        //destructuring props
        let { title, desc, url } = this.props;
        return (
            <div >
                <div className="card" >
                    <a href={`https://www.indiatoday.in/${this.props.readFull}`} target="_blank" rel="noreferrer" > <img style={{ height: "190px", }} src={url ? url : noimg} className="card-img-top" alt="some-news" /></a>
                    <div className="card-body">
                        <h5 className="card-title">{title}</h5>
                        <p className="card-text">{desc}...</p>
                        <a href={`https://www.indiatoday.in/${this.props.readFull}`} className="btn btn-sm btn-primary" target="_blank" rel="noreferrer">Read More...</a>
                    </div>
                </div>
            </div>);
    }
}