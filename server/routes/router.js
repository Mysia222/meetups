//const jwt = require('jsonwebtoken');
const pool = require('../config/database');

module.exports = (router) => {


    router.get('/mymeetups', function(request, response) {
        console.log("ee");
        pool.connect(function(err, db, done) {
            if (err) {
                console.error(err);
                // response.status(500).send({ 'error': err });
            } else {
                db.query('SELECT * FROM MEETUPS', function(err, table) {
                    console.log(table);
                    done();
                    if (err) {
                        return response.status(400).send({ error: err })
                    } else {
                        console.log(table.rows);
                        return response.status(200).send(table.rows)
                    }
                })
            }
        });

    });

    return router;
};