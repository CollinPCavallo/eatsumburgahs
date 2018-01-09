const connection = require('./connection');

const orm = {
    all: (table, callback) => {
        var queryString = 'SELECT * FROM '+ table;
        connection.query(queryString, (err, data) => {
            if (err) {
                throw err
            }
            callback(data)
        });
    },
    add: (table, colName, value, callback) => {
        // var queryString = `INSERT INTO ${table} (${colName}) VALUES (${value})`;
        var queryString = "INSERT INTO " + table + "(" + colName + ') VALUES ("' + value + '");';
        connection.query(queryString, (err,result) => {
            if (err) {
                throw err
            }
            callback(result)
        })
    },
    update: (table, col1, val1, col2, val2, callback) => {
        var queryString = "UPDATE " + table + " SET " + col1 + " = " + val1 + " WHERE " + col2 + " = " + val2;
        connection.query(queryString, (err,result) => {
            console.log(queryString)
            if (err) {
                throw err
            }
            callback(result)
        })
    }
};

module.exports = orm;