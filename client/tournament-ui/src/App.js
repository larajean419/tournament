import React, {Component} from 'react';

import './App.css';
import Axios from 'axios';

class App extends Component {

  constructor(props){
    super(props)
    this.state = {
      listWinner : []
    }
  }

  componentDidMount(){
    
    this.load()
  }

  load = () =>{
    const url = "http://localhost:8080/tournaments/winner"
    Axios.get(url)
    .then(winners => {
      
      this.setState({
        listWinner : winners.data
      })
    })
    .catch(err => console.log(err))
  }

  loadWinner = () =>{
    return this.state.listWinner.map((data,index) =>{
      return(
        <div key={index} className="row">
          <p>{data.id}</p>
          <div>Team-{data.versus[0].teamId} VS Team-{data.versus[1].teamId}</div>

        </div>
      )
    })
  }

  render(){
    return (
      <div className="App">
        <h1>HELLO WORLD</h1>
        <p>The winners are : </p>
       
        <ul>
    {this.loadWinner()}
        </ul>
      </div>
    );
  }
  
}

export default App;
