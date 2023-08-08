const mysql = require("mysql");
const connection = mysql.createConnection({
  host: "localhost",
  user: "vernemq",
  password: "vernemq",
  database: "vernemq_db",
});

connection.connect((err) => {
  if (err) throw err;
  console.log("Connected to the database!");

  for (let i = 0; i <= 5000; i++) {
    const clientId = `cowlar${i}`;
    const username = `cowlar${i}`;
    const password = `cowlar${i}`;

    const sql = `
      INSERT INTO vmq_auth_acl
        (mountpoint, client_id, username,
        password, publish_acl, subscribe_acl)
      VALUES
        ('', '${clientId}', '${username}', md5('${password}'),
        '[{"pattern":"a/b/c"},{"pattern":"c"}]',
        '[{"pattern":"a/b/c"},{"pattern":"c"}]');
    `;

    connection.query(sql, (err, result) => {
      if (err) throw err;
      console.log(`Insertion ${i + 1} successful for client: ${clientId}`);
    });
  }
});
