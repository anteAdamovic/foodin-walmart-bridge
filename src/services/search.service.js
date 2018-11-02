const { bridge, format, filter } = require('../utility');

class SearchService {
    async searchQuery(query, category = '976759') {
        try {
            let bridgeQueryResults = await bridge.get(query, category);
            const bridgeResults = []

            if (bridgeQueryResults.items) {
                bridgeQueryResults.items.forEach(item => bridgeResults.push(item));

                while (bridgeQueryResults.numItems + bridgeQueryResults.start < bridgeQueryResults.totalResults) {
                    bridgeQueryResults = await bridge.get(query, category, bridgeQueryResults.start + bridgeQueryResults.numItems);

                    if (bridgeQueryResults.items) {
                        bridgeQueryResults.items.forEach(item => bridgeResults.push(item));
                    }
                }

                return format(filter(bridgeResults));
            } else {
                return [];
            }
        } catch (e) {
            console.log(e.message);
            return false;
        }
    }
}

module.exports = new SearchService();