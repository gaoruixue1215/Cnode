import React, { Component } from 'react';

export default class Signin extends Component {
    render() {
        return (
            <div className='signin'>
                <p className='p1'>主页>登录</p>
                <div className='s1'>
                    <p>
                        用户名：<input type="text"/>
                    </p>
                    <p>
                        &nbsp; &nbsp;密码：<input type="password"/>
                    </p>
                    <p>
                        <button onClick={()=>this.props.history.push('/home/all')}>登录</button>
                    </p>
                </div>
                
            </div>
        )
    }
}



