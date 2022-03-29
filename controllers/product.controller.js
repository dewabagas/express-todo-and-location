const db = require("../config/db");
const Product = require("../models/index").Product;
const User = require("../models/index").User;
// get users
exports.getProducts = async (req, res) => {
    Product.findAll().then(result => {
        res.status(200).send({
            status: "SUCCESS",
            data: result
        })
    }).catch(error => {
        res.status(503).send({
            status: "FAILED",
            message: "failed load products"
        })
    })
}

exports.getProductsByCreator = async (req, res) => {
    User.findOne({where: {id: req.id}, 
        include: {
            model: Product,
            as: 'products'
        }
    }).then(result => {
        res.status(200).send({
            status: "SUCCESS",
            data: result
        })
    }).catch(error => {
        res.status(503).send({
            status: "FAILED",
            message: "failed load products"
        })
    })
}

exports.postProduct = async (req, res) => {
   console.log("reqe", req.id)
   const body = req.body;
//    const user_id = parseInt(req.params.id);
   const name = body.name;
   const price = body.price;
   const quantity = body.quantity;

   return Product.create({
       name: name,
       price: price,
       quantity: quantity,
       user_id: req.id
   }).then(result => {
       res.status(200).send({
           status: "SUCCESS",
           message: "Product created",
           data: result
       })
   }).catch(error => {
       res.status(503).send({
           status: "FAILED",
           message: "failed create Product"
       })
   })
}
  

