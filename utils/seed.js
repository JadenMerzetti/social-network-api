const connection = require('../config/connection');
const { userNames, emails, thoughtText, reactions } = require('../utils/data');

connection.on('error', (err) => err);

connection.once('open', async () => {
  console.log('connected to db');
  let userCheck = await connection.db.listCollections({ name: 'users' }).toArray();
  if (userCheck.length) {
    await connection.dropCollection('users');
  }

  let thoughtCheck = await connection.db.listCollections({ name: 'thoughts' }).toArray();
  if (thoughtCheck.length) {
    await connection.dropCollection('thoughts');
  };

  const users = [];

  for (let i = 0; i < 20; i++) {
    let username = userNames[i];
    let email = emails[i];
    let thought = thoughtText[i];
    

    users.push({ username, email, thought});
  }

  const thoughts = [];

  for (let i = 0; i < 20; i++) {
    let thought = thoughtText[i];
    let username = userNames[i];
    let reaction = reactions[i];

    thoughts.push({ 
      thought, 
      username, 
      reaction, 
    });
  }

  await User.collection.insertMany(users);
  await Thought.collection.insertMany(thoughts);

  console.table(users);
  console.table(thoughts);
  console.info('seed success!')
  process.exit(0);
});