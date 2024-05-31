import React, { Component } from 'react'

export class NewsItem extends Component {
    render() {
        return (
            <div className="max-w-sm overflow-hidden bg-white border border-gray-200 rounded-lg shadow dark:bg-slate-900 dark:border-gray-700">
                <img className="rounded-t-lg" src={this.props.image} alt="" />
                <div className="p-3 dark:bg-slate-900">
                    <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{this.props.title}</h5>
                    <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">{this.props.description}</p>
                    <a href={this.props.url} className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Read more</a>
                </div>
            </div>
        )
    }
}

export default NewsItem