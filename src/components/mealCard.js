import React from 'react';
const Card = ({name ,id, foods}) => {
  const displayFoods = foods.map(food =>
    <p>{food.name}: {food.calories}</p>)
  return (
    <div>
      <h3>{name}</h3>
      {displayFoods}
    </div>
  )
}
export default Card
