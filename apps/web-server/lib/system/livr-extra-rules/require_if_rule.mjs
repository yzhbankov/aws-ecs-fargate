import util from './util.mjs';

export function require_if_rule(query) {
    let queryKey;
    let queryValue;

    if (arguments.length > 1) {
        queryKey = Object.keys(query)[0];
        queryValue = query[queryKey];
    }

    return (value, params) => {
        const isNoValue = util.isNoValue(value);
        if (!isNoValue || !queryKey) return;
        if (util.JSONPointer(params, queryKey) === queryValue && isNoValue) return `REQUIRED`;

        return;
    };
}
