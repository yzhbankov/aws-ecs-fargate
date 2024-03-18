import UseCaseBase from '../UseCaseBase.mjs';
import { User, NotFoundError } from '../../models/index.mjs';

export class UserGet extends UseCaseBase {
    static validationRules = {
        uid: ['strict_string'],
    };

    async execute(params) {
        if (params.uid) {
            const user = await new User().load(params);
            if (!user) {
                throw new NotFoundError(`User ${params.uid} not found`);
            }
            return { users: [user] };
        }
        const users = await new User().load({});
        return { users };
    }
}
