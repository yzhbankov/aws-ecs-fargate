export default class RepoError extends Error {
    /**
     * @typedef {Class} BaseError
     */

    /**
     * @param {String} message - Error message
     * @param {number} httpCode - HttpCode
     * @param {String} errorCode - application errorCode
     * @param {boolean} isOperational  - is operational error
     */
    constructor(message, httpCode = 500, errorCode = 'INTERNAL_SERVER_ERROR', isOperational = false) {
        super(message);

        Error.captureStackTrace(this);
        this.httpCode = httpCode;
        this.errorCode = errorCode;
        this.isOperational = isOperational;
    }

    get code() {
        return this.errorCode;
    }

    /**
     * @method
     * @return {Object<message{String}, code{String}>}
     */
    get userMessage() {
        const err = {
            message: this.message,
            code: this.errorCode || '',
        };
        if (process.env.NODE_ENV === 'test') {
            console.error('\n\nError', err, '\n\n');
        }
        return err;
    }
}
