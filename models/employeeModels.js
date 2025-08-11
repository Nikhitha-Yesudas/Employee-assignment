const mongoose=require('mongoose')
const employeeSchema=new mongoose.Schema({
   EmployeeName:String,
   EmployeeDesignation:String,
   EmployeeLocation:String,
   Salary:Number
});
module.exports=mongoose.model('employees',employeeSchema)