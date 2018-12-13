/**************************************************************************************************
* Required moduled 
*************************************************************************************************/
const expect = require('expect');
require('dotenv').config();
const { Employee } = require('./Employee');


/**************************************************************************************************
* Tests
*************************************************************************************************/
describe('Employee Object', () => {

    var dave = new Employee('dave');

it(`Employee should return the salary calculated by the process variable (${process.env.PAY_PER_PERIOD * process.env.PAY_PERIODS})`, () => {
    
    expect(dave.salary).toEqual(process.env.PAY_PER_PERIOD * process.env.PAY_PERIODS);

});

it(`Employee should return the discount referenced in enviornment variables (${process.env.DISCOUNT})`, () => {

    expect(dave.discount).toEqual(parseFloat(process.env.DISCOUNT));
});

it(`Employee should return the pay periods referenced in enviornment variables (${process.env.PAY_PER_PERIOD})`, () => {

    expect(dave.payPeriodSalary).toEqual(parseInt(process.env.PAY_PER_PERIOD));
});

 
});



