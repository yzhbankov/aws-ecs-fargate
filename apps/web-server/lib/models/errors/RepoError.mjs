import BaseError from './BaseError.mjs';
import { ERROR_CODE, HTTP_STATUS_CODE } from '../../system/constants.mjs';

export class RepoError extends BaseError {
    /**
     * @typedef {BaseError} RepoError
     */

    constructor(error) {
        super(error, HTTP_STATUS_CODE.INTERNAL_SERVER_ERROR, ERROR_CODE.REPO_ERROR, false);
    }
}
