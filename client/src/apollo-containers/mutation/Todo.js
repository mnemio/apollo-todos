import React, {Component} from "react";

import gql from "graphql-tag";
import {Mutation} from "react-apollo";

import SourceComponent from "../../components/Todo";

export const MUTATION = gql`
  mutation update_todo($_id: String!, $type: String!) {
    update_todo(_id: $_id, type: $type) {
      _id
      type
    }
  }
`;

class Mutated extends Component {
  render() {
    let {_id, type} = this.props;

    return (
      <Mutation mutation={MUTATION} key={_id}>
        {(mutate, status) => (
          <SourceComponent
            type={type}
            status={status}
            action={new_type => {
              mutate({
                variables: {_id, type: new_type},
                optimisticResponse: {
                  __typename: "Mutation",
                  update_todo: {
                    _id,
                    __typename: "Todo",
                    type: new_type
                  }
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