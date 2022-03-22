const db = require("../config/db");
const User = require("../models/index").User;
// get users
exports.getUsers = async (req, res) => {
    User.findAll().then(result => {
        res.status(200).send({
            status: "SUCCESS",
            data: result
        })
    }).catch(error => {
        res.status(503).send({
            status: "FAILED",
            message: "failed load users"
        })
    })
}

exports.postUser = async (req, res) => {
    const body = req.body;

   const firstName = body.firstName;
   const lastName = body.lastName;
   const email = body.email;

   return User.create({
       firstName: firstName,
       lastName: lastName,
       email: email
   }).then(result => {
       res.status(200).send({
           status: "SUCCESS",
           message: "User created",
           data: result
       })
   }).catch(error => {
       res.status(503).send({
           status: "FAILED",
           message: "failed create user"
       })
   })
}
  
exports.putUser = async (req, res) => {
    const body = req.body;
    const id = req.query.id;

    await db.query(`update Users set title='${body.title}', checked = ${body.checked} where id=${id}`)
        .then(result => {
            res.status(200).json({
                "status": "Success"
            })
        }).catch(error => {
            console.log("error put", error)
            res.status(500).json({
                message:'INTENRAL SERVER ERROR'
            })
        }) 
   
}  
 
exports.deleteUser = async  (req, res) => {
    const id = req.query.id

    await db.query(`delete from Users where id = ${id}`)
        .then(result => {
            res.status(200).json({
                "status": "Success"
            })
        }).catch(error => {
            console.log("error del", error)
            res.status(500).json({
                message: 'INTERNAL SERVER ERROR'
            })
        })
    
}
