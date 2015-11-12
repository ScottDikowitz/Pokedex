var ToyIndexItem = React.createClass ({

  render: function(){
    return <li>Name: {this.props.toy.name} Happiness: {this.props.toy.happiness} Price: {this.props.toy.price}</li>;

  }

});
