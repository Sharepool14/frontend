import { createServer } from 'http';
import { handler } from '../build/handler.js';

const server = createServer(handler);
server.listen('8000');
