import { Client } from '@klasa/core';
import { token } from '../etc/config.json';

const client = new Client();

client.token = token;
client.connect();
