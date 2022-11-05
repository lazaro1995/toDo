import React from "react";
import AddTask from "./addTask.jsx";
import { useState, useEffect } from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
const Home = () => {
  const [inputValue, setInputValue] = React.useState("");
  return (
    <div className="container bg-light">
      <div className="text-center">
        <h1 className="mt-4 bg-secondary text center">To DO</h1>
        <input className="mt-4"
          type="text"
          onChange={(e) => setInputValue(e.target.value)}
          value={inputValue}
          placeholder="What needs to be done ?"
        />
        <button className="btn-info ms-2" >
        To add task write a period
</button>
</div>
     <AddTask data={inputValue}/>
      
    </div>
  );
};
export default Home;
