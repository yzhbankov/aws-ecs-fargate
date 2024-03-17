export function to_upper_case() {
    return (value, params, outputArr) => {
        if (value) {
            outputArr.push(value.toUpperCase());
        }
        return undefined;
    };
}
