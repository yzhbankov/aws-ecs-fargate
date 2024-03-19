import { runUseCase } from '../../../utils/makeRequestHandler.mjs';
import { RequestInfoSave } from '../../../../usecases/index.mjs';

export default {
    async handleReqIp(req, res, next) {
        const promise = runUseCase(RequestInfoSave, {
            params: {
                ip: req.ip,
            },
        });
        await promise;
        return next();
    },
};
