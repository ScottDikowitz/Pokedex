var ToyIndexItem = React.createClass ({

  render: function(){
    return <li className="toy-list-item">Name: {this.props.toy.name} Happiness: {this.props.toy.happiness} Price: {this.props.toy.price}</li>;

  }

});
