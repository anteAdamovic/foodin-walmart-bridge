const logger = require('../utility/logger');
const environment = require('../utility/environment');

const applyBuildConfiguration = function() {
    const args = process.argv;

    const env = args.find(arg => arg.includes('env'));

    if (env && env.indexOf('=') > 0) {
        logger.log('Parsing env from startup command:', args[2]);
        const parsedEnv = env.substring(env.indexOf('=') + 1, env.length);

        if (!environment.check(parsedEnv)) {
            logger.error(`Environment ${parsedEnv} is not suppored!`);
            process.exit(0);
        } else {
            environment.apply(parsedEnv);
        }
    } else if (process.env) {
        logger.log('Applying env from environment configuration:', process.env);

        if (process.env.environment && environment.check(process.env.environment)) {
            environment.apply(process.env.environment);
        }
    } else {
        logger.log('Applying default environment...');

        // Set default environment
        environment.apply(environment.DEVELOPMENT);
    }
}

module.exports = applyBuildConfiguration;