/**************************************************************************************************
 * Employee breakdown class
 * Purpose: This class takes an emplyee object and returns
 * benefits yearly cost
 * benefits monthly cost
 * salary after deduction
 * 
 * Json formatting
 * D. Turner 12/12/18
 *************************************************************************************************/

 /**************************************************************************************************
 * Imports
 * D. Turner 12/12/18
 *************************************************************************************************/
const { Employee } = require('./../../Components/Employee');
const { Dependent } = require('../../components/Dependent');

/**************************************************************************************************
 * Global Variables
 * D. Turner 12/12/18
 *************************************************************************************************/
const CDEP = new Dependent()
/**************************************************************************************************
 *Local Methods
 * D. Turner 12/12/18
 *************************************************************************************************/

/**************************************************************************************************
 * Exports
 * D. Turner 12/12/18
 *************************************************************************************************/
 const GetBenefitsBreakdown = (employeeJson) => {
    
    var pEmpolyee = JSON.parse(employeeJson);

    //create new employee object
    emp = new Employee(pEmpolyee.name);

    return  {
        name: emp.name,
        salary: emp.salary,
        deductions: emp.totalBenefitsYealyCost(pEmpolyee.dependents),
        salaryAfterDeductions: emp.salary - emp.totalBenefitsYealyCost(pEmpolyee.dependents),
        weeklyPay: emp.payPeriodSalary,
        weeklyDeductions: parseInt(emp.totalBenefitsYealyCost(pEmpolyee.dependents)/emp.pay_periods)
        ,
        weeklyPayAfterDeductions: parseInt(emp.payPeriodSalary - (emp.totalBenefitsYealyCost(pEmpolyee.dependents)/emp.pay_periods)),
        dependents: pEmpolyee.dependents.reduce((acc, dep) => {
             acc.push({name: dep.name, cost: CDEP.yearlyCost(dep.name)});
             return acc;
        }, [])
    };
};

module.exports = {
    GetBenefitsBreakdown
}