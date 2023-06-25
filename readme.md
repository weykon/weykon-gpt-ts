## Introduce
gpt api using typescript on nodejs

## Usage

```
yarn add @weykon/gpt-ts
```
1. create a file named ".env"
2. edit .env
```
ChatGPTKey="*******"
```
3. demo
```ts
import { ChatGPTClient } from '@weykon/gpt-ts'
require('dotenv').config();

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
```