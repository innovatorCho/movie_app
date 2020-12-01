import React from "react";

function Fluit(props) {
  return <h1>{props.name} is {props.val}</h1>;
}

function App() {
  return (
    <div className="App">
      <h1>Hello!!</h1>
      <Fluit name="Apple" val="사과" />
      <Fluit name="calot" val="당근" />
      <Fluit name="pear" val="배" />
    </div>
  );
}

export default App;
