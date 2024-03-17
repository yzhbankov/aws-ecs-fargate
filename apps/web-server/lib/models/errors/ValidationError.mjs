import { ERROR_CODE, HTTP_STATUS_CODE } from '../../system/constants.mjs';
import BaseError from './BaseError.mjs';

export class ValidationError extends BaseError {
    /**
     * @typedef {BaseError} ValidationError
     */

    constructor(error) {
        super(error, HTTP_STATUS_CODE.UNPROCESSABLE_ENTITY, ERROR_CODE.VALIDATION_ERROR, true);
    }
}
