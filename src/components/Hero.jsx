import React, { Component } from 'react'
import NewsItem from './NewsItem'
import imgPh from '../assets/imgPH.jpg'
import InfiniteScroll from "react-infinite-scroll-component";
import Spinner from './Spinner';
import LoadingBar from 'react-top-loading-bar';

export class Hero extends Component {
    constructor(props) {
        super(props)
        console.log('hello')
        this.state = {
            articles: [],
            totalResults: 0,
            page: 1,
            progress: 0,
            loading: false,
            
        }
        document.title = `NA ${this.capitalizeFirstLetter(this.props.category)}`
    }

    capitalizeFirstLetter(string) {
        return string.charAt(0).toUpperCase() + string.slice(1);
    }

    async fetchArticles() {
        this.setState({ progress: 30, loading:true });

        const { category, pageSize } = this.props;
        const { page } = this.state;
        let url = `https://newsapi.org/v2/top-headlines?country=us&category=${category}&apiKey=106eeac70d6f4fb3ab2b2992f1e61b39&pageSize=${pageSize}&page=${page}`
        let data = await fetch(url);
        this.setState({ progress: 50 });
        let jsonData = await data.json();
        this.setState({
            articles: jsonData.articles,
            totalResults: jsonData.totalResults,
            progress:100,
            loading: false
        });
        console.log(jsonData);
        console.log(this.state.totalResults)
    }
    _
    async componentDidMount() {
        this.fetchArticles();
    }

    // prev = async () => {
    //     if (this.state.page > 1) {
    //         await this.setState((prevState) => ({ page: prevState.page - 1 }));
    //         this.fetchArticles();
    //     }
    // }

    next = async () => {
        if (this.state.page < Math.ceil(this.state.totalResults / this.props.pageSize)) {
            await this.setState((prevState) => ({ page: prevState.page + 1 }));
            this.fetchArticles();
        }
    }

    fetchMoreData = async () => {
        this.setState({ page: this.state.page + 1, progress:30, loading:true })

        const { category, pageSize } = this.props;
        const { page } = this.state;
        let url = `https://newsapi.org/v2/top-headlines?country=us&category=${category}&apiKey=106eeac70d6f4fb3ab2b2992f1e61b39&pageSize=${pageSize}&page=${page}`
        let data = await fetch(url);
        this.setState({ progress: 50 });
        let jsonData = await data.json();

        this.setState({
            articles: jsonData.articles.concat(jsonData.articles),
            totalResults: jsonData.totalResults,
            progress: 100,
            loading:false            
        });


    };


    render() {
        return (
            <>
                <div className='w-full h-full dark:bg-slate-800 dark:text-slate-100'>
                <div >
                    <LoadingBar
                        color='#f11946'
                        progress={this.state.progress}
                        onLoaderFinished={() => this.setState({progress:0})}
                    />
                    {/* <button onClick={() => this.setState(this.state.progress + 10)}>Add 10%</button>
                    <button onClick={() => this.setState(this.state.progress + 20)}>Add 20%</button>
                    <button onClick={() => this.setState(100)}>Complete</button>
                    <br /> */}
                </div>
                    <div className="container pt-16">
                        <h1 className='text-5xl pb-20 text-center dark:text-white'>{`Top Headlines - ${this.capitalizeFirstLetter(this.props.category)}`}</h1>

                        <InfiniteScroll
                            dataLength={this.state.articles.length}
                            next={this.fetchMoreData}
                            hasMore={this.state.articles.length !== this.state.totalResults}
                            loader={this.state.loading ? <Spinner /> : <hr className='bg-slate-500 h-5 my-20'/>}
                        >
                            <div className="container">
                                <div className="row grid grid-cols-4 gap-5">
                                    {this.state.articles.map((ele, index) => {
                                        return <div className="" key={index}>
                                            <NewsItem title={ele.title} image={ele.urlToImage ? ele.urlToImage : imgPh} description={ele.description ? ele.description : 'description not found'} url={ele.url} />
                                        </div>

                                    })}
                                </div>
                            </div>
                        </InfiniteScroll>






                        {/* <div className="pb-10 mt-10 flex gap-10 justify-between">
                        <button onClick={this.prev} className={`h-12 w-40 font-semibold dark:bg-slate-100 dark:text-slate-900 border bg-slate-800 text-slate-100 text-2xl rounded-lg active:bg-slate-700 transition`}>previous</button>
                        <button onClick={this.next} className='h-12 w-40 font-semibold dark:bg-slate-100 dark:text-slate-900 border bg-slate-800 text-slate-100 text-2xl rounded-lg active:bg-slate-700 transition'>next</button>
                    </div> */}
                    </div>
                </div>
            </>
        )
    }
}

export default Hero