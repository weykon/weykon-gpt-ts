import fetch from 'node-fetch';
if (!globalThis.fetch) {
    globalThis.fetch = fetch
    global.fetch = fetch;
}

