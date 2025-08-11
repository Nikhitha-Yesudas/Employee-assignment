const express = require('express');
const router = express.Router();
const Employee=require('../models/employeeModels')

router.use(express.json());
router.use(express.urlencoded({ extended: true }));

function employeeroutes(nav) {

  router.get('/',async(req,res)=>{
    const employees=await Employee.find();
    res.render('home',{employees,nav});
})
  router.get('/form', (req, res) => {
    res.render("addEmployee", {nav });
  });
  router.post('/add', async (req, res) => {
    const newEmp = new Employee(req.body);
    await newEmp.save();
    res.redirect('/basic');
  });
  router.get('/edit/:id', async (req, res) => {
    const employee = await Employee.findById(req.params.id);
    res.render('editEmployee', {employee, nav });
  });
  router.post('/edit/:id', async (req, res) => {
    await Employee.findByIdAndUpdate(req.params.id, req.body);
    res.redirect('/basic');
  });
  
  router.post('/delete/:id', async (req, res) => {
    await Employee.findByIdAndDelete(req.params.id);
    res.redirect('/basic');
  });

  return router;
}

module.exports = employeeroutes;