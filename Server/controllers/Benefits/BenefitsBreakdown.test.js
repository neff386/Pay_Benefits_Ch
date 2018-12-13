/**************************************************************************************************
 * Required moduled 
 *************************************************************************************************/
const expect = require('expect');
require('dotenv').config();
const { GetBenefitsBreakdown } = require('./BenefitsBreakdown');


/**************************************************************************************************
 * Tests
 *************************************************************************************************/
describe('Benefits Break down test', () => {

    var empTest1 = {
        name: 'hello',
        dependents: [
            {name: 'clark'},
            {name: 'bruce'},
            {name: 'peter'},
            {name: 'Antman'}
        ]
    }
        it(`Dependant name should be equal to ${empTest1.name} if no name is given for the dependent`, () => {
            expect(
                (GetBenefitsBreakdown(JSON.stringify(empTest1)).name)
            )
                .toEqual(empTest1.name);
        });
  
});



