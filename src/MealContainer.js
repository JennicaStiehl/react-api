import React from 'react';
import Meals from './components/meals';
import { MDBContainer, MDBCol, MDBRow } from 'mdbreact';


const MealContainer = (props) => {
  return(
    <div>
      <MDBContainer class="meal-container">

                <Meals meals={props.meals}/>

      </MDBContainer>
    </div>
  );
}
export default MealContainer;
