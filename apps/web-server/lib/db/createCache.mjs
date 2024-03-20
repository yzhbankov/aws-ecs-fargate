import redis from 'redis';
import { Cache } from '../cache/index.mjs';


/**
 * @function
 * @param {Object} options - redis options
 * @param {String} options.host - redis connection host
 * @param {String} options.port - redis connection port
 * @return {Object}
 */
export function createCache(options) {
    console.log('options ', options);
    const client = redis.createClient({
        url: `redis://${options.host}:${options.port}`,
        socket: {
            tls: true,
            rejectUnauthorized: false,
        }
    });
    return new Cache(client);
}
