import util from './util.mjs';

export function strict_bool() {
    return (value, params, outputArr) => {
        if (util.isNoValue(value)) return;
        if (!util.isPrimitiveValue(value)) return 'FORMAT_ERROR';
        
        if ([true].indexOf(value) >= 0) {
            outputArr.push(1);
            return;
        } else if ([false].indexOf(value) >= 0) {
            outputArr.push(0);
            return;
        }
        
        return 'NOT_BOOLEAN';
    };
}
