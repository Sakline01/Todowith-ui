import React from "react";

const Show = ({ title, check, status, id, handleToggle, handleDelete, handleComplete }) => {
  return (
    <div className="show">
      <div>
        <div>
          <input onChange={(e) => e.target.checked} type="checkbox" onClick={() => handleComplete(id)} checked={check ? true : false} />

          <h2>{title}</h2>
        </div>
        <div>
          <button className={status ? "green" : "red"} onClick={() => { return (handleToggle(id)) }}>{status ? "T" : "F"}</button>
          <button onClick={() => handleDelete(id)}>X</button>
        </div>
      </div>
    </div>
  );
};

export default Show;