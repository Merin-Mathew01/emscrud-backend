const express = require('express')
const {getAllemployees, addEmployee, deleteEmployee, getEmployeeDetails, updateEmployee, importExcelData} = require('./controllers/employeeController')

const route = express.Router()

// get employee(includessearch and pagination)
route.get('/employees',getAllemployees)

// add employee
route.post('/employees',addEmployee)

// delete employee
route.delete('/employee/:id',deleteEmployee)

// get single employee details
route.get('/employee/:id',getEmployeeDetails)

// update employee details
route.put('/employee/:id',updateEmployee)

// import excel data
route.post('/importEmployee',importExcelData)

module.exports = route