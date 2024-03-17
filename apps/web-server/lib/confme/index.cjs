const fs = require('fs');
const dotenv_defaults = require('dotenv-defaults');
const LIVR = require('livr');
const livrExtraRules = require('livr-extra-rules');

function replace(template, vars) {
    return template.replace(/\{\{(.+?)\}\}/g, (match, p1) => {
        // eslint-disable-next-line no-prototype-builtins
        if (vars.hasOwnProperty(p1)) {
            return vars[p1];
        }
        throw new Error(`Variable "${p1}" not set!`);
    });
}
function validateConfig(config, livrSchemaPath) {
    const livrRules = JSON.parse(fs.readFileSync(livrSchemaPath).toString());
    const validator = new LIVR.Validator(livrRules, true);
    validator.registerRules(livrExtraRules);

    const validConfig = validator.validate(config);

    if (!validConfig) {
        const error = {
            FAILED_CONFIG: config,
            ERRORS: validator.getErrors(),
        };
        throw new Error(JSON.stringify(error, null, 2));
    }

    return validConfig;
}

function confme(configPath, livrSchemaPath, options) {
    dotenv_defaults.config(options);
    const template = fs.readFileSync(configPath).toString();
    const configStr = replace(template, process.env);

    let config = {};

    try {
        config = JSON.parse(configStr);
    } catch (error) {
        console.error('CANNOT PARSE JSON:', configStr);
        throw error;
    }

    if (livrSchemaPath) {
        config = validateConfig(config, livrSchemaPath);
    }

    return config;
}

module.exports = confme;
