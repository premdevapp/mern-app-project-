var express = require("express");
var router = express.Router();

const Pool = require("pg").Pool;
const pool = new Pool({
  host: "localhost",
  port: "5432",
  database: "employeedb",
  user: "test",
  password: "password",
});

/* var mongo = require("mongodb");
var MongoClient = mongo.MongoClient;
const dbUrl = "mongodb://localhost:27017";
var db;
const collection_name = "product"; */

/* MongoClient.connect(dbUrl, (err, con) => {
  if (err) console.log(err);
  db = con.db("employees");
}); */

router.get("/", (req, res) => {
  res.send("<b>Employee API!!</b>");
});

router.get("/employees", (req, res) => {
  pool.query("select * from employee", (err, results) => {
    if (err) console.error(err);
    res.send(results.rows);
  });
});

router.get("/employees/:id", (req, res) => {
  const id = parseInt(req.params.id);
  pool.query("select * from employee where id=$1", [id], (err, result) => {
    if (err) console.error(err);
    res.send(result.rows);
  });
});

router.post("/employees", (req, res) => {
  const { name, sal } = req.body;
  pool.query(
    "insert into employee (name, sal) values ($1, $2) RETURNING *",
    [name, sal],
    (err, result) => {
      if (err) console.error(err);
      res.send(result.rows[0]);
    }
  );
});

router.put("/employees/:id", (req, res) => {
  const id = parseInt(req.params.id);
  const { sal } = req.body;
  pool.query(
    "update employee set sal=$1 where id=$2 RETURNING *",
    [sal, id],
    (err, result) => {
      if (err) console.error(err);
      res.send(result.rows[0]);
    }
  );
});

router.delete("/employees/:id", (req, res) => {
  const id = parseInt(req.params.id);
  pool.query("delete from employee where id=$1", [id], (err, result) => {
    if (err) console.error(err);
    res.send("deleted");
  });
});

module.exports = router;
