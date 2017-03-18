
import React from 'react';
import './css/NewsItem.css';
import url from 'url';
import moment from 'moment';


var NewsItem = React.createClass({
  getDomain: function(){
    return url.parse(this.props.item.url).hostname;
  },
  getCommentLink: function(){
    var commentText = 'discuss';
    if(this.props.item.kids && this.props.item.kids.length){
        commentText = this.props.item.kids.length + '  comments';
    }
    return (<a href={'https://news.ycombinator.com/item?id=' + this.props.item.id}>{commentText}</a>);
  },
  getSubtext: function(){
    return(
             <div className="newsItem-subtext">
        {this.props.item.score} points by <a href={'https://news.ycombinator.com/user?id=' + this.props.item.by}>{this.props.item.by}</a> {moment.utc(this.props.item.time * 1000).fromNow()} | {this.getCommentLink()}
      </div>
        );
  },
  getTitle: function(){
    return (
        <div className="newsItem-title">
        {this.props.item.title}
        </div>
        );
  },
  render: function() {
    return (
      <div className="newsItem">
        {this.getTitle()}
        {this.getSubtext()}
        <span className="newsItem-domain">({this.getDomain()})</span>
      </div>
    );
  }
});

module.exports = {NewsItem};
