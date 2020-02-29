const Pet = ({ name, animal, breed }) => {
return React.createElement("div", {}, [
  React.createElement("h1", {}, name),
  React.createElement("h2", {}, animal),
  React.createElement("h2", {}, breed)
]);
};

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
ReactDOM.render(React.createElement(App), document.getElementById("root"));
