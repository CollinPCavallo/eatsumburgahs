const orm = require('../config/orm');

const burger = {
    all: (callback) => {
        orm.all('burgers', (res) => {
            callback(res);
        });
    },
    add: (value, callback) => {
        orm.add('burgers', 'burger_name', value, (res) => {
            callback(res);
        });
    },
    update: (value, callback) => {
        orm.update('burgers', 'devoured', 1, 'id', value, (res) => {
            callback(res)
        });
    }
};

module.exports = burger;