import ModelBase from '../ModelBase.mjs';

export class RequestsInfo extends ModelBase {
    /**
     * @method
     * @param {String} ip - request ip address
     * @return {Promise<Object>}
     */
    async incrementRequestsCount(ip) {
        let count = await this.cache.get(ip);
        if (!count) {
            await this.cache.set(ip, 1);
            return count;
        }
        count = Number(count) + 1;
        await this.cache.set(ip, count);
        return count;
    }

    /**
     * @method
     * @param {String} ip - request ip address
     * @return {Promise<String>}
     */
    async readRequestsCount(ip) {
        return this.cache.get(ip);
    }
}
