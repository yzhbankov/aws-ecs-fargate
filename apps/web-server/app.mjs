import { createRepository } from './lib/db/createRepository.mjs';
// import { createLogger, LoggerTypes } from '@rtls-platform/logger';
// import * as App from './lib/api/index.mjs';
import * as RestApi from './lib/api/rest-api/index.mjs';
import * as ConfigContainer from './lib/config.cjs';
// import { createNotificator, NotificatorTypes } from './lib/infrastructure/index.mjs';
// import { createDbConnection } from './lib/db/index.mjs';
// import UseCaseBase from './lib/usecases/UseCaseBase.mjs';
import ModelBase from './lib/models/ModelBase.mjs';


// Init Repository Layer
const repository = createRepository({
    connection: ConfigContainer.config.db.connection,
    database: ConfigContainer.config.db.database,
});

// Init Domain Model Layer
ModelBase.setRepository(repository);

// Init Controllers Layer (API)
RestApi.startServer({
    serverPort: ConfigContainer.config.listenPort,
});

// Add Global Unhandled Errors Handlers
async function exit() {
    await RestApi.stopServer();
    console.log('Exit');

    process.exit(0);
}

process.on('SIGTERM', async () => {
    console.error('SIGTERM signal caught');
    await exit();
});

process.on('SIGINT', async () => {
    console.error('SIGINT signal caught');
    await exit();
});

process.on('unhandledRejection', (error) => {
    console.error('unhandledRejection', error.stack);
});

process.on('uncaughtException', (error) => {
    console.error('uncaughtException', error.stack);
});
