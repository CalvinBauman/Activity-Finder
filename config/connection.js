const { Client } = require('pg')
const client = new Client({
  user: 'jcnyqkajkckzoa',
  host: 'ec2-44-209-24-62.compute-1.amazonaws.com',
  database: 'dn9ri9mu85u05',
  password: 'e138d07d08d90a42135c4846524a192bb748acdfc8010ed2ffcd117147fb26ef',
  port: 5432,
})
client.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");
});

module.exports = sequelize;
