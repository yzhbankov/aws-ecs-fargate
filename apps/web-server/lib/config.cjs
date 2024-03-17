const path = require('path');
const confme = require('./confme/index.cjs');

function getEnvPath(env) {
    if (env === 'test') {
        return path.join(__dirname, '../.env.test');
    } else if (env === 'gitlab') {
        return path.join(__dirname, '../.env.gitlab');
    }
    return null;
}

const env_path = getEnvPath(process.env.NODE_ENV);

require('dotenv').config({ path: env_path });

const ROOT_SERVER_PATH = __dirname;

const config = confme(
    path.join(ROOT_SERVER_PATH, '../config/config.json'),
    path.join(ROOT_SERVER_PATH, '../config/config-schema.json')
);

module.exports = {
    config,
};
