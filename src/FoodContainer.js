import React from 'react';
import Foods from './components/foods';

const FoodContainer = (props) => {
  return(
    <div>
    <Foods foods={props.foods}/>
    </div>
  );
}
export default FoodContainer;
