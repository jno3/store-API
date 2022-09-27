import Product from '../models/product.js';

export const getAllProductsStatic = async (req, res) => {
    const products = await Product.find({
        featured: true
    });
    
    return res.status(200).json({ products, nbHits: products.length });
}

export const getAllProducts = async (req, res) => {
    const {featured, company} = req.query;
    const queryObject = {}
    
    if(featured){
        queryObject.featured = featured === 'true'? true : false;
    }
    if(company){
        queryObject.company = company;
    }

    const products = await Product.find(queryObject);
    
    return res.status(200).json({ products, nbHits: products.length });
}

