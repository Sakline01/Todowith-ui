import React, { useState } from "react";
import Input from "./Input";
import Show from "./Show";
// import Showcomplete from "./ShowComplete";
const Todos = ({ key }) => {
  const [todo, setTodo] = useState([]);
  const [isComplete, setIsComplete] = useState(false);
  const handleTaskCreate = (title) => {
    const payload = {
      title: title,
      status: false,
      complete: false,
      id: todo.length + 1
    };
    setTodo([...todo, payload]);
  };
  const handleToggle = (id) => {
    const updatedTodo = todo.map((item) => (
      item.id === id ? { ...item, status: !item.status } : item
    ));
    setTodo(updatedTodo);
  }
  const handleComplete = (id) => {
    const updatedTodo = todo.map((item) => (
      item.id === id ? { ...item, complete: !item.complete } : item
    ));
    console.log(updatedTodo)
    setTodo(updatedTodo);
  }
  const handleDelete = (id) => {
    setTodo(todo.filter((item) => item.id !== id))
  }
  const handleComplete2 = (id) => {
    setIsComplete(t => !t);
  }
  return (
    <>
      <Input onTaskCreate={handleTaskCreate} />
      {isComplete ? todo.filter((item) => item.complete === true).map((item) => (
        <>
          <Show handleComplete={handleComplete} check={item.complete} handleDelete={handleDelete} handleToggle={handleToggle} key={item.id} id={item.id} title={item.title} status={item.status} />
        </>
      )) : todo.filter((item) => item.complete !== true).map((item) => (
        <>
          <Show handleComplete={handleComplete} check={item.complete} handleDelete={handleDelete} handleToggle={handleToggle} key={item.id} id={item.id} title={item.title} status={item.status} />
        </>
      ))}
      {todo.length ? isComplete ? <button onClick={handleComplete2}>Show Not Completed</button> : <button onClick={handleComplete2}>Show Completed</button> : null}
    </>
  );
};

export default Todos;