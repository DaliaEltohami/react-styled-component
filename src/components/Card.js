import React from "react";
import { CardSection } from "./styles/Card.styled";

export default function Card({ item: { id, title, body, image } }) {
  return (
    <CardSection direction={id % 2 === 0 ? "row-reverse" : "row"}>
      <div>
        <h2>{title}</h2>
        <p>{body}</p>
      </div>
      <div>
        <img src={`./images/${image}`}></img>
      </div>
    </CardSection>
  );
}
