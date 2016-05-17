var React = require('react');

module.exports = React.createClass({
  render: function(){
    return <ul> 
    {this.renderList()}  
    </ul> 
  }, 
  renderList: function(){
    if(this.props.items && Object.keys(this.props.items).length === 0){
      return <h4> 
      Add a todo item
      </h4> 
    }
  }
});
