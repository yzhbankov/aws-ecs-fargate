import { ERROR_CODE, HTTP_STATUS_CODE } from '../../system/constants.mjs';
import BaseError from './BaseError.mjs';

/**
 * @swagger
 * components:
 *  schemas:
 *      BadRequest:
 *          type: object
 *          properties:
 *              message:
 *                  type: string
 *              code:
 *                  type: string
 */

export class BadRequest extends BaseError {
    /**
     * @typedef {BaseError} BadRequest
     */

    /**
     * @param {string} message - Error message
     */
    constructor(message) {
        super(message, HTTP_STATUS_CODE.BAD_REQUEST, ERROR_CODE.BAD_REQUEST, true);
    }
}
