import React from 'react';
import Card from './mealCard.js'

const Meals = ({meals}) => {
  // console.log('props in meals',props)
  const displayMeals = meals.map( meal => <Card key={meal.id} {...meal}/>)

    return(

      <div>
        {displayMeals}
      </div>

    )
  }


export default Meals;
