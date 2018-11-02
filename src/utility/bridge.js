const environment = require('./environment');
const http = require('http');

const bridge = {
    get: async function (query, category, start = 1) {
        while (query.includes(' ')) {
            query = query.replace(' ', '%20');
        }

        console.log('Walmart search:', query);

        console.log(`http://api.walmartlabs.com/v1/search?apiKey=${environment.authentication.apiKey}&query=${query}&sort=bestseller&responseGroup=full&categoryId=${category}&start=${start}`);

        return new Promise((resolve, reject) => {
            http.get({
                hostname: 'api.walmartlabs.com',
                path: `/v1/search?apiKey=${environment.authentication.apiKey}&query=${query}&sort=bestseller&responseGroup=full&categoryId=${category}&start=${start}`,
                agent: false
            }, (response) => {

                let data = '';
                response.on('data', (chunk) => data += chunk);
                response.on('end', () => {
                    resolve(JSON.parse(data));
                });

            });
        });
    }
};

module.exports = bridge;