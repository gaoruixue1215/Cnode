import React, { Component } from 'react'
import {Link,BrowserRouter as Router,Route} from 'react-router-dom';

import All from './Home/All';
import Good from './Home/Good';
import Share from './Home/Share';
import Job from './Home/Job';
import Ask from './Home/Ask';
import Topic from './Home/Topic';



export default class Home extends Component {
    render() {
        let url = this.props.match.url;
        return (
            <div>
                <div className='header'>
                    <Link to={url+'/all'} className='link'>全部</Link>
                    <Link to={url+'/good'} className='link'>精华</Link>
                    <Link to={url+'/share'} className='link'>分享</Link>
                    <Link to={url+'/ask'} className='link'>问答</Link>
                    <Link to={url+'/job'} className='link'>招聘</Link>
                    <Link to={url+'/topic'} className='link'></Link>
                </div>
                <div>
                    <Route exact path='/' component={All}/>
                    <Route exact path='/home/' component={All}/>
                    <Route path={`${url}/all`} component={All}/>
                    <Route path={`${url}/good`} component={Good}/>
                    <Route path={`${url}/share`} component={Share}/>
                    <Route path={`${url}/ask`} component={Ask}/>
                    <Route path={`${url}/job`} component={Job}/>
                    <Route path={`${url}/topic`} component={Topic}/>
                </div>
            </div>
        )
    }
}
