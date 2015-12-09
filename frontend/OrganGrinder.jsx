var React = require('react');
var ReactDOM = require('react-dom');
var KeyListener = require('./util/KeyListener.js');
var Key = require('./components/Key.jsx');

var KeyStore = require("./stores/KeyStore.js");

window.KeyListener = KeyListener;

document.addEventListener('DOMContentLoaded', function(){
  ReactDOM.render(<Key note="C4"/>, document.getElementById('root'));
});
