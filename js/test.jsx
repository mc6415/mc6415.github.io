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
  handleselChange: function(e){
    this.setState({pokemon: e.target.value});
  },
  render: function(){
    var pokemon = '';
    if(this.state.pokemon != ''){
      var pokemon = <Pokemon name={this.state.pokemon} />
    }
    return(
      <div>

        <select id="pokemonSight" onChange={this.handleselChange}>

          <option value="Bulbasaur">Bulbasaur</option>

          <option value="Pikachu">Pikachu</option>

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
