import { ERROR_CODE, HTTP_STATUS_CODE } from '../../system/constants.mjs';
import BaseError from './BaseError.mjs';

export class AuthorizationError extends BaseError {
    /**
     * @typedef {BaseError} AuthorizationError
     */

    constructor(error) {
        super(error, HTTP_STATUS_CODE.UNAUTHORIZED, ERROR_CODE.AUTHORIZATION_ERROR, true);
    }
}
