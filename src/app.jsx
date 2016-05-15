var React = require('react');
var ReactDOM = require('react-dom');
var ReactFire = require('react-fire');
var Firebase = require('firebase'); 

var Hello = React.createClass({
  render: function() {
    return <h1 className="red">
      Hello!
    </h1>
  }
});

var element = React.createElement(Hello, {});
ReactDOM.render(element, document.querySelector('.container'));
