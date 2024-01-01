const mqtt = (host, port, clientId) => {
  const client = new Paho.MQTT.Client(host, Number(port), clientId);

  client.connect({ onSuccess: () => { console.log('Connected to host') } });

  client.onMessageArrived = (msg) => { console.log('Message arrived: ' + msg) };
  client.onConnectionLost = (responseObject) => { console.error('Connection lost: ' + responseObject.errorMessage) };
  client.onMessageDelivered = () => { console.log('Message delivered') };

  return client;
};
