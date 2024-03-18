import UseCaseBase from '../UseCaseBase.mjs';
import { User } from '../../models/index.mjs';

export class UserSave extends UseCaseBase {
    static validationRules = {
        email: ['strict_string', 'required'],
        first_name: ['strict_string', 'required'],
        second_name: ['strict_string', 'required'],
        address: ['strict_string', 'required'],
    };

    async execute(params) {
        return new User().save(params);
    }
}
