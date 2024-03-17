import { ERROR_CODE } from '../../system/constants.mjs';
import BaseError from './BaseError.mjs';

/**
 * @swagger
 * components:
 *  schemas:
 *      NotImplemented:
 *          type: object
 *          properties:
 *              message:
 *                  type: string
 *              code:
 *                  type: string
 */

export class NotImplemented extends BaseError {
    /**
     * @typedef {BaseError} NotFoundError
     */

    constructor(error) {
        super(error);

        this._code = ERROR_CODE.NOT_FOUND_ERROR;
        console.log('NotImplemented', this);
    }

    /**
     * @method
     * @return {String}
     */
    get code() {
        return this._code;
    }
}
