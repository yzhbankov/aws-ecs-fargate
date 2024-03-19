import UseCaseBase from '../UseCaseBase.mjs';
import { User, ValidationError } from '../../models/index.mjs';

export class UserSave extends UseCaseBase {
    static validationRules = {
        email: ['strict_string', 'required'],
        first_name: ['strict_string', 'required'],
        second_name: ['strict_string', 'required'],
        address: ['strict_string', 'required'],
    };

    async execute(params) {
        const user = await new User().findByEmail(params.email);
        if (user) {
            throw new ValidationError(`User with email ${params.email} already exists`);
        }
        return new User().save(params);
    }
}
