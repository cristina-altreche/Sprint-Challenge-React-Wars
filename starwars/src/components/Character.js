// Write your Character component here
import React from "react";
import {
  Card,
  CardImg,
  CardText,
  CardBody,
  CardTitle,
  CardSubtitle,
  Button,
} from "reactstrap";

const Character = (props) => {
  const { charData } = props;

  return (
    <div className="char-container">
      {charData.map((characters) => {
        return (
          <Card>
            <CardTitle>{characters.name}</CardTitle>
            <CardImg src={characters.image}></CardImg>
          </Card>
        );
      })}
    </div>
  );
};

export default Character;
