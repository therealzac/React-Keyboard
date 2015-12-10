var React = require('react');
var ReactDOM = require('react-dom');
var KeyListener = require('./util/KeyListener.js');
var Keyboard = require('./components/Keyboard.jsx');

var KeyStore = require("./stores/KeyStore.js");

window.KeyListener = KeyListener;

document.addEventListener('DOMContentLoaded', function(){
  ReactDOM.render(<Keyboard/>, document.getElementById('root'));
});
