/**************************************************************************************************
 * Dependant Object class
 * Purpose: Class used for hold dependant details (yearly cost etc)
 * D. Turner 12/12/18
 *************************************************************************************************/


 /**************************************************************************************************
 * Dependant Class
 * D. Turner 12/12/18
 *************************************************************************************************/
 function Dependent(name)  {
    this.name = name || '';
};

 /**************************************************************************************************
 * Prototypes
 * D. Turner 12/12/18
 *************************************************************************************************/

Dependent.prototype.name  = () => { return this.name; }
Dependent.prototype.yearlyCost = (name) => {
    
   name = name || '';
    if(name === '')
    {
        return 0;
    } 
    if(String(name).toLowerCase().charAt(0) === 'a')
    {
        return (process.env.DEPENDENT_YEARLY_RATE - (process.env.DISCOUNT*process.env.DEPENDENT_YEARLY_RATE));
    }
    return parseInt(process.env.DEPENDENT_YEARLY_RATE);
}

module.exports = {
    Dependent
}