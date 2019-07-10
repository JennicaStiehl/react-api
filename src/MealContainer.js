import React from 'react';
import Meals from './components/meals';

const MealContainer = (props) => {
  return(
    <div>
    <Meals meals={props.meals}/>
    </div>
  );
}
export default MealContainer;
