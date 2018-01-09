const orm = require('../config/orm');

const burger = {
    all: (callback) => {
        orm.all('burgers', (res) => {
            callback(res);
        });
    },
    add: (value, callback) => {

        //`INSERT INTO ${table} (${colName}) VALUES (${value})`;
        orm.add('burgers', 'burger_name', value, (res) => {
            callback(res);
        });
    },
    update: (value, callback) => {
        //"UPDATE " + table + " SET " + col1 + " = " + val1 + " WHERE " + col2 + " = " + val2;
        orm.update('burgers', 'devoured', 1, 'id', value, (res) => {
            callback(res)
        });
    }
};

module.exports = burger;