import React from "react";

export default function Counter(props){
    return(
        <h2 id="list-heading">
        {props.count} {props.count > 1 ? "tâches" : "tâche"} à faire 
      </h2>
    );
}