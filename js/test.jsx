var React = require('react')
var ReactDOM = require('react-dom')
var $ = require('jquery')
var Pokemon = require('react-pokemon')

var TestComp = React.createClass({
  getInitialState: function() {
    return {
      pokemon: []
    };
  },
  loadPokemon: function(){
    $.ajax({
      url: 'https://pokeapi.co/api/v2/pokemon/?limit=1000',
      success: function(res){
        this.setState({pokemon: res.results});
      }.bind(this)
    })
  },
  componentDidMount: function() {
    this.loadPokemon();
  },
  testFunction: function(e){
    $('#pokeName').val(e.target.id);
    $('.list-group-item').css("color", "");
    $('.list-group-item').css('background', '');
    $(e.target).css("color", "white");
    $(e.target).css('background', '#5468FF');
  },
  render: function(){
    var nodes = this.state.pokemon.map(function(poke){
      var name = poke.name;
      name =  name.charAt(0).toUpperCase() + name.slice(1);
      if(name.indexOf('Nidoran-m') > -1){
        return(
          <a href="#" className="list-group-item" id="Nidoran (M)" key={name}>Nidoran (M)</a>
        )
      } else if (name.indexOf('Nidoran-f') > -1) {
        return(
          <a href="#" className="list-group-item" id="Nidoran (F)" key={name}>Nidoran (F)</a>
        )
      } else {
        return(
          <a href="#" className="list-group-item" key={name} id={name}>{name}</a>
        )
      }
    })

    return(
      <div>

        <div className="list-group" id="pokemonSight" onClick={this.testFunction} style={{height: window.innerHeight +'px'}}>
            {nodes}
        </div>

      </div>
    )
  }
})

// ReactDOM.render(
//   <TestComp/>, document.getElementById('testContent')
// )

ReactDOM.render(
  <TestComp />,
  document.getElementById('testContent')
)
