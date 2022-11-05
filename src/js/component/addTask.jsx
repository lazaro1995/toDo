import React from "react";
import { useState, useEffect } from "react";
var tasks = []
const AddTask = ( props) => {
    var flag = true
    const [tasks, setTasks] = useState([]);
    const DeleteTask = (tasks, key ) => {
      setTasks(tasks.filter(task => task !== tasks[key])) 
      };
      var test = props.data
      for(var i = 0; i<= tasks.length-1; i++ ){
        console.log(tasks)
        if(props.data === tasks[i] ){
          flag = false
            return(
              <div class="alert alert-danger mt-4" role="alert">
              That task is already added!
            </div>
            )
        }
      }
      
        
        
      if( props.data[props.data.length-1] === "." && flag){
        tasks.push(test)
        
    return (
      
      <div className="container bg-light">
        

<ul className="mt-2 list-group">
{tasks.map((item, index) => (
  <div className="mt-4 ">
    <li className="row " key={index}>
      <div className="col-11 list-group-item">
      <h3 className="text-left">{item}{" "}</h3>
      </div>
      <div className="col-1 list-group-item">
      <button type="button" className="btn btn-danger box-1" onClick={() => DeleteTask(tasks, index)}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          fill="currentColor"
          className="bi bi-x"
          viewBox="0 0 16 16"
        >
          <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z" />
        </svg>
      </button>
      </div>
      
    </li>
  </div>
))}
</ul>
      </div>
    );
   
      }
      
      else if(tasks[0] != null){
        return(
          <div className="container bg-light">
        

<ul className="mt-2 list-group">
{tasks.map((item, index) => (
  <div className="mt-4 ">
    <li className="row" key={index}>
      <div className="col-11 list-group-item">
      <h3 className="text-left">{item}{" "}</h3>
      </div>
      <div className="col-1 list-group-item">
      <button type="button" className="btn btn-danger box-1" onClick={() => DeleteTask(tasks, index)}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          fill="currentColor"
          className="bi bi-x"
          viewBox="0 0 16 16"
        >
          <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z" />
        </svg>
      </button>
      </div>
      
    </li>
  </div>
))}
</ul>
      </div>
        )
        
      }
     else{
      return(
        <div>
          <ul class="list-group mt-4">
            <li class="list-group-item"> No tasks, add a task </li>
          </ul>
        </div>
      )
     }
       
      
      
  };


  export default AddTask;
  
