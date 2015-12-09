var Store = require('flux/utils').Store;
var AppDispatcher = require('../dispatcher/Dispatcher.js');
var Tones = require('../constants/Tones.js');

var KeyStore = new Store(AppDispatcher);

var _activeKeys = [];

module.exports = KeyStore;
