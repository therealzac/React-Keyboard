var React = require('react');
var ReactDOM = require('react-dom');
var KeyListener = require('./util/KeyListener.js');

window.KeyListener = KeyListener;

document.addEventListener('DOMContentLoaded', function(){
  ReactDOM.render(<span>React</span>, document.getElementById('root'));
});
