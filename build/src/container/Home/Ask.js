import React, { Component } from 'react';
import { Pagination } from 'antd';
import {Link} from 'react-router-dom';


export default class Ask extends Component {
    constructor(){
        super();
        this.state = {
            data:[],
            current:1
        }
    }
    componentDidMount(){
        fetch('https://cnodejs.org/api/v1/topics?tab=ask')
        .then((res)=>{
            return res.json();
        })
        .then((res)=>{
            console.log(res);
            this.setState({
                data: res.data
            })
            for(var i = 0;i<this.state.data.length;i++){
                var newdata = this.state.data;
                newdata[i].newtitle = this.state.data[i].title.length>50?this.state.data[i].title.substr(0,50)+'...':this.state.data[i].title;
                this.setState({
                    data:newdata
                })
            }
        })
    }
    handleChange=(page)=>{
        fetch('https://cnodejs.org/api/v1/topics?tab=all&page='+page)
        .then((res)=>{
            return res.json();
        })
        .then((res)=>{
            res.data.map((item)=>{
                this.setState({
                    data:res.data,
                    current: page,
                })
                for(var i = 0;i<this.state.data.length;i++){
                    var newdata = this.state.data;
                    newdata[i].newtitle = this.state.data[i].title.length>50?this.state.data[i].title.substr(0,50)+'...':this.state.data[i].title;
                    this.setState({
                        data:newdata
                    })
                }
            })
        })
    }
   
    render() {
        return (
            <div className="all">
                <ul>
                {
                    this.state.data.map((item,idx)=>
                        <li key={idx} className="list">
                            <img src={item.author.avatar_url} alt={item.author.loginname} className="list_img"/>
                            <p className="list_reply">{item.reply_count}<span className="list_visit">/{item.visit_count}</span></p>
                            <Link className="list_title" to={'/topic/'+item.id}>{item.newtitle}</Link>
                            <span className="list_time">1天前</span>
                            <img src={item.author.avatar_url} alt={item.author.loginname} className="list_img1"/>    
                        </li>)
                }
                </ul>
                <div className='page'>
                    <Pagination current={this.state.current} onChange={this.handleChange} total={100}/>
                </div>
            </div>    
        )
    }
}