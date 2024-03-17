import UseCaseBase from '../UseCaseBase.mjs';
// import { User } from '../../models/index.mjs';

export class UserDelete extends UseCaseBase {
    static validationRules = {
        uid: ['strict_string', 'required'],
    };

    async execute(params) {
        // return new User().remove(params);
        return { del: "Hello from user delete" };
    }
}
