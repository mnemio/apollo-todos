import React, {Component} from "react";

import gql from "graphql-tag";
import { Query } from "react-apollo";

import TargetComponent from '../../components/Todos';
import ListItem from '../mutation/Todo';

export const QUERY = gql`
  {
    todos {
      _id
      type
    }
  }
`;

class Queried extends Component {
  render() {
    return (
      <Query query={QUERY}>
        {status => <TargetComponent ListItem={ListItem} status={status}/>}
      </Query>
    );
  }
}

export default Queried;
