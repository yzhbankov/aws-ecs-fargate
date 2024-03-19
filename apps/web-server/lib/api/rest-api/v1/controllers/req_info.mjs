import makeRequestHandler from '../../../utils/makeRequestHandler.mjs';
import { RequestInfoGet } from '../../../../usecases/index.mjs';

export default {
    get: makeRequestHandler(
        RequestInfoGet,
        (req) => ({
            ip: req.ip,
        }),
        (result, res) => {
            res.json(result);
        }
    ),
};
