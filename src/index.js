import {NewsItem} from './App';
import React from 'react';
import  ReactDOM from 'react-dom';
import $ from 'jquery';

$.ajax({
  url: '/test.json'
}).then(function (items) {
  // Log the data so we can inspect it in the developer console.

  // Use a fake rank for now.
  ReactDOM.render(<NewsItem item={items[0]} rank={1}/>, document.getElementById('content'));
});

// const element2 = <NewsItem />;

// ReactDOM.render(element2, document.getElementById('content'));