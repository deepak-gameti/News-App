import React, { Component } from 'react'
import NewsItem from './NewsItem'
import imgPh from '../assets/imgPh.avif'
import InfiniteScroll from 'react-infinite-scroll-component'

export class Hero extends Component {
    constructor() {
        super()
        console.log('hello')
        this.state = {
            articles: [],
            totalResults: 0,
            page: 1,
        }
       
    }

    async fetchArticles() {
        const { category, pageSize } = this.props;
        const { page } = this.state;
        let url = `https://newsapi.org/v2/top-headlines?country=us&category=${this.props.category}&apiKey=106eeac70d6f4fb3ab2b2992f1e61b39&pageSize=${pageSize}&page=${page}`
        let data = await fetch(url);
        let jsonData = await data.json();
        this.setState({
            articles: jsonData.articles,
            totalResults: jsonData.totalResults, 
        });
        

        console.log(jsonData);
    }

    async componentDidMount() {
        this.fetchArticles();
    }

    prev = async () => {
        if (this.state.page > 1) {
            await this.setState((prevState) => ({ page: prevState.page - 1 }));
            this.fetchArticles();
        }
    }

    next = async () => {
        if (this.state.page < Math.ceil(this.state.totalResults / this.props.pageSize)) {
            await this.setState((prevState) => ({ page: prevState.page + 1 }));
            this.fetchArticles();
        }
    }

    fetchMoreData = () => {
        this.state.articles.concat(jsonData.totalResults)
        this.fetchArticles();
    };


    render() {
       
        return (
            <>
                <div className='w-full h-full dark:bg-slate-800 dark:text-slate-100'>
                    <div className="container pt-20">
                        <h1 className='text-5xl pb-10 text-center dark:text-white'>Today's top headlines</h1>


                        <InfiniteScroll
                            className='overflow-hidden'
                            dataLength={this.state.articles.length}
                            next={this.fetchMoreData}
                            hasMore={this.state.articles.length !== this.state.totalResults}
                            loader={<h4>Loading...</h4>}
                        >
                            <div className="row grid grid-cols-4 gap-5 ">
                                {this.state.articles.map((ele, index) => {
                                    return <div className="" key={index}>
                                        <NewsItem title={ele.title} image={ele.urlToImage ? ele.urlToImage : imgPh} description={ele.description ? ele.description : 'description not found'} url={ele.url} />
                                    </div>
                                })}
                            </div>
                        </InfiniteScroll>


                        <div className="pb-10 mt-10 flex gap-10 justify-between">
                            <button onClick={this.prev} className={`h-12 w-40 font-semibold dark:bg-slate-100 dark:text-slate-900 border bg-slate-800 text-slate-100 text-2xl rounded-lg active:bg-slate-700 transition`}>previous</button>
                            <button onClick={this.next} className='h-12 w-40 font-semibold dark:bg-slate-100 dark:text-slate-900 border bg-slate-800 text-slate-100 text-2xl rounded-lg active:bg-slate-700 transition'>next</button>
                        </div>
                    </div>
                </div>
            </>
        )
    }
}

export default Hero