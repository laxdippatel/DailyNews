import React, { Component } from "react";
import NewsItems from "./NewsItems";
import Spinner from "./spinner";


class News extends Component {

  async componentDidMount() {
      let url = `https://newsapi.org/v2/top-headlines?country=in&category=${this.props.category}&apiKey=b69b98d60b4546ceaeb93e85bf15977a&page=1&pagesize=15`;
      this.setState({loading: true})
      let info = await fetch(url);
      let parsedData = await info.json()
      this.setState({data: parsedData.articles,
                    totalResults: parsedData.totalResults,
                    loading: false});
  }

  handlePrevClick = async() => {
    let url = `https://newsapi.org/v2/top-headlines?country=in&category=${this.props.category}&apiKey=b69b98d60b4546ceaeb93e85bf15977a&page=${this.state.page - 1}&pagesize=15`;
    this.setState({loading: true})
    let info = await fetch(url);
    let parsedData = await info.json()
    this.setState({page: this.state.page - 1,
        data: parsedData.articles,
        loading: false});
  }

  handleNextClick = async() => {
    let url = `https://newsapi.org/v2/top-headlines?country=in&category=${this.props.category}&apiKey=b69b98d60b4546ceaeb93e85bf15977a&page=${this.state.page + 1}&pagesize=15`;
    this.setState({loading: true})
    let info = await fetch(url);
    let parsedData = await info.json()
    this.setState({page: this.state.page + 1,
        data: parsedData.articles,
        loading: false});
  }

  constructor(props) {
    super(props);
    this.state = {
      data: [],
      page: 1,
      loading: ''
    };
  }

  render() {
    return (
      <div className="container my-4">
        {this.state.loading && <Spinner/>}
        <div className="row">
                {!this.state.loading && this.state.data.map( element => {
                    return <div className="col-md-4" key={element.url}>
                            <NewsItems imageUrl={element.urlToImage?element.urlToImage:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQlmHSUqlMAoxPUpANCElP2aPi1Ba_YTgTReQ&usqp=CAU"} title={element.title?element.title.slice(0, 70):""} content={element.content?element.content.slice(0, 180):"Not Available sorry !!!"} date={element.publishedAt} url={element.url}/>
                        </div>
                })}
                </div>
                <div className="d-flex justify-content-between">
                    <button disabled={this.state.page<=1} type="button" className="btn btn-dark" onClick={this.handlePrevClick}>Previous</button>
                    <button disabled={this.state.page + 1 > Math.ceil(this.state.totalResults / 15)} type="button" className="btn btn-dark" onClick={this.handleNextClick}>Next</button>
                </div>
      </div>
    );
  }
}

export default News;
