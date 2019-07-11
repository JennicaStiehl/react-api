import React, { Component } from 'react';
import './App.css';
import MealContainer from './MealContainer';
import FoodContainer from './FoodContainer';
import Meals from './components/meals';

class App extends Component {
  constructor() {
    super()
    this.state = {
      meals: [],
      foods: []
    }
     }
      componentDidMount() {
        fetch('http://localhost:8080/api/v1/meals')
        .then(res => res.json())
        .then((data) => {
          this.setState({ meals: data })
        })
        .catch(error => console.log(error))
      }
      componentDidMount1() {
        fetch('http://localhost:8080/api/v1/meals/1/foods')
        .then(res => res.json())
        .then((data) => {
          this.setState({ foods: data })
        })
        .catch(error => console.log(error))
    }

  render() {
    const { meals } = this.state;
    const { foods } = this.state;
    return (
      <div className="App">
      <h1>Meals!</h1>
      <MealContainer meals={meals} />
      </div>

    );
  }
}

export default App;
