import express from 'express';
import { graphqlExpress, graphiqlExpress } from 'apollo-server-express';
import bodyParser from 'body-parser';
import schema from './data/schema';
import compression from 'compression';
import { ApolloEngine } from 'apollo-engine';
import cors from 'cors';

import pause from 'connect-pause';

const GRAPHQL_PORT = 4000;
const ENGINE_API_KEY = 'YOUR_KEY_HERE'; // TODO

const engine = new ApolloEngine({
  apiKey: ENGINE_API_KEY,
});

const graphQLServer = express();

graphQLServer.use(compression());
graphQLServer.use('*', cors({ origin: 'http://localhost:3000' }));
graphQLServer.use(pause(1000));
graphQLServer.use('/graphql', bodyParser.json(), graphqlExpress({
  schema,
  context: {},
  tracing: true,
  cacheControl: true
}));
graphQLServer.use('/graphiql', graphiqlExpress({ endpointURL: '/graphql' }));

engine.listen({
  port: GRAPHQL_PORT,
  graphqlPaths: ['/graphql'],
  expressApp: graphQLServer,
  launcherOptions: {
    startupTimeout: 3000,
  },
}, () => {
  console.log('Listening!');
});
