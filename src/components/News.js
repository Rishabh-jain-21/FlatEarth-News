import React, { Component } from "react";
import NewsItem from "./NewsItem";
import '../App.css'
import Spinner from "./Spinner";
import PropTypes from 'prop-types';

class News extends Component {

    static defaultProps = {
        category: "world",
    }

    static propTypes = {
        country: PropTypes.string
    }



    articles = []
    constructor() {
        super();
        this.state = {
            articles: this.articles,
            loading: true,
            page: 2,
        }
    }

    async componentDidMount() {
        let url = `https://ndtv-api.rishabhjain48.repl.co/${this.props.category}`;
        let data = await fetch(url);
        let parsedData = await data.json();
        this.setState({ articles: parsedData, loading: false });
    }
    handlePreviousClick = async () => {
        if (this.state.page >= 1) {
            let url = `https://ndtv-api.rishabhjain48.repl.co/${this.props.category}/page-${this.state.page}`;
            console.log(url);
            this.setState({ loading: true });
            let data = await fetch(url);
            let parsedData = await data.json();
            this.setState({ articles: parsedData, page: this.state.page - 1, loading: false });
        }

    }
    handleNextClick = async () => {
        let url = `https://ndtv-api.rishabhjain48.repl.co/${this.props.category}/page-${this.state.page}`;
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
                        <button className="btn btn-dark" onClick={this.handlePreviousClick} disabled={this.state.page <= 2}>&larr; Previous</button>
                        <button className="btn btn-dark" onClick={this.handleNextClick} >Next &rarr;</button>
                    </div>
                }
            </div>
        );

    }
}
export default News;