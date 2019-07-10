import React from 'react';
import Card from './foodCard.js'

const Foods = ({foods}) => {
  // console.log('props in foods',props)
  const displayFoods = foods.map( food => <Card key={food.id} {...food}/>)
    return(

      <div>
      {displayFoods}
      </div>

  )
}

export default Foods;
