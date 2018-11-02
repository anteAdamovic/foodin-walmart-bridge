const format = (items) => {
    return items.map(item => {
        return {
            id: item.itemId,
            name: item.name,
            category: item.categoryPath, // for testing
            price: item.salePrice,
            description: item.shortDescription,
            brand: item.brand,
            photo: item.thumbnailImage,
            rating: item.customerRating,
            bundle: item.bundle, // needed?
            reviews: item.numReviews, // needed?
            size: item.size,
            stock: item.stock // needed?
        };
    });
};

module.exports = format;