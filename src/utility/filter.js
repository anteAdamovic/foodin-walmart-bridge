const filter = (data) => {
    return data.filter(d => 
        d.stock != 'NOT_AVAILABLE' &&
        (d.categoryPath && d.categoryPath.includes('Food'))
    );
};

module.exports = filter;