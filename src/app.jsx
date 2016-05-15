var React = require('react');
var ReactDOM = require('react-dom');
var ReactFire = require('reactfire');
var Firebase = require('firebase'); 
var rootUrl = 'https://firstreacttodos.firebaseio.com/' 

var App= React.createClass({
  // with mixins we can take any methods in ReactFire and copy/paste them to our component
  mixins: [ReactFire],
  componentWillMount: function(){
    this.bindAsObject(new Firebase(rootUrl + 'items/'), 'items');
    // this.state.items => {}
  },
  // whenever data changes, this.state changes and causes re-render of component
  render: function() {
    console.log(this.state); 
    return <h1 className="red">
      Hello!
    </h1>
  }
});

var element = React.createElement(App, {});
ReactDOM.render(element, document.querySelector('.container'));
