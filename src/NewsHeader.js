import React from 'react';
import './css/NewsHeader.css'
import logo from './img/y18.gif'
import _ from 'lodash'

var NewsHeader= React.createClass({
  getLogo: function(){
    return (<div className='"newsHeader-logo'>
            <a href="https://www.ycombinator.com" >
            <img src={logo} alt="logo"/></a>
        </div>)
    },
  getLogin:function(){
        return(      <div className="newsHeader-login">
        <a className="newsHeader-textLink" href="https://news.ycombinator.com/login?whence=news">login</a>
      </div>)
    },
  getNav: function(){
    var navLinks = [{
        name:'new',
        url:'newest'
    },{
        name:'comments',
        url:'newcomments'
    },{
        name:'show',
        url:'show'
    },{
        name:'ask',
        url:'ask'
    },{
        name:'jobs',
        url:'jobs'
    },{
        name:'submit',
        url:'submit'
    }];

    return (
      <div className="newsHeader-nav">
        {_(navLinks).map(function (navLink) {
          return (
            <a key={navLink.url} className="newsHeader-navLink newsHeader-textLink" href={'https://news.ycombinator.com/' + navLink.url}>
              {navLink.name}
            </a>
          );
        }).value()}
      </div>
    );
  },
  getTitle: function(){
    return (
        <div className="newsItem-title">
          Hacker News
        </div>
        );
  },
  render: function() {
    return (
        <div className="newsHeader">
            {this.getLogo()}
            {this.getTitle()}
            {this.getNav()}
            {this.getLogin()}
        </div>
    );
  }
});

export default NewsHeader;
