import React, {Component} from "react";

import gql from "graphql-tag";
import {Mutation} from "react-apollo";

import {QUERY as UPDATE_QUERY} from '../query/Todos';
import SourceComponent from "../../components/AddTodo";

export const MUTATION = gql`
  mutation add_todo($type: String!) {
    add_todo(type: $type) {
      _id
      type
    }
  }
`;

class Mutated extends Component {
  render() {
    return (
      <Mutation mutation={MUTATION}>
        {(mutate, status) => (
          <SourceComponent
            status={status}
            action={type => {
              mutate({
                variables: {type},
                optimisticResponse: {
                  __typename: "Mutation",
                  add_todo: {
                    _id: Math.round(Math.random() * -1000000),
                    __typename: "Todo",
                    type
                  }
                },
                update: (cache, {data: {add_todo}}) => {
                  const data = cache.readQuery({query: UPDATE_QUERY});
                  data.todos.push(add_todo);
                  cache.writeQuery({query: UPDATE_QUERY, data});
                }
              });
            }}
          />
        )}
      </Mutation>
    );
  };
}

export default Mutated;