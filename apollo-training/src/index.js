import schema from './module';
import Server from './server';
import config from './config/configurations';

const server = new Server(config);

(() => {
  server.bootstrap().setupApollo(schema);
})();
