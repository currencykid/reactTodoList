var React = require('react');
var ReactDOM = require('react-dom');
var ReactFire = require('reactfire');
var Firebase = require('firebase'); 
var rootUrl = 'https://firstreacttodos.firebaseio.com/' 
var Header = require('./header'); 

var App= React.createClass({
  // with mixins we can take any methods in ReactFire and copy/paste them to our component
  mixins: [ReactFire],
  componentWillMount: function(){
    this.bindAsObject(new Firebase(rootUrl + 'items/'), 'items');
    // this.state.items => {}
  },
  // whenever data changes, this.state changes and causes re-render of component
  render: function() {
    return <div className= "row panel panel-default">
      <div className="col-md-8 col-md-offset-2">
        <h2 className="text-center">
          Todo List
        </h2>
        <Header /> 
      </div>
    </div>
  }
});

var element = React.createElement(App, {});
ReactDOM.render(element, document.querySelector('.container'));
