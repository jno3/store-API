export const getAllProductsStatic = async(req, res) => {
    return res.status(200).json({msg: 'products testing route'});
}

export const getAllProducts = async(req, res) => {
    return res.status(200).json({msg: 'products route'});
}
