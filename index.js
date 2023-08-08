const express = require("express");
const app = express();
const { getClient } = require("./mqtt");
app.use(express.json())

let clients = [];
let messageCount=0;
for (let i = 0; i < 5000; i++) {
  const clientId = `cowlar${i}`;
  const username = `cowlar${i}`;
  const password = `cowlar${i}`;
  let client = getClient("mqtt://localhost:1883",{
    clientId,
    username,
    password,
  });
  client.subscribe("c", function (err) {
    if (!err) {
      console.log("connected mqtt with client id "+ clientId);
    } else {
      console.log("error : " + err);
    }
  });
  
  client.on("message", (topic, message) => {
    messageCount=messageCount+1
    // console.log(`${clientId} received message on ${topic}: ${message.toString()}`);
    // console.log(messageCount)
  });
}

let bilal= getClient({
  clientId: 'bilal',
  username: 'bilal',
  password: 'bilal'
})

app.get('/:t', async(req, res) => {
  messageCount=0
  let OneSecondCount=0;
  console.time('specificLineExecution');
  bilal.publish("c", "test message for vernemq")
  bilal.publish("c", "test message for vernemq")
  bilal.publish("c", "test message for vernemq")
  bilal.publish("c", "test message for vernemq")
  bilal.publish("c", "test message for vernemq")
  bilal.publish("c", "test message for vernemq")
  bilal.publish("c", "test message for vernemq")
  bilal.publish("c", "test message for vernemq")
  bilal.publish("c", "test message for vernemq")
  bilal.publish("c", "test message for vernemq")
  console.timeEnd('specificLineExecution');
  await new Promise((resolve) => setTimeout(resolve, req.params.t));
  OneSecondCount = messageCount;
  res.send('Message in one second = '+OneSecondCount );
});


app.listen(3050, () => {
  console.log("app running on port 3050 for mqtt");
});

module.exports = app;
