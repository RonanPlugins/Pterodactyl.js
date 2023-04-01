"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SOCKET_EVENTS = void 0;
// import Sockette from 'sockette';
const events_1 = require("events");
const ws_1 = __importDefault(require("ws"));
// const WebSocket = require( 'ws' );
exports.SOCKET_EVENTS = [
    'SOCKET_OPEN',
    'SOCKET_RECONNECT',
    'SOCKET_CLOSE',
    'SOCKET_ERROR',
];
class $WebSocket extends events_1.EventEmitter {
    constructor() {
        super(...arguments);
        this.timer = null;
        this.backoff = 5000;
        this.socket = null;
        this.url = null;
        this.token = '';
    }
    connect(api, url) {
        this.url = url;
        console.log(api);
        this.socket = new ws_1.default(this.url, {
            origin: api.baseUrl
        });
        this.socket.on('message', (data) => {
            try {
                const { event, args } = JSON.parse(data);
                args ? this.emit(event, ...args) : this.emit(event);
                console.log(event);
            }
            catch (ex) {
                console.warn('Failed to parse incoming websocket message.', ex);
            }
        });
        this.socket.on('open', () => {
            this.timer && clearTimeout(this.timer);
            this.backoff = 5000;
            this.emit('SOCKET_OPEN');
            this.authenticate();
        });
        this.socket.on('close', (code, reason) => this.emit('SOCKET_CLOSE', { code, reason }));
        this.socket.on('error', error => this.emit('SOCKET_ERROR', error));
        this.timer = setTimeout(() => {
            this.backoff = (this.backoff + 2500 >= 20000) ? 20000 : this.backoff + 2500;
            this.socket && this.socket.close();
            clearTimeout(this.timer);
            this.connect(api, url);
        }, this.backoff);
        return this;
    }
    setToken(token, isUpdate = false) {
        this.token = token;
        if (isUpdate) {
            this.authenticate();
        }
        return this;
    }
    authenticate() {
        if (this.url && this.token) {
            this.send('auth', this.token);
        }
    }
    close(code, reason) {
        this.url = null;
        this.token = '';
        this.socket && this.socket.close(code, reason);
    }
    send(event, payload) {
        this.socket && this.socket.send(JSON.stringify({
            event,
            args: Array.isArray(payload) ? payload : [payload],
        }));
    }
}
exports.default = $WebSocket;
