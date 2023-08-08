const mqtt = require('mqtt')

// const options = {
//     clientId: 'cowlar',
//     username: 'cowlar',
//     password: 'cowlar'
//   };

// const client = mqtt.connect(
//     "mqtt://localhost:1883",options
//   )
  const getClient = (url,options) => {
    return mqtt.connect(
      url,options
    )
  }
  
  // const onConnectionMessage = async (topic, message) => {
  //   console.log("topic", topic)
  //   console.log("message", message.toString())
  // }
  
  // const onConnectionConnect = async () => {
  //   client.subscribe("c", function (err) {
  //     if (!err) {
  //       console.log('connected mqtt')
  //     } else {
  //       console.log('error : ' + err)
  //     }
  //   })
  // }
  
  // const onConnectionDisconnect = async () => {
  //   console.log('MQTT client disconnected')
  // }
  // const onConnectionReconnect = async () => {
  //   console.log('MQTT client Reconnecting')
  // }
  // const onConnectionClose = async () => {
  //   console.log('MQTT client Closed\n\n')
  // }
  
  // client.on('connect', onConnectionConnect)
  // client.on('message', onConnectionMessage)
  // client.on('reconnect', onConnectionReconnect)
  // client.on('disconnect', onConnectionDisconnect)
  // client.on('close', onConnectionClose)
  
  module.exports.getClient = getClient
  