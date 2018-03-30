import React from "react";

const Todo = ({action, status: {loading, error}, type}) => {
  let input;

  return (
    <div>
      <p>{type}</p>
      <form
        onSubmit={e => {
          e.preventDefault();
          action(input.value);
          input.value = "";
        }}
      >
        <input ref={node => {input = node;}}/>
        <button type="submit" disabled={loading}>Update Todo</button>
      </form>
      {error && <p>Error :( Please try again</p>}
    </div>
  );
};

export default Todo;