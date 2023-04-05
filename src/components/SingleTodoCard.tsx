import React from "react";
import { TodoProps } from "../modal";
import { AiFillDelete, AiFillEdit } from "react-icons/ai";
import { MdDone } from "react-icons/md";
import "./inpstyle.css";
import { Draggable } from "react-beautiful-dnd";

interface SingleCardProps {
  todo: TodoProps;
  Todos: TodoProps[];
  setTodos: React.Dispatch<React.SetStateAction<TodoProps[]>>;
  setTodo: React.Dispatch<React.SetStateAction<string>>;
  index: number;
}

const SingleTodoCard = ({
  todo,
  Todos,
  setTodos,
  setTodo,
  index,
}: SingleCardProps) => {
  const handleEdit = (id: number) => {
    setTodos(Todos.filter((todo) => todo.id !== id));
    let todo = Todos.filter((todo) => todo.id == id);
    setTodo(todo[0].todo);
  };

  const handleDelete = (id: number) => {
    setTodos(Todos.filter((todo) => todo.id !== id));
  };

  const handleDone = (id: number) => {
    setTodos(
      Todos.map((todo) =>
        todo.id === id ? { ...todo, isDone: !todo.isDone } : todo
      )
    );
  };

  return (
    <Draggable draggableId={todo.id.toString()} index={index}>
      {(provided) => (
        <form
          className="todos_single"
          {...provided.draggableProps}
          ref={provided.innerRef}
          {...provided.dragHandleProps}
        >
          {todo.isDone ? (
            <s className="todos_single--text">{todo.todo}</s>
          ) : (
            <span className="todos_single--text">{todo.todo}</span>
          )}

          <div>
            <span className="icon" onClick={() => handleEdit(todo.id)}>
              <AiFillEdit />
            </span>
            <span className="icon" onClick={() => handleDelete(todo.id)}>
              <AiFillDelete />
            </span>
            <span className="icon" onClick={() => handleDone(todo.id)}>
              <MdDone />
            </span>
          </div>
        </form>
      )}
    </Draggable>
  );
};

export default SingleTodoCard;
