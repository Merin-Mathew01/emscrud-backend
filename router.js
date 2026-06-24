const express = require('express')
const {getAllemployees, addEmployee, deleteEmployee, getEmployeeDetails, updateEmployee} = require('./controllers/employeeController')

const route = express.Router()

route.get('/employees',getAllemployees)

route.post('/employees',addEmployee)

route.delete('/employee/:id',deleteEmployee)

route.get('/employee/:id',getEmployeeDetails)

route.put('/employee/:id',updateEmployee)

module.exports = route