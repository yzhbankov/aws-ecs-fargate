import { MongoClient } from 'mongodb';
import { Repository } from '../repository/index.mjs';


/**
 * @function
 * @param {Object} options - database options
 * @param {String} options.connection - database connection string
 * @param {String} options.database - database name
 * @return {Object}
 */
export function createRepository(options) {
    console.log('createRepository ', options);
    const client = new MongoClient(options.connection);
    const db = client.db(options.database);

    return new Repository(db);
}
