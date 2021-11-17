// import schema from './module';
import schema from './modules';
import Server from './server';
import config from './config/configurations';

const server = new Server(config);

(() => {
  server.bootstrap().setupApollo(schema);
})();
