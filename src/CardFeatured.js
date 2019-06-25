import React from 'react';
import './css/featureCard.css';

function FeatureCard(props) {
  console.log(props);
  var featurePicStyle = {
    backgroundImage: 'url(' + props.field_picture + ')'
  };
  return (
    <div className="featuredCard flex">
      <div className="featurePic" style={featurePicStyle}> </div>
      <div className="bio">
        <div className="role text-upper text-letter-space text-small text-weight-light"> {props.role} </div>
        <div className="name"> <h2 className="text-weight-bold">{props.title}</h2> </div>
        <div className="degree text-small text-upper text-weight-light"> {props.field_class} </div>
        <div className="quote"> {props.field_quote} </div>
      </div>
    </div>
  );
}

export default FeatureCard;
