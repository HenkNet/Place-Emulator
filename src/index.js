import express from 'express';
import expressWs from 'express-ws';
import {HTTP_PORT} from './constants.js';

const app = express();

expressWs(app);
app.use('/ws', (await import('./ws/index.js')).default);
app.use('/', express.static('./web'))

app.listen(HTTP_PORT, () => {
    console.log(`Serving requests on port ${HTTP_PORT}!`);
});
