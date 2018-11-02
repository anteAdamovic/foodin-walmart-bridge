const responseService = require('./response.service');
const environment = require('./environment');

class AuthenticationService {

    validateRequestAuthentication(request, response) {
        try {
            const token = request.headers['authentication'];

            if (token === environment.authentication.token) {
                return {
                    isValid: true
                };
            } else {
                throw new Error('Invalid token!');
            }
        } catch (e) {
            response.send(responseService.formatResponseError(e.message));

            return {
                isValid: false
            };
        }
    }
}

module.exports = new AuthenticationService();