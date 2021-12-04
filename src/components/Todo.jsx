import React, { useState } from "react";
import Input from "./Input";
import Show from "./Show";
const Todo = () => {
  const [todo, setTodo] = useState([]);
  const handleTaskCreate = (title) => {
    const payload = {
      title: title,
      status: false,
      id: todo.length + 1
    };
    setTodo([...todo, payload]);
  };
  const handleToggle=(id)=>{
    const updatedTodo= todo.map((item)=>(
        item.id===id?{...item,status:!item.status}:item
    ));
    setTodo(updatedTodo);
  }
  const handleDelete=(id)=>{
      setTodo(todo.filter((item)=>item.id!==id))
  }
  console.log(todo);
  return (
    <>
      <Input onTaskCreate={handleTaskCreate} />
      {todo.map((item) => (
        <>
        <Show handleDelete={handleDelete} handleToggle={handleToggle} key={item.id} id={item.id} title={item.title} status={item.status} />
        </>
      ))}
    </>
  );
};

export default Todo;