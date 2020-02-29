import React from 'react';
import { render } from 'react-dom';
import Pet from './Pet';

const App = () => {
return React.createElement("div", {}, [
  React.createElement("h1", {}, "Adopt Me!"),
  React.createElement(Pet, {
    name: "Luna",
    animal: "Dog",
    breed: "Havanes"
  }),
  React.createElement(Pet, {
    name: "Peper",
    animal: "Dog",
    breed: "Havanes"
  }),
  React.createElement(Pet, {
    name: "Dunk",
    animal: "Dog",
    breed: "Havanes"
  })
]);
};
render(React.createElement(App), document.getElementById("root"));
