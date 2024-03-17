import UseCaseBase from '../UseCaseBase.mjs';
// import { User } from '../../models/index.mjs';

export class UserGet extends UseCaseBase {
    static validationRules = {
        uid: ['strict_string'],
    };

    async execute(params) {
        // return new User().load(params);
        return { get: 'Hello from UserGet'};
    }
}
