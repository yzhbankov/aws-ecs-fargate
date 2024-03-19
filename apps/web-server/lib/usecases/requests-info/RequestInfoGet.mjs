import UseCaseBase from '../UseCaseBase.mjs';
import { RequestsInfo } from '../../models/index.mjs';

export class RequestInfoGet extends UseCaseBase {
    static validationRules = {
        ip: ['strict_string'],
    };

    async execute(params) {
        const reqCount = await new RequestsInfo().readRequestsCount(params.ip);
        return { reqCount };
    }
}
