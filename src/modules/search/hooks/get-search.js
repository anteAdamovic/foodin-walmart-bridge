const { authenticationService, responseService } = require('../../../utility');
const { searchService } = require('../../../services');

const getSearch = async function (request, response) {
    // const requestAuthentication = authenticationService.validateRequestAuthentication(request, response);

    // if (requestAuthentication.isValid) {
        const query = request.params.query;
        const category = request.query.category || null;

        console.log(category);

        if (!query) {
            response.send(responseService.formatResponseError('Unable to fetch empty query!'));
        }

        let searchResults;
        
        if (category) {
            searchResults = await searchService.searchQuery(query, category);
        } else {
            searchResults = await searchService.searchQuery(query);
        }

        if (searchResults) {
            response.send(responseService.formatResponseData(searchResults));
        } else {
            response.send(responseService.formatResponseError('Unable to fetch query results!'));
        }
    // }
};

module.exports = getSearch;