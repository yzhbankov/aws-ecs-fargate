import LIVR from 'livr';
import extraRules from 'livr-extra-rules';
import * as extraRulesCustom from '../../livr-extra-rules/index.mjs';

export default function validation(validationRules, params) {
    const validator = new LIVR.Validator(validationRules);
    validator.registerRules({ ...extraRules, ...extraRulesCustom });
    
    const cleanParams = validator.validate(params);
    if (cleanParams) {
        return { data: cleanParams, error: false };
    }
    return { data: false, error: validator.getErrors() };
}
