import gql from "../assets/gql.svg";
import js from "../assets/js.svg";
import next from "../assets/next.svg";
import react from "../assets/react.svg";
import sass from "../assets/sass.svg";
import sol from "../assets/solidity.png";
import ts from "../assets/ts.svg";
import node from "../assets/node.png";
import mongo from "../assets/mongo.svg";
import firebase from "../assets/firebase.png";

import { v4 as uuidv4 } from "uuid";

export const tech = [
  { id: uuidv4(), text: "Javascript", logo: js },
  { id: uuidv4(), text: "React", logo: react },
  { id: uuidv4(), text: "Node", logo: node },
  { id: uuidv4(), text: "Typescript", logo: ts },
  { id: uuidv4(), text: "NextJS", logo: next },
  { id: uuidv4(), text: "GraphQL", logo: gql },
  { id: uuidv4(), text: "MongoDB", logo: mongo },
  { id: uuidv4(), text: "Firebase", logo: firebase },
  { id: uuidv4(), text: "Solidity", logo: sol },
  { id: uuidv4(), text: "Sass", logo: sass },
];
