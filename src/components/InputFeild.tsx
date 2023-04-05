import React, { useRef } from "react";
import "./inpstyle.css";
interface Props {
  Todo: string;
  setTodo: React.Dispatch<React.SetStateAction<string>>;
  handleAdd: (e: React.FormEvent) => void;
}
const InputFeild: React.FC<Props> = ({ Todo, setTodo, handleAdd }) => {
  const inputRef = useRef<HTMLInputElement>(null);
  return (
    <form
      className="input"
      onSubmit={(e) => {
        handleAdd(e);
        inputRef.current?.blur();
      }}
    >
      <input
        ref={inputRef}
        type="input"
        placeholder="Enter a text"
        className="input_box"
        value={Todo}
        // onChange={(e)=> setTodo(e.target.value)}
        onChange={(e) => setTodo(e.target.value)}
      />
      <button className="input_submit" type="submit">
        Go
      </button>
    </form>
  );
};

export default InputFeild;
