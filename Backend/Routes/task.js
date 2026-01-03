const express = require('express')
const Router = express.Router()
const Taskcontroller = require('../Controllers/taskcontroller')


/**
 * Route : /api/tasks
 * Method : GET
 * Description : GET ALL THE tasks
 * Access : Public
 * Params : None
*/

Router.get('/', Taskcontroller.GetAllTasks)

/**
 * Route : /api/tasks
 * Method : POST
 * Description : Create a new task
 * Access : Public
 * Params : None
 */

Router.post('/', Taskcontroller.createTask)

/**
 * Route : /api/tasks/:id
 * Method : GET
 * Description : GET a task
 * Access : Public
 * Params : :id
*/

Router.get("/:id", Taskcontroller.GetAtask)


/**
 * Route : /api/tasks/:id
 * Method : Patch
 * Description : Update a task
 * Access : Public
 * Params : :id
*/

Router.patch('/:id', Taskcontroller.UpdateTask)

/**
 * Route : /api/tasks/:id
 * Method : DELETE
 * Description : Delete a task
 * Access : Public
 * Params : :id
*/

Router.delete('/:id', Taskcontroller.DeleteAtask)

module.exports = Router;

