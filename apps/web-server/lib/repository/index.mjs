import { UsersRepository } from './documents/index.mjs';

export class Repository {
    /**
     * @typedef {Class} Repository
     * @property users
     */

    /**
     * @type {UserRepository} returns DB access to user
     */
    users = null;

    /**
     * @param {Object} connection - database connection
     */
    constructor(connection) {
        this.users = new UsersRepository(connection);
    }
}
