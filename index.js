/**************************************************************************************************
 * Required moduled 
 *************************************************************************************************/
const express = require('express');
const exphbs  = require('express-handlebars');
const bodyParser =  require('body-parser');
const {BenefitsRouter}  = require('./Server/routes/breakDownRoutes');
require('dotenv').config()


/**************************************************************************************************
 * CONSTANTS
 *************************************************************************************************/
const app = express();
app.use(express.static('public'));

app.use(bodyParser.json());
app.engine('.hbs', exphbs());
app.set('view engine', '.hbs');
app.set('views', `${__dirname}/Server/views`);

app.use('/Benefits', BenefitsRouter);


app.get('/', (req, res) => {
    res.render('index');
});


app.listen(3000, () => console.log(`Open http://localhost:3000 to see a response.`));