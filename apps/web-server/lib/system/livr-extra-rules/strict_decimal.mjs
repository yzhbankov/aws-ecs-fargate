import util from './util.mjs';

export function strict_decimal() {
    return (value, params, outputArr) => {
        if (util.isNoValue(value)) return;
        if (!util.isNumberValue(value)) return 'NOT_DECIMAL';

        value += '';
        if (!/^(?:\-?(?:(?:[0-9]+\.[0-9]+)|(?:[0-9]+)))$/.test(value)) return 'NOT_DECIMAL';
        outputArr.push(+value);
    };
}
