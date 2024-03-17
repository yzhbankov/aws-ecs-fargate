import LIVR from 'livr';
import extraRules from 'livr-extra-rules';
import * as extraRulesCustom from '../system/livr-extra-rules/index.mjs';
import { ValidationError } from '../models/index.mjs';

export default class UseCaseBase {
    constructor() {
        this.validator = null;
    }

    async run(params) {
        const cleanParams = await this.validate(params);
        if (cleanParams) {
            return this.execute(cleanParams);
        }
        const errors = this.validator.getErrors();
        throw new ValidationError(JSON.stringify(errors));
    }

    async validate(params) {
        this.validator = new LIVR.Validator(this.constructor.validationRules);
        this.validator.registerRules({ ...extraRules, ...extraRulesCustom });

        return this.validator.validate(params);
    }
}
