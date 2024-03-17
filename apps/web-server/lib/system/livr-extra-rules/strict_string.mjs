import util from './util.mjs';

export function strict_string() {
    return (value, params, outputArr) => {
        if (util.isNoValue(value)) {
            return undefined;
        }
        if (!util.isStringValue(value)) {
            return 'NOT_STRING';
        }
        
        outputArr.push(value + '');
        return undefined;
    };
}
