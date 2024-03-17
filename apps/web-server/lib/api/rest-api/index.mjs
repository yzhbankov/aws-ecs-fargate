import os from 'os';
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
    let localIp = '';
    // Get network interfaces
    const networkInterfaces = os.networkInterfaces();

    // Iterate through each network interface
    Object.keys(networkInterfaces).forEach((interfaceName) => {
        networkInterfaces[interfaceName].forEach((iface) => {
            // Filter for IPv4 and non-internal interfaces
            if (iface.family === 'IPv4' && !iface.internal) {
                console.log(`Local IP Address: ${iface.address}`);
                localIp = iface.address;
            }
        });
    });
    res.status(200).send({ ip: localIp });
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
