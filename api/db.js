import mysql from "mysql2";

// const db = mysql.createConnection({
//   user: "avnadmin",
//   host: "mysql-26437d1a-projectdev.a.aivencloud.com",
//   password: "AVNS_zDt2MyQWGSd7K8FX0VF",
//   database: "covidapp",
// });

const db = mysql.createConnection(
  `mysql://avnadmin:AVNS_zDt2MyQWGSd7K8FX0VF@mysql-26437d1a-projectdev.a.aivencloud.com:20951/covidapp`
);

db.connect((err) => {
  if (err) console.log(err);
  else console.log("database connected");
});

export default db;
