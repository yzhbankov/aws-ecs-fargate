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
            email: req.body.email,
            first_name: req.body.first_name,
            second_name: req.body.second_name,
            address: req.body.address,
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
