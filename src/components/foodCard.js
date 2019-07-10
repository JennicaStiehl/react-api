import React from 'react';
const Card = ({name ,id, calories}) => {
  const displayFoods = (food =>
    <p>{food.name}: {food.calories}</p>)
  return (
    <div>
      <h3>{name}</h3>
      {displayFoods}
    </div>
  )
}
export default Card
