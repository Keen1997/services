const testController = require('./userController')

module.exports = (app) => {

  app.get('/users', testController.getUsers)
  app.get('/user/:id', testController.getUser)
  app.post('/user', testController.createUser)
  app.patch('/user/:id', testController.updateUser)

}