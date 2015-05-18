var Dispatcher = require('../lib/Dispatcher');
var assign = require('lodash/object/assign');

var AppDispatcher = assign({}, Dispatcher.prototype, {

  handleViewAction: function (action) {
    this.dispatch({
      source: 'VIEW_ACTION',
      action: action
    });
  }

});

module.exports = AppDispatcher;
