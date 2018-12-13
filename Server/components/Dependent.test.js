/**************************************************************************************************
 * Required moduled 
 *************************************************************************************************/
const expect = require('expect');
require('dotenv').config();
const { Dependent } = require('./Dependent');

/**************************************************************************************************
 * Tests 
 * 
 * D. Turner 12/12/18
 *************************************************************************************************/
var steph = new Dependent('jane');
var an = new Dependent('an');
var john = new Dependent();

describe('Dependent Class', () => {
    it(`Dependant name should be equal to '' if no name is given for the dependent`, () => {
        expect(john.name).toEqual('');
    });

    it(`dependant with no name should return 0`, () => {
        expect(john.yearlyCost()).toEqual(0);
    });

    it(`Dependants whose name begins with A should get a %${process.env.DISCOUNT * 100} dicount off ${process.env.DEPENDENT_YEARLY_RATE}`, () => {

        expect(an.yearlyCost('An')).toEqual(process.env.DEPENDENT_YEARLY_RATE - (process.env.DISCOUNT * process.env.DEPENDENT_YEARLY_RATE));
    });

    it(`Stephs name should be Jane`, () => {
            expect(steph.name).toEqual('jane');
        });

    it(`names that do not begin with ${process.env.DICOUNT_LETTER} should cost ${process.env.DEPENDENT_YEARLY_RATE}`, () => {
        
            expect(steph.yearlyCost('steph')).toEqual(500);
    });
});