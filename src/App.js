import React, { Component } from 'react';
import Header from './components/Header'
import Form from './components/Form';
import Summary from './components/Summary';
import './App.css';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      selected: {
        Processor: {
            name: '17th Generation Intel Core HB (7 Core with donut spare)',
            cost: 700
          },
        "Operating System": {
            name: 'Ubuntu Linux 16.04',
            cost: 200
          },
        "Video Card":{
            name: 'Toyota Corolla 1.5v',
            cost: 1150.98
          },
        Display: {
            name: '15.6" UHD (3840 x 2160) 60Hz Bright Lights and Knobs',
            cost: 1500
          }
      }
    }

    // TODO: Can we fix our 'this' problem another way?
    this.updateFeature = this.updateFeature.bind(this);
  }

  updateFeature(feature, newValue) {
    const selected = Object.assign({}, this.state.selected);
    selected[feature] = newValue;
    this.setState({
      selected
    });
  }

  render() {

    return (
      <div className="App">

        <Header />

        <main>
          <Form features={this.props.features} selected={this.state.selected} onClick={this.updateFeature}/>
          <Summary selected={this.state.selected} />
        </main>
      </div>
    );
  }
}

export default App;
