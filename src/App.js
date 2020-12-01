import React from "react";

function Fluit(props) {
  return <h1>{props.name} is {props.val}</h1>;
}

const fluitList = [
  {name : "apple",korname : "사과"}
  ,{name : "calot",korname : "당근"}
  ,{name : "pear",korname : "배"}
  ,{name : "orange",korname : "오렌지"}
];

function App() {
  return (
    <div className="App">
      {fluitList.map(fluit => (<Fluit name={fluit.name} val={fluit.korname}/>))}
    </div>
  );
}

export default App;
