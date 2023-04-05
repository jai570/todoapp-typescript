import React from "react";
import { Droppable } from "react-beautiful-dnd";
import { TodoProps } from "../modal";
import "./inpstyle.css";
import SingleTodoCard from "./SingleTodoCard";

interface TodoListProps {
  Todos: TodoProps[];
  setTodos: React.Dispatch<React.SetStateAction<TodoProps[]>>;
  setTodo: React.Dispatch<React.SetStateAction<string>>;
  completedTodos: TodoProps[];
  setCompletedTodos: React.Dispatch<React.SetStateAction<TodoProps[]>>;
}

const TodoList = ({
  Todos,
  setTodos,
  setTodo,
  completedTodos,
  setCompletedTodos,
}: TodoListProps) => {
  return (
    <div className="container">
      <Droppable droppableId="TodosList">
        {(provided) => (
          <div
            className="todos"
            ref={provided.innerRef}
            {...provided.droppableProps}
          >
            <span className="todos_heading">Active Task</span>
            {Todos.map((todo, index) => (
              <SingleTodoCard
                index={index}
                todo={todo}
                key={todo.id}
                Todos={Todos}
                setTodo={setTodo}
                setTodos={setTodos}
              />
            ))}
            {provided.placeholder}
          </div>
        )}
      </Droppable>
      <Droppable droppableId="TodosRemove">
        {(provided) => (
          <div
            className="todos remove"
            ref={provided.innerRef}
            {...provided.droppableProps}
          >
            <span className="todos_heading">Completed Task</span>
            {completedTodos.map((todo, index) => (
              <SingleTodoCard
                index={index}
                todo={todo}
                key={todo.id}
                Todos={completedTodos}
                setTodo={setTodo}
                setTodos={setCompletedTodos}
              />
            ))}
            {provided.placeholder}
          </div>
        )}
      </Droppable>
    </div>
  );
};

export default TodoList;
