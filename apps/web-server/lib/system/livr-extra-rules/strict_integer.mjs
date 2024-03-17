import util from './util.mjs';

export function strict_integer() {
    return (value, params, outputArr) => {
        if (util.isNoValue(value)) return;
        if (!util.isNumberValue(value)) return 'NOT_INTEGER';
    
        if (!Number.isInteger(value)) return 'NOT_INTEGER';
        outputArr.push(+value);
    };
}
