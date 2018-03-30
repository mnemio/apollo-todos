import React from "react";

const AddTodo = ({action, status: {loading}}) => {
  let input;

  return (
    <div>
      <form
        onSubmit={e => {
          e.preventDefault();
          action(input.value);
          input.value = "";
        }}
      >
        <input ref={node => {input = node;}}/>
        <button type="submit" disabled={loading}>Add Todo</button>
      </form>
    </div>
  );
};

export default AddTodo;