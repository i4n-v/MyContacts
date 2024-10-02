import { Client } from 'pg';

const client = new Client({
  host: 'localhost',
  port: 5432,
  user: 'root',
  password: 'postgres',
  database: 'mycontacts',
});

client.connect();

async function query(query: string, values: Array<string | number>) {
  const { rows } = await client.query(query, values);
  return rows;
}

export { query };
