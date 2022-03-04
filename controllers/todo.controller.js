const fs = require("fs");


exports.getTodo = (req, res) => {
    fs.readFile(path, (err, data) => {
        res.json(JSON.parse(data))
      })
}

exports.postTodo = (req, res) => {
    const body = req.body;
    todos = JSON.parse(todos)
    todos.push(body)
    fs.writeFile(path, JSON.stringify(todos), (err) => {
        if(err) {
            console.log(err)
            res.status(400).json({message: 'ERROR'})
            return
        }
        res.json(body)
    })
}
  
exports.putTodo = (req, res) => {
    todos = JSON.parse(todos)
    const item = todos.find(item => item.id == req.params.id);
    const index = todos.map(value => value.id).indexOf(item.id);
    const isFound = todos.some(value => value.id == req.params.id)
    todos[index] = req.body
    
    if(isFound) {
        fs.writeFile(path, JSON.stringify(todos), (err) => {
            if(err) {
                console.log(err)
                res.status(400).json({message: 'ERROR'})
                return
            }
            res.send("data berhasil di ubah")
        })
    } else {
        res.status(400).send("data tidak ditemukan")
    }
}  
 
exports.deleteTodo = (req, res) => {
    todos = JSON.parse(todos)
    const item = todos.find(item => item.id == req.params.id);
    const index = todos.map(value => value.id).indexOf(item.id);
    const isFound = todos.some(value => value.id == req.params.id)
    if(isFound) {
        todos.splice(index, 1)
        fs.writeFile(path, JSON.stringify(todos), (err) => {
            if(err) {
                console.log(err)
                res.status(400).json({message: 'ERROR'})
                return
            }
            res.send("data berhasil dihapus")
        })
    } else {
        res.status(400).send("data tidak ditemukan")
    }
}
