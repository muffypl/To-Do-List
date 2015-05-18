var AppDispatcher = require('../dispatcher/AppDispatcher');
var EventEmitter = require('events').EventEmitter;
var assign = require('lodash/object/assign');

var CHANGE_EVENT = 'change';

var _expenses = {};

/**
 * @param {string} text The content of the expense
 */
function create(text) {
  var id = Date.now();
  _expenses[id] = {
    id: id,
    complete: false,
    text: text
  };
}

var ExpenseStore = assign({}, EventEmitter.prototype, {

  getAll: function () {
    return _expenses;
  },

  emitChange: function () {
    this.emit(CHANGE_EVENT);
  },

  addChangeListener: function (callback) {
    this.on(CHANGE_EVENT, callback);
  },

  removeChangeListener: function(callback) {
    this.removeListener(CHANGE_EVENT, callback);
  },

  dispatcherIndex: AppDispatcher.register(function (payload) {
    var action = payload.action;
    var text;

    switch(action.actionType) {
      case 'EXPENSE_CREATE':
        create(action.text);
        ExpenseStore.emitChange();
        break;
    }

    return true;
  })

});

module.exports = ExpenseStore;