var React = require('react')
var ReactDOM = require('react-dom')
var $ = require('jquery')
var Pokemon = require('react-pokemon')

var TestComp = React.createClass({
  getInitialState: function() {
    return {
      pokemon:''
    };
  },
  loadPokemon: function(){
    $.ajax({
      url: 'https://pokeapi.co/api/v1/pokedex/1/',
      success: function(res){
        this.setState({pokemon: res.pokemon});
      }.bind(this)
    })
  },
  componentDidMount: function() {
    this.loadPokemon();
  },
  render: function(){
    console.log(this.state.pokemon);

    var pokemonList = []
    for(var key in this.state.pokemon){
      var name = this.state.pokemon[key].name;
      name = name.charAt(0).toUpperCase() + name.slice(1);
      console.log(name);
      pokemonList.push(name)
    }

    var nodes = pokemonList.map(function(poke){
      return(
        <option value={poke}>{poke}</option>
      )
    })

    console.log(nodes);

    return(
      <div>

        <select id="pokemonSight">

          {nodes}

        </select>

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
