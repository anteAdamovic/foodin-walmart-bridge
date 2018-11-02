const environment = require('./environment');

class Logger {
    
    log(...args) {
        console.log(...args);
    }

    error(...args) {
        console.error(...args);
    }

    debug(...args) {
        if (environment.getCurrent() == environment.DEVELOPMENT || environment.getCurrent() == environment.STAGING) {
            console.log(...args);
        }
    }

}

module.exports = new Logger()