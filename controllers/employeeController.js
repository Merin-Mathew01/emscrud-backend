// Read employee data from db.json
const data = require('../db.json')

// Add employee controller - data from the form is taken from the req body and pushed into the array in db.json
const addEmployee = (req,res)=>{
    try{
        const newEmployee={...req.body}
        data.employees.push(newEmployee)
        res.status(201).json(data.employees)
    }catch(error){
        console.log(error);
    }
}

// get a single employee details - employee details get using find method
const getEmployeeDetails = (req,res)=>{
    const employeeDetails = data.employees.find(emp=>emp.id==req.params.id)
    res.status(200).json(employeeDetails)
}

// delete employee - delete done using filter 
const deleteEmployee = (req,res)=>{
    try {
        data.employees=data.employees.filter(emp=>emp.id !=req.params.id)
        res.status(201).json({message:"Deleted employee"})
    } catch (error) {
        console.log(error);
    }
}

// update employee details - employeedetails get using find and each field is updated 
const updateEmployee = (req,res)=>{
    try {
        const employee = data.employees.find(emp=>emp.id==req.params.id)
        employee.id=req.body.id
        employee.name = req.body.name
        employee.designation=req.body.designation
        employee.department=req.body.department
        employee.salary=req.body.salary
        res.status(200).json(employee)
        
    } catch (error) {
        console.log(error);
        
    }
}

// getallemployees - single controller for search,pagination
const getAllemployees = (req,res)=>{
    const page = Number(req.query.page)
    const limit = Number(req.query.limit)
    // calculate start index and end index for pagination
    const startIndex = (page-1) * limit
    const endIndex = startIndex + limit
    let allEmployees = data.employees
    try {
        const searchText = req.query.search
        // filter employees based on search
        if(searchText){
            allEmployees = allEmployees.filter(emp=>emp.name.toLowerCase().includes(searchText.toLowerCase()))
        }
        const totalRecords = allEmployees.length
        // get only the employess for the curent page
        const paginatedEmployees = allEmployees.slice(startIndex,endIndex)
        res.status(200).json({employees:paginatedEmployees,total:totalRecords})        
    } catch (error) {
        console.log(error);
    }
}

module.exports = {getAllemployees,addEmployee,deleteEmployee,getEmployeeDetails,updateEmployee}