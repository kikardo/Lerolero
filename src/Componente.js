import React, { Component } from 'react';
import './App.css';
import json_data from './frases.json';

class Componente extends Component {
  constructor(props) { //
  super(props);
  this.gerarFrase();
  this.state={
    frase: this.todasFrases[0],
    classeBody: ''
  }
}
gerarNumeroInteiro(min,max){
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max-min))  + min;
}
mudarfrase = event => {
  const fraseGenerator = this.todasFrases[this.gerarNumeroInteiro(0,9)];
  this.setState({
    frase: fraseGenerator,
    classeBody: 'color color--change'
  })
  setTimeout(()=> {
    this.setState({ 
      classeBody: 'color'
    })
  },600)
}
gerarFrase = () => {
  const totalFrases = json_data;
  this.todasFrases = totalFrases.map(frases => frases.frase);
}
  render() {
    return (
      <div className="container">
        <p className={this.state.classeBody}>{this.state.frase}</p>
        <button onClick={this.mudarfrase}>Gerar frase</button>
      </div>
    )
  }
}
export default Componente;


