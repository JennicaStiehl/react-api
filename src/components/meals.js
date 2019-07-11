import React from 'react';
import Card from './mealCard.js';
import '../meals.css';
import { MDBContainer } from 'mdbreact';

const Meals = ({meals}) => {
  const displayMeals = meals.map( meal => <Card key={meal.id} {...meal}/>)

    return(

      <MDBContainer className='meal-container'>
        {displayMeals}
      </MDBContainer>
    )
  }


export default Meals;
