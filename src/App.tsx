import React, { useState } from "react";

import "./App.css";
import InputFeild from "./components/InputFeild";
import TodoList from "./components/TodoList";
import { TodoProps } from "./modal";
import { DragDropContext, DropResult } from "react-beautiful-dnd";

const App: React.FC = () => {
  const [Todo, setTodo] = useState<string>("");
  const [Todos, setTodos] = useState<TodoProps[]>([]);
  const [completedTodos, setCompletedTodos] = useState<TodoProps[]>([]);

  const handleAdd = (e: React.FormEvent) => {
    e.preventDefault();
    if (Todo) {
      setTodos([...Todos, { id: Date.now(), todo: Todo, isDone: false }]);
      setTodo("");
    }
  };
  const onDragEnd = (result: DropResult) => {
    const { source, destination } = result;
    if (!destination) {
      return;
    }
    if (
      destination.droppableId === source.droppableId &&
      destination.index === source.index
    ) {
      return;
    }
    let add,
      active = Todos,
      complete = completedTodos;
    if (source.droppableId === "TodosList") {
      add = active[source.index];
    }
  };
  // console.log(Todos, "Todos");
  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <div className="App">
        <span className="heading">Taskify</span>
        <InputFeild Todo={Todo} setTodo={setTodo} handleAdd={handleAdd} />
        <TodoList
          Todos={Todos}
          setTodos={setTodos}
          setTodo={setTodo}
          completedTodos={completedTodos}
          setCompletedTodos={setCompletedTodos}
        />
      </div>
    </DragDropContext>
  );
};

export default App;
