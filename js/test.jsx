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
  },
  render: function(){
    var nodes = this.state.pokemon.map(function(poke){
      var name = poke.name;
      name =  name.charAt(0).toUpperCase() + name.slice(1);
      if(name.indexOf('Nidoran-m') > -1){
        return(
          <li id="Nidoran (M)" key={name}>Nidoran (M)</li>
        )
      } else if (name.indexOf('Nidoran-f') > -1) {
        return(
          <li id="Nidoran (F)" key={name}>Nidoran (F)</li>
        )
      } else {
        return(
          <li key={name} id={name}>{name}</li>
        )
      }
    })

    return(
      <div>

        <ul id="pokemonSight" onClick={this.testFunction}>
            {nodes}
        </ul>

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
