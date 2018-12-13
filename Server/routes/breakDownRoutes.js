/**************************************************************************************************
 * Required moduled 
 *************************************************************************************************/
const express = require('express');
const { GetBenefitsBreakdown } =  require('./../controllers/Benefits/BenefitsBreakdown')
const bodyParser =  require('body-parser');

const app = express();
app.use(bodyParser.json());

const BenefitsRouter = express.Router();

BenefitsRouter.route('/')
.get(function (req, res) {
    let empInfo;
    
        empInfo =  GetBenefitsBreakdown(decodeURIComponent(req.url.substr(2)));
   console.log(empInfo);
    res.render('breakDownView', empInfo);
});


module.exports = {
    BenefitsRouter
}