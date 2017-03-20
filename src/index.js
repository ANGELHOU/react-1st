import NewsList from './NewsList'
import React from 'react';
import  ReactDOM from 'react-dom';
import $ from 'jquery';
import _ from 'lodash';

$.ajax({
  url: '/test.json'
}).then(function (items) {
  ReactDOM.render(<NewsList items={items}/>, document.getElementById('content'));
});
