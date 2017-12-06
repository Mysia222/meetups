const express = require('express'),
    router = require('./routes/router.js'),
    morgan = require('morgan'),
    bodyParser = require('body-parser'),
    app = express(),
    PORT = process.env.PORT || 3030;


//app.use(express.static(path.join(__dirname, 'public')));
app.use(morgan('dev')) // combined
app.use(bodyParser.urlencoded({
    extended: true
}));
app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});
app.use(bodyParser.json());

app.use('/', router);

app.listen(PORT, () => console.log('Listening on port ' + PORT));

module.exports = app;