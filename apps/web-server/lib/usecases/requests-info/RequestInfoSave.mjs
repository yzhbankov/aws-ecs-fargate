import UseCaseBase from '../UseCaseBase.mjs';
import { RequestsInfo } from '../../models/index.mjs';

export class RequestInfoSave extends UseCaseBase {
    static validationRules = {
        ip: ['strict_string'],
    };

    async execute(params) {
        const reqCount = await new RequestsInfo().incrementRequestsCount(params.ip);
        return { reqCount };
    }
}
