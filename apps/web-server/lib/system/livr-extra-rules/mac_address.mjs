import util from './util.mjs';

const macRegexp = /^([0-9A-Fa-f]{2}){6}$/;

function isMacValid(value) {
    return !!value.match(macRegexp);
}

export function mac_address() {
    return (value, params, outputArr) => {
        if (util.isNoValue(value)) return;
        if (!isMacValid(value)) return 'WRONG_MAC_FORMAT';

        outputArr.push(value.toUpperCase());

        return;
    };
}
