var PlaygroundPane = require('../components/PlaygroundPane.react');
var React = require('react');
var SummaryPane = require('../components/SummaryPane.react');

module.exports = React.createClass({

  render: function () {
    return (
      <div className="budgetapp">
        <navbar className="navbar navbar-inverse navbar-fixed-top">
          <div className="container">
            <div className="navbar-header">
              <a className="navbar-brand" href="#">BudgetApp</a>
            </div>
          </div>
        </navbar>
        <div className="container">
          <div className="row">
            <div className="col-md-8"><PlaygroundPane /></div>
            <div className="col-md-4"><SummaryPane /></div>
          </div>
        </div>
      </div>
    );
  }

});
