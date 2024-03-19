export class UsersRepository {
    /**
     * @typedef {Class} UserRepository
     * @method getAll
     * @method getByUid
     * @method remove
     * @method add
     */

    /**
     * @param {Object} connection
    * */
    constructor(connection) {
        this.collection = connection.collection('users');
    }

    /**
     * @method
     * @return {Promise<Object>}
    * */
    async getAll() {
        return this.collection.find({}).toArray();
    }

    /**
     * @method
     * @param {String} uid
     * @return {Promise<Object>}
     * */
    async getByUid(uid) {
        const query = { uid };
        return this.collection.findOne(query);
    }

    /**
     * @method
     * @param {String} email
     * @return {Promise<Object>}
     * */
    async getByEmail(email) {
        const query = { email };
        return this.collection.findOne(query);
    }

    /**
     * @method
     * @param {String} uid
     * @return {Promise<Object>}
     * */
    async remove(uid) {
        const query = { uid };
        return this.collection.deleteOne(query);
    }

    /**
     * @method
     * @param {Object} user
     * @return {Promise<Object>}
     * */
    async add(user) {
        const result = await this.collection.insertOne(user);

        // Retrieve the saved entity with the generated ObjectId
        return await this.collection.findOne({ _id: result.insertedId });
    }
}
