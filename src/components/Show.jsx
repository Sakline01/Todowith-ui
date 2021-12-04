import React from "react";

const Show = ({title,status,id,handleToggle,handleDelete}) => {
  return (
    <div className="show">
      <div>
          <div>
          <h2>{title}--{status?"true":"false"}</h2>
          </div>
          <div>
          <button className={status?"green":"red"} onClick={()=>{return(handleToggle(id))}}>T</button>
          <button onClick={()=>handleDelete(id)}>X</button>
          </div>
      </div>
    </div>
  );
};

export default Show;