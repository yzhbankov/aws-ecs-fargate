export function not_empty_allow_null() {
    return value => {
        if (value !== undefined && value === '') {
            return 'CANNOT_BE_EMPTY';
        }

        return;
    };
}
