import { join, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';
import { Low } from 'lowdb';
import { JSONFile } from 'lowdb/node';

const __dirname = dirname(fileURLToPath(import.meta.url));
const file = join(__dirname, 'db.json');

const adapter = new JSONFile(file);
const db = new Low(adapter);
await db.read();
db.data ||= { topic: [], auther: []};

const { topic, auther } = db.data;
// topic.push({
//   id: 2,
//   title: 'mysql',
//   description: 'mysql is ...',
//   auther: 1
// });
// auther.push({
//   id: 1,
//   name: 'jeong',
//   profile: 'developer'
// });

// await db.write();

console.log(topic.find(t => t.title === 'lowdb'));