import util from './util.mjs';

export function bool() {
    return (value, params, outputArr) => {
        if (util.isNoValue(value)) return;
        if (!util.isPrimitiveValue(value)) return 'FORMAT_ERROR';

        if (['1', 1, 'true', true].indexOf(value) >= 0) {
            outputArr.push(1);
            return;
        } else if (['0', 0, 'false', false].indexOf(value) >= 0) {
            outputArr.push(0);
            return;
        }

        return 'NOT_BOOLEAN';
    };
}
