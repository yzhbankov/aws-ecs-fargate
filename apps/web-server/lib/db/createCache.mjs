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
    console.log('createCache ', options);
    const client = redis.createClient({
        host: options.host,
        port: options.port // Redis default port
    });
    return new Cache(client);
}
