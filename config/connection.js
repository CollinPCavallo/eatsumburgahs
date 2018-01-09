const mysql = require('mysql');
const connection;

if (process.env.JAWSDB_URL) {
    connection = mysql.createConnection(proccess.env.JAWSDB_URL);
} else {
    const connection = mysql.createConnection({
        port: 3306,
        host: 'localhost',
        user: 'root',
        password: 'root',
        database: 'burgers_db'
    })
}

connection.connect((err) => {
    if (err) {
        console.log(err)
        return
    }
    console.log(`connected as id ${connection.threadId}`);
});

module.exports = connection;