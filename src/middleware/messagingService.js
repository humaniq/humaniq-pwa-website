import mqtt from 'mqtt';
import request from 'superagent';
import {
  ENDPOINT_CONNECT_REALTIME
} from 'constants/api'

const TRANSACTION_UPDATE_TOPIC = "/website/updates/transactions";

const getIotPresignedUrl = () => request('GET', ENDPOINT_CONNECT_REALTIME)
  .then(response => ({
    url: response.body.url,
  }));

class MessagingService {

  constructor() {
    this.client = null;
  }

  validateConnected() {
    if (!this.client) {
      throw new Error("Service is not connected yet. Call messagingService.connect() first!");
    }
  }

  connect() {
    return getIotPresignedUrl()
      .then(response => {
        this.client = mqtt.connect(response.url);
        this.client.on('connect', () => {
          console.log('Connected to AWS IoT Broker');
          this.client.subscribe(TRANSACTION_UPDATE_TOPIC);
        });
        this.client.on('close', () => {
          console.log('Connection to AWS IoT Broker closed');
          this.client.end();
        });
      });
  }

  onConnect(callback) {
    this.validateConnected();
    this.client.on('connect', callback);
    return this;
  }

  onDisconnect(callback) {
    this.validateConnected();
    this.client.on('close', callback);
    return this;
  }

  onTransactionUpdateReceived(callback) {
    this.validateConnected();
    this.client.on('message', (topic, messageString) => {
      console.log(`Received message: ${topic} - ${messageString}`);
      const {
        info,
        amount,
        fee,
        gas,
        blockchain,
      } = JSON.parse(messageString.toString('utf8'));
      callback({
        info,
        amount,
        fee,
        gas,
        blockchain,
      });
    });
    return this;
  }
}

export default new MessagingService();