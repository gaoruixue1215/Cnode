import React, { Component } from 'react';
import {BrowserRouter as Router,Route} from 'react-router-dom';
import Header from './components/Header';

import Home from './container/Home';
import Start from './container/Start';
import Api from './container/Api';
import About from './container/About';
import Signin from './container/Signin';
import Topic from './container/Home/Topic';
import Silder from './components/Silder';


export default class App extends Component {
    render() {
        return (
            <Router>
                <div>
                    <Header/>
                    <div className="main">
                        <div className="content">
                            {/* <Route exact path='/' component={Home}/> */}
                            <Route path='/home' component={Home}/>
                            <Route path='/start' component={Start}/>
                            <Route path='/api' component={Api}/>
                            <Route path='/about' component={About}/>
                            <Route path='/signin' component={Signin}/>
                            <Route path='/topic' component={Topic}/>
                            
                        </div>
                        <div className="silder">
                            <Silder/>
                        </div>
                    </div>
                </div>
            </Router>   
        )
    }
}