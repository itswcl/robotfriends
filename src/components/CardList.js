import React from "react";
import Card from "./Card";

const CardList = ({ robots }) => {
  const cardComponent = robots.map((robot, i) => {
    const { id, name, email } = robot;
    return (
        <Card 
            key={i} 
            id={id} 
            email={email} 
            name={name} 
        />
    );
  });
  return <div>{cardComponent}</div>;
};

export default CardList;
