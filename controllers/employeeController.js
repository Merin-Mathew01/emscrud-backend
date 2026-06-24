const data = require('../db.json')





const addEmployee = (req,res)=>{
    try{
        const newEmployee={...req.body}
        data.employees.push(newEmployee)
        res.status(201).json(data.employees)
    }catch(error){
        console.log(error);
    }
}

const getEmployeeDetails = (req,res)=>{
    const employeeDetails = data.employees.find(emp=>emp.id==req.params.id)
    res.status(200).json(employeeDetails)
}

const deleteEmployee = (req,res)=>{
    try {
        data.employees=data.employees.filter(emp=>emp.id !=req.params.id)
        res.status(201).json({message:"Deleted employee"})
    } catch (error) {
        console.log(error);
    }
}

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

const getAllemployees = (req,res)=>{
    try {
        const searchText = req.query.search
        if(searchText){
            const filteredData = data.employees.filter(emp=>emp.name.toLowerCase().includes(searchText.toLowerCase()) || emp.department.toLowerCase().includes(searchText.toLowerCase()))
            res.status(200).json(filteredData)
        }else{
            res.status(200).json(data.employees)
        }
        
    } catch (error) {
        console.log(error);
    }
}



module.exports = {getAllemployees,addEmployee,deleteEmployee,getEmployeeDetails,updateEmployee,getAllemployees}