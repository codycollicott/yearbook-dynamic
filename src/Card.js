import React from 'react';
import './css/card.css';
function Card(props) {
  var featurePicStyle = {
    backgroundImage: 'url(' + props.field_picture + ')'
  };
  return (
    <div className="card">
      <div className="profilePic" style={featurePicStyle}> </div>
      <div className="cardBio">
        <div className="name"> <h2 className="text-weight-bold">{props.title}</h2> </div>
        <div className="degree text-small text-upper text-weight-light"> {props.field_class} </div>
        <div className="quote"> {props.field_quote} </div>
      </div>
    </div>
  );
}

export default Card;
