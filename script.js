const Book = (props) => {
  return React.createElement("div", { className: "Book" }, [
    React.createElement("h2", {}, props.name),
    React.createElement("h2", {}, props.year),
    React.createElement("p", {}, props.price),
  ]);
};
const App = () => {
  return React.createElement("div", { className: "App" }, [
    React.createElement(
      "h1",
      { id: "title", className: "paragraph" },
      "Hello Pure React"
    ),
    React.createElement(Book, {
      name: "Vue for beginners",
      year: 2020,
      price: 50,
    }),
    React.createElement(Book, {
      name: "Angular for beginners",
      year: 2021,
      price: 60,
    }),
    React.createElement(Book, {
      name: "React for beginners",
      year: 2022,
      price: 70,
    }),
  ]);
};

ReactDOM.render(React.createElement(App), document.getElementById("root"));
