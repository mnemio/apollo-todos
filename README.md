# apollo-todos

An example of how to create React presentational components separate from the Apollo 2.1 containers.

This is a very basic todos example, initially based on the todos examples at Apollo GraphQL for the Apollo Client 2.1
starting with the Mutations section at: https://www.apollographql.com/docs/react/essentials/mutations.html.
It has been modified to use a simple, localhost Express server implementation based on this tutorial:
https://dev-blog.apollodata.com/tutorial-building-a-graphql-server-cddaa023c035 with Apollo Engine and caching
enabled. Furthermore, the server implementation has been modified to only use MongoDB.

The point of this example is in the components and apollo-containers directories of the client/src. Here I broke
down the components from the Apollo Client examples into separate presentational components and container
components consisting of the Apollo 2.1 Query and Mutation components. This includes a component that is
composed of both a Query and a Mutation combined, which were originally in a single Todos component in the
tutorial and then broken apart into the following:

client/
    src/
        apollo-containers/
            mutation/
                Todo.js
            query/
                Todos.js
        components/
            Todo.js
            Todos.js

This establishes a design pattern by which the presentational components are pure React without any dependence
on Apollo. The apollo-container components are the aggregators that make use of these pure React components, which
can be reused without Apollo, such as in a Meteor and Redux based application.
