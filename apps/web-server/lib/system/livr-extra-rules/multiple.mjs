import util from './util.mjs';

export function multiple(multiplier) {
    return (value, params, outputArr) => {
        if (util.isNoValue(value)) return;
        if (!util.isPrimitiveValue(value)) return 'FORMAT_ERROR';
        if (!util.looksLikeNumber(value)) return 'NOT_DECIMAL';

        value += '';
        if (!/^(?:\-?(?:(?:[0-9]+\.[0-9]+)|(?:[0-9]+)))$/.test(value)) return 'NOT_DECIMAL';
        if (+value % multiplier !== 0) return `NOT_MULTIPLE_TO ${multiplier}`;
        outputArr.push(+value);
    };
}
