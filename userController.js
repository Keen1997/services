const con = require('./con')

module.exports = {

    getUsers(req, res) {
        sql = 'SELECT * FROM user'
        con.query(sql, function(error, result){
            if (!error) {
                res.send(result)
            }
            else {
                res.send(error)
            }
        })
    },

    getUser(req, res) {
        sql = 'SELECT * FROM user WHERE id='+req.params.id
        con.query(sql, function(error, result){
            if (!error) {
                res.send(result)
            }
            else {
                res.send(error)
            }
        })
    },

    createUser(req, res) {
        sql = 'INSERT INTO user(fname, lname, email, password, tel) VALUES (?, ?, ?, ?, ?)'
        con.query(sql, [req.body.fname, req.body.lname, req.body.email, req.body.password, req.body.tel], function (error, result) {

        if (!error) {
            res.send('registered user ')
        }
        else {
            res.send(error)
        }
      })
    },

    updateUser(req, res) {
        sql = 'UPDATE user SET fname=?, lname=?, email=?, password=?, tel=? WHERE id='+req.params.id
        con.query(sql, [req.body.fname, req.body.lname, req.body.email, req.body.password, req.body.tel], function (error, result) {

        if (!error) {
            res.send('update user ')
        }
        else {
            res.send(error)
        }
      })
    }
  
  
  }