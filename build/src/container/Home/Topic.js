import React, { Component } from 'react';

export default class Topic extends Component {
    constructor(){
        super();
        this.state = {
            data:[]
        }
    }
    componentDidMount(){
        console.log(this.props);
        let url = this.props.location.pathname;
        console.log(url);
        fetch('https://cnodejs.org/api/v1'+url)
        .then((res)=>{
            return res.json();
        })
        .then((res)=>{
            console.log(res);
            this.setState({
                data: res.data
            })
        })
    }
    render() {
        return (
            <div className='topic'>
                <div className='t1'>
                    <h2>{this.state.data.title}</h2>
                    <span>·发布于8小时前 ·{this.state.data.visit_count}次浏览· 来自{this.state.data.tab}</span>
                </div>
                <div dangerouslySetInnerHTML={{ __html: this.state.data.content }} ></div>
            </div>
        )
    }
}


