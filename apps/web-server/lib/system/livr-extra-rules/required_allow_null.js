import util from './util.mjs';

export function required_allow_null() {
    return value => {
        if (util.isNoValueAllowNull(value)) {
            return 'REQUIRED';
        }

        return;
    };
}
