var React = require('react');
var ReactDOM = require('react-dom');
var ReactFire = require('reactfire');
var Firebase = require('firebase'); 
var Header = require('./header'); 
var List = require('./list'); 
var rootUrl = 'https://firstreacttodos.firebaseio.com/' 

var App = React.createClass({
  // with mixins we can take any methods in ReactFire and copy/paste them to our component
  mixins: [ReactFire],
  // if at some point you get 'cannot read property blank of null'
  // look to state,,, might have to return initial state 
  getInitialState: function(){
    return {
      items: {},
      loaded: false
    }
  },
  componentWillMount: function(){
    fb = new Firebase(rootUrl + 'items/'); 
    this.bindAsObject(fb, 'items');
    fb.on('value', this.handleDataLoaded); 
    // Firebase emits value as soon as it sees data from server
  },
  // whenever data changes, this.state changes and causes re-render of component
  render: function() {
    return <div className= "row panel panel-default">
      <div className="col-md-8 col-md-offset-2">
        <h2 className="text-center">
          Todo List
        </h2>
        <Header itemsStore={this.firebaseRefs.items} /> 
        <div className = {"content " + (this.state.loaded ? 'loaded' : '')}>
        <List items={this.state.items}  /> 
        </div>
      </div>
    </div>
  }, 
  handleDataLoaded: function(){
     this.setState({loaded: true});  
  }
});

var element = React.createElement(App, {});
ReactDOM.render(element, document.querySelector('.container'));
