import makeRequestHandler from '../../../utils/makeRequestHandler.mjs';
import { UserGet, UserDelete, UserSave } from '../../../../usecases/index.mjs';

export default {
    getAll: makeRequestHandler(
        UserGet,
        () => ({}),
        (result, res) => {
            res.json(result);
        }
    ),
    get: makeRequestHandler(
        UserGet,
        (req) => ({
            uid: req.params.uid,
        }),
        (result, res) => {
            res.json(result);
        }
    ),
    post: makeRequestHandler(
        UserSave,
        (req) => ({
            name: req.body.name,
            bridge: req.body.bridge,
            position: req.body.position,
        }),
        (result, res) => {
            res.json(result);
        }
    ),
    del: makeRequestHandler(
        UserDelete,
        (req) => ({
            uid: req.params && req.params.uid,
        }),
        (result, res) => {
            res.json(result);
        }
    ),
};
