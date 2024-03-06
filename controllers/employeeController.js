const mysql = require("mysql");

const connection = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "node",
});

connection.connect((err) => {
    if (err) {
        console.error("Error connecting to MySQL: " + err.stack);
        return;
    }
    console.log("Connected to MySQL as id " + connection.threadId);
});

exports.getAllEmployees = (req, res) => {
    connection.query("SELECT * FROM employee", (error, results, fields) => {
        if (error) {
            console.error("Error executing query: " + error);
            return res.status(500).json({ error: "Internal Server Error" });
        }

        return res.status(200).json({
            message: "Success",
            data: results,
        });
    });
};
