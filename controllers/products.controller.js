let ProductsModel = require('../models/products.model');

module.exports.save = async (req, res) => {
    const products = new ProductsModel(req.body);
    let result = await products.save();
    res.json(result)
}

module.exports.find = async (req, res) => {
    let result = await ProductsModel.find(req.params)
    res.json(result)
}

module.exports.put = async(req, res) =>{
    const products = new ProductsModel(req.body);
    let result = await products.updateOne();
    res.json(result)
}

module.exports.delete = async(req, res) =>{
    let result = await ProductsModel.deleteOne();
    res.json(result)
}

module.exports.findbyName = async(req, res)=>{
    const keyword = req.query.keyword;
    let result = await ProductsModel.find({ name: { $regex: keyword, $options: 'i' } });
    res.json(result)
}