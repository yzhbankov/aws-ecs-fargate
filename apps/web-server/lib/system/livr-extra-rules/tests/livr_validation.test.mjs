import assert from 'assert';
import validation from './helper.mjs';

describe('livr validation', function () {
    describe('string', function() {
        it('should success cast int to string', async function() {
            const { data, error } = await validation({ value: ['string'] }, { value: 243 });
            
            assert.deepStrictEqual(data, { value: '243' }, `Should cast to string`);
            assert.strictEqual(error, false, `No Errors`);
        });
        it('should success cast decimal to string', async function() {
            const { data, error } = await validation({ value: ['string'] }, { value: 243.4 });
            
            assert.deepStrictEqual(data, { value: '243.4' }, `Should cast to string`);
            assert.strictEqual(error, false, `No Errors`);
        });
        it('should success string', async function() {
            const { data, error } = await validation({ value: ['string'] }, { value: 'www' });
            
            assert.deepStrictEqual(data, { value: 'www' }, `Should cast to string`);
            assert.strictEqual(error, false, `No Errors`);
        });
    });
    describe('strict_string', function() {
        it('should fail integer', async function() {
            const { data, error } = await validation({ value: ['strict_string'] }, { value: 243 });
            
            assert.strictEqual(data, false, `No Data`);
            assert.deepStrictEqual(error, { value: 'NOT_STRING' }, `Wrong value`);
        });
        it('should fail decimal', async function() {
            const { data, error } = await validation({ value: ['strict_string'] }, { value: 243.2 });
            
            assert.strictEqual(data, false, `No Data`);
            assert.deepStrictEqual(error, { value: 'NOT_STRING' }, `Wrong value`);
        });
        it('should success string', async function() {
            const { data, error } = await validation({ value: ['strict_string'] }, { value: 'sdf' });
    
            assert.deepStrictEqual(data, { value: 'sdf' }, `Wrong data`);
            assert.strictEqual(error, false, `Should no errors`);
        });
    });
    describe('integer', function() {
        it('should success integer as number', async function() {
            const { data, error } = await validation({ value: ['integer'] }, { value: 11 });
            
            assert.deepStrictEqual(data, { value: 11 }, `Wrong value`);
            assert.strictEqual(error, false, `No Errors`);
        });
        it('should success integer as string', async function() {
            const { data, error } = await validation({ value: ['integer'] }, { value: '11' });
            
            assert.deepStrictEqual(data, { value: 11 }, `Wrong value`);
            assert.strictEqual(error, false, `No Errors`);
        });
        it('should fails decimal as number', async function() {
            const { data, error } = await validation({ value: ['integer'] }, { value: 11.2 });
    
            assert.strictEqual(data, false, `No Data`);
            assert.deepStrictEqual(error, { value: 'NOT_INTEGER' }, `Wrong value`);
        });
        it('should fails integer as number', async function() {
            const { data, error } = await validation({ value: ['integer'] }, { value: 11 });
    
            assert.deepStrictEqual(data, { value: 11 }, `Wrong value`);
            assert.strictEqual(error, false, `No Errors`);
        });
    });
    describe('strict_integer', function() {
        it('should fail integer as string', async function() {
            const { data, error } = await validation({ value: ['strict_integer'] }, { value: '11' });
            
            assert.strictEqual(data, false, `No Data`);
            assert.deepStrictEqual(error, { value: 'NOT_INTEGER' }, `Wrong value`);
        });
        it('should fail decimal as string', async function() {
            const { data, error } = await validation({ value: ['strict_integer'] }, { value: '11.2' });
            
            assert.strictEqual(data, false, `No Data`);
            assert.deepStrictEqual(error, { value: 'NOT_INTEGER' }, `Wrong value`);
        });
        it('should success integer as number', async function() {
            const { data, error } = await validation({ value: ['strict_integer'] }, { value: 11 });
            
            assert.deepStrictEqual(data, { value: 11 }, `Wrong value`);
            assert.strictEqual(error, false, `No Errors`);
        });
        it('should fail decimal as number', async function() {
            const { data, error } = await validation({ value: ['strict_integer'] }, { value: 1.21 });
            
            assert.strictEqual(data, false, `No Data`);
            assert.deepStrictEqual(error, { value: 'NOT_INTEGER' }, `Wrong value`);
        });
    });
    describe('strict_integer with min value', function() {
        it('should success integer as low number', async function() {
            const { data, error } = await validation({ value: ['strict_integer', { min_number: 0 }] }, { value: -1 });

            assert.strictEqual(data, false, `Wrong value`);
            assert.deepStrictEqual(error, { value: 'TOO_LOW' }, `No Errors`);
        });
        it('should success integer as low string', async function() {
            const { data, error } = await validation({ value: ['strict_integer', { min_number: 0 }] }, { value: '-1' });

            assert.strictEqual(data, false, `Wrong value`);
            assert.deepStrictEqual(error, { value: 'NOT_INTEGER' }, `No Errors`);
        });
    });
    describe('decimal', function() {
        it('should success decimal as string', async function() {
            const { data, error } = await validation({ value: ['decimal'] }, { value: '11.1' });
            
            assert.deepStrictEqual(data, { value: 11.1 }, `Wrong value`);
            assert.strictEqual(error, false, `No Errors`);
        });
        it('should success integer as string', async function() {
            const { data, error } = await validation({ value: ['decimal'] }, { value: '11' });
            
            assert.deepStrictEqual(data, { value: 11 }, `Wrong value`);
            assert.strictEqual(error, false, `No Errors`);
        });
        it('should success decimal as number', async function() {
            const { data, error } = await validation({ value: ['decimal'] }, { value: 11.1 });
            
            assert.deepStrictEqual(data, { value: 11.1 }, `Wrong value`);
            assert.strictEqual(error, false, `No Errors`);
        });
        it('should success integer as number', async function() {
            const { data, error } = await validation({ value: ['decimal'] }, { value: 11 });
            
            assert.deepStrictEqual(data, { value: 11 }, `Wrong value`);
            assert.strictEqual(error, false, `No Errors`);
        });
    });
    describe('strict_decimal', function() {
        it('should fail decimal as string', async function() {
            const { data, error } = await validation({ value: ['strict_decimal'] }, { value: '11.1' });

            assert.strictEqual(data, false, `No Data`);
            assert.deepStrictEqual(error, { value: 'NOT_DECIMAL' }, `Wrong value`);
        });
        it('should fail integer as string', async function() {
            const { data, error } = await validation({ value: ['strict_decimal'] }, { value: '11' });

            assert.strictEqual(data, false, `No Data`);
            assert.deepStrictEqual(error, { value: 'NOT_DECIMAL' }, `Wrong value`);
        });
        it('should success integer as number', async function() {
            const { data, error } = await validation({ value: ['strict_decimal'] }, { value: 11 });
        
            assert.deepStrictEqual(data, { value: 11 }, `Wrong value`);
            assert.strictEqual(error, false, `No Errors`);
        });
        it('should success decimal as number', async function() {
            const { data, error } = await validation({ value: ['strict_decimal'] }, { value: 11.3 });
        
            assert.deepStrictEqual(data, { value: 11.3 }, `Wrong value`);
            assert.strictEqual(error, false, `No Errors`);
        });
    });
    describe('bool', function() {
        it('should success true as bool', async function() {
            const { data, error } = await validation({ value: ['bool'] }, { value: true });
            
            assert.deepStrictEqual(data, { value: 1 }, `Wrong value`);
            assert.strictEqual(error, false, `No Errors`);
        });
        it('should success true as string', async function() {
            const { data, error } = await validation({ value: ['bool'] }, { value: 'true' });
            
            assert.deepStrictEqual(data, { value: 1 }, `Wrong value`);
            assert.strictEqual(error, false, `No Errors`);
        });
        it('should success true as number', async function() {
            const { data, error } = await validation({ value: ['bool'] }, { value: 1 });
            
            assert.deepStrictEqual(data, { value: 1 }, `Wrong value`);
            assert.strictEqual(error, false, `No Errors`);
        });
        it('should success true as number string', async function() {
            const { data, error } = await validation({ value: ['bool'] }, { value: '1' });
            
            assert.deepStrictEqual(data, { value: 1 }, `Wrong value`);
            assert.strictEqual(error, false, `No Errors`);
        });
        it('should success false as bool', async function() {
            const { data, error } = await validation({ value: ['bool'] }, { value: false });
            
            assert.deepStrictEqual(data, { value: 0 }, `Wrong value`);
            assert.strictEqual(error, false, `No Errors`);
        });
        it('should success false as string', async function() {
            const { data, error } = await validation({ value: ['bool'] }, { value: 'false' });
            
            assert.deepStrictEqual(data, { value: 0 }, `Wrong value`);
            assert.strictEqual(error, false, `No Errors`);
        });
        it('should success false as number', async function() {
            const { data, error } = await validation({ value: ['bool'] }, { value: 0 });
            
            assert.deepStrictEqual(data, { value: 0 }, `Wrong value`);
            assert.strictEqual(error, false, `No Errors`);
        });
        it('should success false as number string', async function() {
            const { data, error } = await validation({ value: ['bool'] }, { value: '0' });
            
            assert.deepStrictEqual(data, { value: 0 }, `Wrong value`);
            assert.strictEqual(error, false, `No Errors`);
        });
    });
    describe('strict_bool', function() {
        it('should success true as bool', async function() {
            const { data, error } = await validation({ value: ['strict_bool'] }, { value: true });
            
            assert.deepStrictEqual(data, { value: 1 }, `Wrong value`);
            assert.strictEqual(error, false, `No Errors`);
        });
        it('should fail fail true as string', async function() {
            const { data, error } = await validation({ value: ['strict_bool'] }, { value: 'true' });
            
            assert.strictEqual(data, false, `No Data`);
            assert.deepStrictEqual(error, { value: 'NOT_BOOLEAN' }, `Wrong value`);
        });
        it('should fail fail true as number', async function() {
            const { data, error } = await validation({ value: ['strict_bool'] }, { value: 1 });
            
            assert.strictEqual(data, false, `No Data`);
            assert.deepStrictEqual(error, { value: 'NOT_BOOLEAN' }, `Wrong value`);
        });
        it('should fail fail true as number string', async function() {
            const { data, error } = await validation({ value: ['strict_bool'] }, { value: '1' });
            
            assert.strictEqual(data, false, `No Data`);
            assert.deepStrictEqual(error, { value: 'NOT_BOOLEAN' }, `Wrong value`);
        });
        it('should success false as bool', async function() {
            const { data, error } = await validation({ value: ['strict_bool'] }, { value: false });
            
            assert.deepStrictEqual(data, { value: 0 }, `Wrong value`);
            assert.strictEqual(error, false, `No Errors`);
        });
        it('should fail fail false as string', async function() {
            const { data, error } = await validation({ value: ['strict_bool'] }, { value: 'false' });
            
            assert.strictEqual(data, false, `No Data`);
            assert.deepStrictEqual(error, { value: 'NOT_BOOLEAN' }, `Wrong value`);
        });
        it('should fail fail false as number', async function() {
            const { data, error } = await validation({ value: ['strict_bool'] }, { value: 0 });
            
            assert.strictEqual(data, false, `No Data`);
            assert.deepStrictEqual(error, { value: 'NOT_BOOLEAN' }, `Wrong value`);
        });
        it('should fail fail false as number string', async function() {
            const { data, error } = await validation({ value: ['strict_bool'] }, { value: '0' });
            
            assert.strictEqual(data, false, `No Data`);
            assert.deepStrictEqual(error, { value: 'NOT_BOOLEAN' }, `Wrong value`);
        });
    });
    describe('to_upper_case', function() {
        it('should success one field', async function() {
            const { data, error } = await validation({ value: ['to_upper_case'] }, { value: 'enable' });
    
            assert.deepStrictEqual(data, { value: 'ENABLE' }, `Wrong value`);
            assert.strictEqual(error, false, `No Errors`);
        });
        it('should success two fields', async function() {
            const rules = {
                value: ['to_upper_case'],
                value2: ['strict_string'],
            }
            const { data, error } = await validation(rules, { value: 'enable1', value2: 'enable' });
    
            assert.deepStrictEqual(data, { value: 'ENABLE1', value2: 'enable' }, `Wrong value`);
            assert.strictEqual(error, false, `No Errors`);
        });
    });
    describe('null', function() {
        it('should success null', async function() {
            const rules = {
                value: ['strict_string', 'not_empty_allow_null', 'required_allow_null'],
            }
            const { data, error } = await validation(rules, { value: null });
        
            assert.deepStrictEqual(data, { value: null }, `Wrong value`);
            assert.strictEqual(error, false, `No Errors`);
        });
        it('should fail empty string', async function() {
            const rules = {
                value: ['strict_string', 'not_empty_allow_null', 'required_allow_null'],
            }
            const { data, error } = await validation(rules, { value: '' });
    
            assert.strictEqual(data, false, `No Data`);
            assert.deepStrictEqual(error, { value: 'CANNOT_BE_EMPTY' }, `Wrong value`);
        });
        it('should fail required', async function() {
            const rules = {
                value: ['strict_string', 'not_empty_allow_null', 'required_allow_null'],
            }
            const { data, error } = await validation(rules, { });
    
            assert.strictEqual(data, false, `No Data`);
            assert.deepStrictEqual(error, { value: 'REQUIRED' }, `Wrong value`);
        });
    });
});
