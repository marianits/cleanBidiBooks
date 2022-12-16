//Connection to the database
import { connect, connection } from 'mongoose';

//To avoid reconnecting every time an api route is called:
// we create this conn object, so in the dbConnect function we return if we already have a connection.
const conn = {
  isConnected: false
}

export async function dbConnect () {
  if (conn.isConnected) return; 

  const db = await connect(process.env.MONGODB_URL);
  conn.isConnected = db.connections[0].readyState;

}

//Connection events
connection.on('connected', () => {
  console.log('MongoDB is connected');
});

connection.on('error', (err) => {
  console.log(err);
});
