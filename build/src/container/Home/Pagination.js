import React,{ Component } from "react";
export default class Pagination extends Component{
    constructor(){
        super()
        this.state = {
            current:1,
            totalPage:10,
            pages:[]
        }
    }
    //初始
    componentDidMount(){
        var pages = this.state.pages;
        pages.push(<li key={0} onClick={this.goPrev.bind(this)}>《</li>);
        for(var i = 1;i <= this.state.totalPage; i++){
            if(i === this.state.pageCurrent){
                pages.push(<li key={i} onClick={this.change.bind(this,i)} className='active'>{i}</li>)
            }else{
                pages.push(<li key={i} onClick={this.change.bind(this,i)}>{i}</li>)
            }        
        }
        pages.push(<li key={this.state.totalPage + 1} onClick={this.goNext.bind(this)}>》</li>);
        return pages;
    }
    //点击页面
    change=(current)=>{
        var pages = this.state.pages;
        for(var i = 1;i <= this.state.totalPage; i++){
            if(i === current){
                pages[i]=<li key={i} onClick={this.change.bind(this,i)} className='active'>{i}</li>
            }else{
                pages[i]=<li key={i} onClick={this.change.bind(this,i)}>{i}</li>
            }        
        }
        this.setState({
            current:current,
            pages:pages
        })
    }
    // 页面向前
    goPrev(){
        var current = this.state.current;
        this.change( --current );
    }
    // 页面向后
    goNext(){
        var current = this.state.current;
        this.change( ++current );
    }
    render(){
        return(
            <div>
                <ul className ='p'>{this.state.pages}</ul>
            </div>
        );
    }
}