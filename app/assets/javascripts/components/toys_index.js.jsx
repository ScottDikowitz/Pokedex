var ToysIndex = React.createClass ({

  render: function(){
    debugger;
    var items = this.props.toys.map(function(toy){
      return <ToyIndexItem toy={toy}/>;
    });
    return <div>{items}</div>;
  }

});
