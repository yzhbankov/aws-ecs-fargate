import ModelBase from '../ModelBase.mjs';
import { UID } from '../../utils/index.mjs';

export class User extends ModelBase {
    /**
     * @method
     * @param {Object} params - user properties to save
     * @return {Promise<Object>}
     */
    async save(params) {
        const userUid = UID();
        return this.repository.users.add({ uid: userUid, ...params });
    }

    /**
     * @method
     * @param {Object} params - options for read user in repository
     * @param {String|undefined} params.uid - user unique identifier
     * @return {Promise<Object>}
     */
    async load(params) {
        if (params.uid) {
            return this.repository.users.getByUid(params.uid);
        }
        return this.repository.users.getAll();
    }

    /**
     * @method
     * @param {String} email - user email
     * @return {Promise<Object>}
     */
    async findByEmail(email) {
        return this.repository.users.getByEmail(email);
    }

    /**
     * @method
     * @param {Object} params - options for read user in repository
     * @param {String} params.uid - user unique identifier
     * @return {Promise<Object>}
     */
    async remove(params) {
        return this.repository.users.remove(params.uid);
    }
}
