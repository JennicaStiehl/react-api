import React from 'react';
import { MDBContainer, MDBBtn, MDBCard, MDBCardBody, MDBCardImage, MDBCardTitle, MDBCardText, MDBCol, MDBRow } from 'mdbreact';

const Card = ({name ,id, foods}) => {
  const displayFoods = foods.map(food =>
    <p>{food.name}: {food.calories}</p>)
  return (
    <MDBContainer className='meal-container'>
    <MDBCard style={{ width: "20rem" }}>
      <MDBCardImage className="img-fluid" src="https://images.pexels.com/photos/1099680/pexels-photo-1099680.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500" waves />
        <MDBCardBody>
          <MDBCardTitle>{name}</MDBCardTitle>
            <MDBCardText>
                {displayFoods}
              </MDBCardText>
            </MDBCardBody>
          </MDBCard>
    </MDBContainer>
  )
}
export default Card
