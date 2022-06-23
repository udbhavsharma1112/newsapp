import React, { Component } from 'react'
import Loading from './Loading';
import Newsitem from './Newsitem'
export class News extends Component {

    constructor() {
        super();
        this.state = {
            articles: [],
            loading: false,
            page: 1
        }
        
    }
    async update() {
        const URL = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=25207dd194d54193a8be83cdf117713d&page=${this.state.page}&pageSize=${this.props.pagesize}`;
        this.setState({ loading: true });
        let data = await fetch(URL);
        let parsedData = await data.json();
        console.log(parsedData);
        this.setState({ articles: parsedData.articles, totalResults: parsedData.totalResults, loading: false });

    }
     capitalizeFirstLetter(string) {
        return string.charAt(0).toUpperCase() + string.slice(1);
      }
    async componentDidMount() {
        this.update();
    }
    handleNext = async () => {

        this.setState({
            page: this.state.page + 1
        })
        this.update();
    }
    handlePrev = async () => {
        this.setState({
            page: this.state.page - 1
        })
        this.update();
    }
    render() {
        return (
            <div className={`container-fluid my-3`} style={{ background: this.props.isdark ? "#250656" : "white" }}>
                <div className={`d-flex justify-content-center text-${this.props.isdark ? "light" : "dark"}`}>
                    <h2 className='my-5'>Newshunt -Top {this.capitalizeFirstLetter(this.props.category)} headlines</h2>
                </div>
                {this.state.loading && <Loading />}
                <div className="row">
                    {!this.state.loading && this.state.articles.map((element) => {
                        return <div className="col-md-4 " style={{ color: this.props.isdark ? "gray" : "black" }} key={element.url}>
                            < Newsitem title={element.title ? element.title : ""} description={element.description ? element.description : ""} imageUrl={element.urlToImage} url={element.url} date={element.publishedAt} author={element.author} source={element.source.name} isdark={this.props.isdark} />
                        </div>
                    })}


                </div>
                <div className="container d-flex justify-content-between">
                    <button disabled={this.state.page <= 1} type="button" className="btn btn-dark" onClick={this.handlePrev}>&larr; Previous</button>
                    <button disabled={this.state.page + 1 > Math.ceil(this.state.totalResults / 20)} type="button" className="btn btn-dark" onClick={this.handleNext}>Next&rarr;</button>
                </div>

            </div>
        )
    }
}

export default News
