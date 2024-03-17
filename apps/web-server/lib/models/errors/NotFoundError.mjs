import { ERROR_CODE, HTTP_STATUS_CODE } from '../../system/constants.mjs';
import BaseError from './BaseError.mjs';

/**
 * @swagger
 * components:
 *  schemas:
 *      NotFoundError:
 *          type: object
 *          properties:
 *              message:
 *                  type: string
 *              code:
 *                  type: string
 */

export class NotFoundError extends BaseError {
    /**
     * @typedef {BaseError} NotFoundError
     */

    /**
     * @param {string} message - Error message
     */
    constructor(message) {
        super(message, HTTP_STATUS_CODE.NOT_FOUND, ERROR_CODE.NOT_FOUND_ERROR, true);
    }
}
