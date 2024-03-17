import ModelBase from '../ModelBase.mjs';
import { UID } from '../../utils/index.mjs';

export class User extends ModelBase {
    /**
     * @method
     * @param {Object} params - user properties to save
     * @return {Promise<Object>}
     */
    async save(params) {
        // todo: implement
        return params
    }

    /**
     * @method
     * @param {Object} params - options for read user in repository
     * @param {String|undefined} params.uid - user unique identifier
     * @return {Promise<Object>}
     */
    async load(params) {
        // todo: implement

        return params;
    }

    /**
     * @method
     * @param {Object} params - options for read user in repository
     * @param {String} params.uid - user unique identifier
     * @return {Promise<Object>}
     */
    async remove(params) {
        //todo: implement

        return params;
    }
}
