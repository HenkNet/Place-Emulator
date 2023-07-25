import {Router} from 'express';
import * as crypto from 'node:crypto';

const router = new Router();

router.ws('/', (ws) => {
    const client = {
        ws,
        id: crypto.randomUUID(),
    };

    ws.on('error', (e) => {
        ws.close();
    });

    ws.on('message', (rawMessage) => {
        console.log('message', rawMessage);
        ws.send('got a message')
    });
});

export default router;
