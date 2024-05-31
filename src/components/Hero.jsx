import React, { Component } from 'react'
import NewsItem from './NewsItem'
import imgPh from '../assets/imgPh.avif'

export class Hero extends Component {
    constructor() {
        super()
        console.log('hello')
        this.state = {
            articles: [],
            totalResults: 0,
            page: 1
        }
    }

    async componentDidMount() {
        let url = `https://newsapi.org/v2/top-headlines?country=us&category=${this.props.category}&apiKey=106eeac70d6f4fb3ab2b2992f1e61b39&pageSize=${this.props.pageSize}&page=${this.state.page}`
        let data = await fetch(url);
        let jsonData = await data.json();
        this.setState({ articles: jsonData.articles })
        this.setState({totalResults: jsonData.totalResults})
        console.log(jsonData)
    }

    prev = () => {
        console.log('prev')        
    }

    next = () => {
        console.log('next')
       
    }


    render() {
        return (
            <div className="container pt-20">
                <h1 className='text-5xl pb-10 text-center dark:text-white'>Today's top headlines</h1>
                <div className="row grid grid-cols-4 gap-5">
                    {this.state.articles.map((ele, index) => {
                        return <div className="" key={index}>
                            <NewsItem title={ele.title} image={ele.urlToImage ? ele.urlToImage : imgPh} description={ele.description ? ele.description : 'description not found'} url={ele.url} />
                        </div>
                    })}
                </div>
                    <div className="mt-10 flex gap-10 justify-between">
                        <button onClick={this.prev}  className={`h-12 w-40 font-semibold dark:bg-slate-100 dark:text-slate-900 border bg-slate-800 text-slate-100 text-2xl rounded-lg active:bg-slate-700 transition`}>previous</button>
                        <button onClick={this.next} className='h-12 w-40 font-semibold dark:bg-slate-100 dark:text-slate-900 border bg-slate-800 text-slate-100 text-2xl rounded-lg active:bg-slate-700 transition'>next</button>
                    </div>
            </div>
        )
    }
}

export default Hero