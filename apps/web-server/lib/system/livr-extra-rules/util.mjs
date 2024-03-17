export default {
    isPrimitiveValue(value) {
        if (typeof value === 'string') return true;
        if (typeof value === 'number' && isFinite(value)) return true;
        if (typeof value === 'boolean') return true;
        return false;
    },
    isNoValue(value) {
        return value === undefined || value === null || value === '';
    },
    isNoValueAllowNull(value) {
        return value === undefined || value === '';
    },
    looksLikeNumber(value) {
        if (!isNaN(+value)) return true;
        return false;
    },
    JSONPointer(object, pointer) {
        const parts = pointer.split('/');
        let value = object;

        for (const part of parts) {
            if (!value) break;
            value = value[part];
        }

        return value;
    },
    isStringValue(value) {
        if (typeof value == 'string') {
            return true;
        }
        return false;
    },
    isNumberValue(value) {
        if (typeof value == 'number') {
            return true;
        }
        return false;
    },
    
};
