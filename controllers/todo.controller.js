const fs = require("fs");
const db = require("../config/db");


exports.getTodos = async (req, res) => {
    await db.query("select * from todos").then(result => {
        res.status(200).json({
            "data": result.rows
        })
    }).catch(error => {
        console.log("error", error)
        res.status(500).json({
            message: 'INTERNAL SERVER ERROR'
        })
    })
}

exports.postTodo = async (req, res) => {
    console.log("post2", req)
    const body = req.body;

    await db.query(`insert into todos (title, checked) values ('${body.title}', ${body.checked})`).then(result => {
        res.status(200).json({
            "status": "Success"
        })
    }).catch(error => {
        console.log("error post", error)
        res.status(500).json({
            message:'INTENRAL SERVER ERROR'
        })
    })
}
  
exports.putTodo = async (req, res) => {
    const body = req.body;
    const id = req.query.id;

    await db.query(`update todos set title='${body.title}', checked = ${body.checked} where id=${id}`)
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
 
exports.deleteTodo = async  (req, res) => {
    const id = req.query.id

    await db.query(`delete from todos where id = ${id}`)
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
