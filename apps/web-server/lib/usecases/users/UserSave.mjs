import UseCaseBase from '../UseCaseBase.mjs';
// import { User } from '../../models/index.mjs';

export class UserSave extends UseCaseBase {
    static validationRules = {
        email: ['strict_string', 'not_empty', 'required'],
        first_name: ['strict_string', 'optional'],
        second_name: ['strict_string', 'optional'],
        address: ['strict_string', 'optional'],
    };

    async execute(params) {
        // return new User().save(params);
        return { save: "Hello from user save" };
    }
}
