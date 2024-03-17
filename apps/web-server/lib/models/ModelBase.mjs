export default class ModelBase {
    /**
     * @typedef {Class} ModelBase
     */

    /**
     * @type {Repository}
     */
    repository = null;

    constructor() {
        this.repository = ModelBase.repositoryInstance;
    }

    /**
     * @static
     * @return {Repository}
     */
    static repositoryInstance = null;

    /**
     * @static
     * @method
     */
    static setRepository(repository) {
        ModelBase.repositoryInstance = repository;
    }

    /**
     * @method
     * @param {Object} data - save data
     * @return {Promise<Object>}
     */
    async save(data) {
        return { data };
    }

    /**
     * @method
     * @param {Object} params - load options
     * @return {Promise<Object>}
     */
    // eslint-disable-next-line no-unused-vars
    async load(params) {
        return {};
    }

    /**
     * @method
     * @param {Object} params - parameters for entity remove
     * @return {Promise<Object>}
     */
    async remove(params) {
        return { params };
    }

    /**
     * @method
     * @param {Object} data - updated entity
     * @return {Promise<Object>}
     */
    async update(data) {
        return { data };
    }
}
