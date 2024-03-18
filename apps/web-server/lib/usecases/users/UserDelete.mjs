import UseCaseBase from '../UseCaseBase.mjs';
import { User, NotFoundError } from '../../models/index.mjs';

export class UserDelete extends UseCaseBase {
    static validationRules = {
        uid: ['strict_string', 'required'],
    };

    async execute(params) {
        const user = await new User().load(params);
        if (!user) {
            throw new NotFoundError(`User ${params} not found`);
        }
        return new User().remove(params);
    }
}
