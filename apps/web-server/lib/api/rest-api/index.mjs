import express from 'express';
import middlewares from './middlewares.mjs';
import v1Router from './v1/router.mjs';

let server;
export const app = express();

app.use(middlewares.cors);
app.use(middlewares.json);
app.use(middlewares.urlencoded);

app.use('/api/v1/', v1Router);
app.get('/', (req, res) => {
    res.status(200).send({});
});

export function startServer({ serverPort }) {
    server = app.listen(serverPort, () => {
        console.log('Server listening on port:', serverPort);
    });
}

export async function stopServer() {
    if (!server) return;

    server.close();
    console.info('Server stopped');
}
