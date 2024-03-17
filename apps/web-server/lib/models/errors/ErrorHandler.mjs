import { HTTP_STATUS_CODE } from '../../system/constants.mjs';

export class ErrorHandler {
    static handleInternalError(err) {
        if (err.message && err.stack) {
            console.error(`[ErrorHandler] ${err.message}, ${err.stack}`);
        } else {
            console.error(`[ErrorHandler] ${err}`);
        }
    }

    static handleRequestError(res, err) {
        if (!res || !err) {
            return undefined;
        }
        if (!err.isOperational) {
            ErrorHandler.handleInternalError(err);
        }
        res.status(err.httpCode || HTTP_STATUS_CODE.INTERNAL_SERVER_ERROR).json(err.userMessage);

        return undefined;
    }
}
