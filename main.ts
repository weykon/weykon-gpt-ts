import { ChatGPTClient } from './lib/ChatGPTClient'
import * as env from 'dotenv';
env.config

const clientOptions = {
    modelOptions: {
        model: 'gpt-3.5-turbo',
        temperature: 0,
    },
    debug: false,
};

const cacheOptions = {}

const app = new ChatGPTClient(
    process.env.ChatGPTKey,
    clientOptions,
    cacheOptions);

app.sendMessage('hello gpt api!!').then(e => {
    console.log('e.response', e.response);
})