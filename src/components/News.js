import React, { Component } from "react";
import NewsItem from "./NewsItem";
import '../App.css'
import Spinner from "./Spinner";

class News extends Component {


    articles = []
    constructor() {
        super();
        this.state = {
            articles: this.articles,
            loading: true,
            page: 0,
        }
    }

    async componentDidMount() {
        let url = `https://india-today-api.rishabhjain48.repl.co/${this.props.category}/p/0`;
        let data = await fetch(url);
        let parsedData = await data.json();
        this.setState({ articles: parsedData, loading: false });
    }
    handlePreviousClick = async () => {
        if (this.state.page >= 0) {
            let url = `https://india-today-api.rishabhjain48.repl.co/${this.props.category}/p/${this.state.page - 1}`;
            this.setState({ loading: true });
            let data = await fetch(url);
            let parsedData = await data.json();
            this.setState({ articles: parsedData, page: this.state.page - 1, loading: false });
        }

    }
    handleNextClick = async () => {
        let url = `https://india-today-api.rishabhjain48.repl.co/${this.props.category}/p/${this.state.page + 1}`;
        this.setState({ loading: true });
        let data = await fetch(url);
        let parsedData = await data.json();
        this.setState({ articles: parsedData, page: this.state.page + 1, loading: false });
    }
    render() {

        return (
            <div className="container" >

                <h1 className="my-3">News is showing here</h1>
                <h2 className="news-titles" style={{ color: "grey", textAlign: "center" }}>{this.props.category}-news</h2>
                {this.state.loading && <Spinner />}

                <div className='news-container'>

                    {!this.state.loading && this.state.articles.map((elm, index) => {
                        return (<div className=" my-2" key={index} >
                            <NewsItem url={elm.urlToImage} title={elm.title} desc={elm.description ? elm.description.slice(0, 100) : ""} readFull={elm.url} />
                        </div>)
                    })}
                </div>
                {!this.state.loading &&
                    <div className="d-flex justify-content-between my-3">
                        <button className="btn btn-dark" onClick={this.handlePreviousClick} disabled={this.state.page < 1}>&larr; Previous</button>
                        <button className="btn btn-dark" onClick={this.handleNextClick} >Next &rarr;</button>
                    </div>
                }
            </div>
        );

    }
}
export default News;