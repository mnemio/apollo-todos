import React from "react";

const Todos = ({ListItem, status: {loading, error, data}}) => {
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;

  return data.todos.map(({_id, type}) => <ListItem _id={_id} type={type}/>);
};

export default Todos;