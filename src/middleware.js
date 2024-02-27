const capturarIndice = (req, res, next) => {
    const indice = req.query.indice;
    if (indice !== undefined) {
        req.indice = parseInt(indice);
    }
    next();
};

module.exports = { capturarIndice };
