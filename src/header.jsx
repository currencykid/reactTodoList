var React = require('react');
var ReactDOM = require('react-dom');

module.exports = React.createClass({
  getInitialState: function(){
    return {
      text: '' 
    }
  },
  render: function(){
    return <div className= "input-group">  
     <input 
     value = {this.state.text} 
     onChange = {this.handleInputChange}
     type="text" className="form-control" />
       <span className="input-group-btn">
        <button
        onClick = {this.handleClick}  
        className="btn btn-default" type="button"> 
          Add
        </button>
      </span>
    </div> 
  }, 
  handleClick: function(){
    // send value of text input to firebase
    this.props.itemsStore.push({
      text: this.state.text,
      done: false 
    }); 

    this.setState({text: ''}); 
  },
  handleInputChange : function(event){
    //whatever this event to just happened to, give me a DOM node reference to it
       this.setState({ text: event.target.value });
  }
});
