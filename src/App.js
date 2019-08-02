import React from "react";
import Cards from "./containers/Cards";
import data from "./assets/data/data";
import Button from "./components/Button";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Button type="reject" />
      <Cards cards={data} />
      <Button type="accept" />
    </div>
  );
}

export default App;
