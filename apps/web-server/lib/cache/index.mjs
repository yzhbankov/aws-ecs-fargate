export class Cache {
    /**
     * @typedef {Class} Cache
     * @property client
     */

    #client = null;

    /**
     * @param {Object} connection - database connection
     */
    constructor(connection) {
        this.#client = connection;
    }

    /**
     * @param {String} key - cache key
     * @param {String|Object} rawValue - cache value
     * @return {Promise<Object>}
     */
    async set(key, rawValue) {
        await this.#client.connect();
        const value = typeof rawValue === 'string' ? rawValue : JSON.stringify(rawValue);
        await this.#client.set(key, value);
        await this.#client.disconnect();
    }

    /**
     * @param {String} key - cache key
     * @return {Promise<String>}
     */
    async get(key) {
        await this.#client.connect();
        const result = await this.#client.get(key);
        await this.#client.disconnect();
        return result;
    }
}
