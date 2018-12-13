/**************************************************************************************************
 * Employee Object class
 * Purpose: Class used for hold employeee benefits details and caluculate deduction
 * D. Turner 12/12/18
 *************************************************************************************************/
 /**************************************************************************************************
 * Imports
 * D. Turner 12/12/18
 *************************************************************************************************/
const { Dependent } = require('./Dependent');
require('dotenv').config();


 /**************************************************************************************************
 * Employee Class
 * D. Turner 12/12/18
 *************************************************************************************************/
 function Employee(name) {
    
    this.name = name || '';
  };
  
   /**************************************************************************************************
 * Prototypes
 * D. Turner 12/12/18
 *************************************************************************************************/
  //caluculate yearly salary
  Employee.prototype.salary = parseInt(process.env.PAY_PER_PERIOD) * parseInt(process.env.PAY_PERIODS);
  //number of pay periods
  Employee.prototype.pay_periods = parseInt(process.env.PAY_PERIODS);
  //yearly benefits cost
  Employee.prototype.benefits_Yearly_Cost = parseInt(process.env.BENEFITS_YEARLY_COST);
  //dependent discount letter
  Employee.prototype.discounLetter = process.env.DICOUNT_LETTER;
  //calculate pay per period
  Employee.prototype.payPeriodSalary = parseInt(process.env.PAY_PER_PERIOD);
  //employee discount
  Employee.prototype.discount = parseFloat(process.env.DISCOUNT);
  //benefits yearly cost
  Employee.prototype.totalBenefitsYealyCost = (pDep) => { 

    return pDep.reduce((acc, dep) => { return acc + new Dependent().yearlyCost(dep.name)   }, parseInt(process.env.BENEFITS_YEARLY_COST));
  }

  module.exports = {
    Employee
}