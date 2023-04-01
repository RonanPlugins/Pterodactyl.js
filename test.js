"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const index_1 = require("./index");
/**
 * v1.0 updates
 * /application/nodes/{node}/configuration
 *
 * /client/account
 * PUT /client/account/email
 * PUT /client/account/password
 * /client/account/api-keys/*
 *
 * /client/servers/{server}/
 */
// let client = new Builder('https://panel.minerva.gg', 'welNlp6mz0lCW00iTEFQe9zlb7NmiJXo66J1jJULHWIaqKwm').asAdmin();
let client = new index_1.Builder('https://panel.minerva.gg', 'oSclt2L8WF9JEqWuTQBMacNkB8Jub9pzWaQgP3gpUpVkObMC').asUser();
// let client = new Builder('https://panel.ethriealhost.com', 'yidyt4y8EaGLUaLAoPrIi3ON8cCdooJTcAEIRMqnfMiD9jbM', true).asUser();
// let client = new Builder('https://panel.ethriealhost.com', 'TbX5Uu9dVuSsISMwqW0b8UlQiugDqdSeWX5rvsA7b1VMDzx1', true).asAdmin();
// let client = new Builder('https://panel.ethriealhost.com', 'lThYws8I8WSamnkjEMcsf937VZ3XBsSF9cROdyo92BGYXHEP', true).asUser();
function main() {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            // let servers = await client.getServers();
            // await server.suspend();
            let servers = yield client.getClientServers();
            let server = servers.filter(s => s.name === 'Suthern Bot')[0];
            let data = yield server.stop();
            console.log(data);
            // let server = servers[0];
            // let res = await client.getAccount();
            // let res = await client.call('/client/permissions');
            // console.log(res.data.attributes.permissions);
            // let req = await res.twoFactor.disable('f83qSYSLiScLaQB8');
            // let res = await client.call('/client/account/api-keys');
            // console.log(res.data[0]);
            // let req = await res.setEmail('info@ethriealhost.com', 'f83qSYSLiScLaQB8');
            // let req = await res.setPassword('test23232', '31tD23D21@C23', '31tD23D21@C23');
            // let req = await res.setPassword('31tD23D21@C23', 'f83qSYSLiScLaQB8', 'f83qSYSLiScLaQB8');
            // console.log(req, await client.getAccount());
            // let databases = await server.getDatabases();
            // console.log(databases[0]);
            // let res = await client.call(`/client/servers/2369bbf7/schedules/1`, 'DELETE');
            // console.log(JSON.stringify(res.data[0].attributes, null, 4));
            // let socket = await server.websocket();
            // console.log(socket);
            // socket.on('auth success', () => {
            //     console.log('auth success');
            // });
            // socket.on('SOCKET_CLOSE', data => {
            //     console.log(data);
            // });
            // socket.on('SOCKET_ERROR', (error) => {
            //     console.log(error);
            // });
        }
        catch (error) {
            console.log(error);
        }
    });
}
;
// async function main() {
//     try {
//         let nodes = await client.getNodes();
//         let node = nodes[0];
//         let data = await node.getStringifiedConfiguration('yaml');
//         console.log(data);
//     } catch (error) {
//         console.log(error);
//     }
// }
main();
// client.call(`/client/servers/2369bbf7/websocket`)
//     .then(res => {
//         console.log(res);
//     })
//     .catch(error => {
//         console.log(error);
//     });
// async function main() {
//     try {
//         let nodes = await client.getNodes();
//         let node = nodes[0];
//         let configuration: any = await node.getConfiguration();
//         console.log(configuration);
//         let getYaml = (object: any, tier: number = 0, indent: number = 4): string => {
//             let getSpaces = (amount: number) => {
//                 let spaces = '';
//                 for (let index = 0; index < amount; index++) spaces += ' ';
//                 return spaces;
//             };
//             let yaml = '';
//             for (const key in object) {
//                 if (object.hasOwnProperty(key)) {
//                     const element = object[key];
//                     if (typeof element === 'object') {
//                         yaml += `${getSpaces(tier * indent)}${key}:`;
//                         yaml += '\n';
//                         yaml += getYaml(element, tier + 1, indent);
//                         yaml += '\n';
//                     } else {
//                         if (typeof element === 'string' && element.includes(':')) {
//                             yaml += `${getSpaces(tier * indent)}${key}: '${element}'`;
//                         } else {
//                             yaml += `${getSpaces(tier * indent)}${key}: ${element}`;
//                         }
//                         yaml += '\n';
//                     }
//                 }
//             }
//             let array = yaml.split('\n');
//             array = array.filter(value => value != '');
//             return array.join('\n');
//         };
//         let toYaml = (): string => {
//             return getYaml(configuration, 0, 2);
//         };
//         console.log(toYaml());
//     } catch (error) {
//         console.log(error);
//     }
// };
// main();
// import fetch from 'node-fetch';
// import axios from 'axios';
// class PterodactylAPI {
//     public url: string;
//     public baseUrl: string;
//     public apiKey: string;
//     constructor(url: string, apiKey: string) {
//         this.url = url;
//         this.apiKey = apiKey;
//         this.baseUrl = this.getHostname();
//     }
//     private getHostname(): string {
//         let url;
//         let ip = false;
//         if (/(?!127\.0{1,3}\.0{1,3}\.0{0,2}$)((25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)/g.test(this.url)) {
//             ip = true;
//             if (/^http(s|):\/\//g.test(this.url)) {
//                 url = this.url;
//             } else {
//                 url = `https://${this.url}`;
//             }
//         } else {
//             if (/^http(s|):\/\//g.test(this.url)) {
//                 url = this.url;
//             } else {
//                 url = `https://${this.url}`;
//             }
//         }
//         if (/\/$/g.test(url)) {
//             return url + 'api';
//         } else {
//             return url + '/api';
//         }
//     }
//     public ax(endpoint: string = '/', method: any = 'GET', data?: any) {
//         let url = this.baseUrl + endpoint;
//         return new Promise((resolve, reject) => {
//             axios.request({
//                 url,
//                 method,
//                 data: JSON.stringify(data),
//                 maxRedirects: 5,
//                 headers: {
//                     'Authorization': `Bearer ${this.apiKey}`,
//                     'Content-Type': 'application/json',
//                     'User-Agent': `Pterodactyl.js v${'2.1.0'}`
//                 }
//             }).then(response => resolve(response)).catch(error => reject(this.handleError(error)));
//         })
//     }
//     public call(endpoint: string = '/', method: any = 'GET', data?: any): Promise<any> {
//         let url = this.baseUrl + endpoint;
//         return new Promise(async (resolve, reject) => {
//             try {
//                 let options: any = {
//                     method,
//                     headers: {
//                         'Authorization': `Bearer ${this.apiKey}`,
//                         'Content-Type': 'application/json',
//                         'User-Agent': `Pterodactyl.js v${'2.1.0'}`,
//                         'Accept': 'application/json'
//                     },
//                 };
//                 if (data) options.body = JSON.stringify(data);
//                 let res = await fetch(url, options);
//                 let body = await res.json();
//                 if (body.errors) return reject(this.handleError(body.errors, res.status));
//                 resolve({
//                     statusCode: res.status,
//                     data: body.data ? body.data : body,
//                     pagination: body.meta ? body.meta.pagination : null,
//                 });
//             } catch (error) {
//                 reject(this.handleError(error));
//             }
//         });
//     }
//     private handleError(error: any, statusCode?: number) {
//         if (typeof statusCode === 'number') {
//             switch (statusCode) {
//                 case 400:
//                     return { statusCode, message: 'The request sent was invalid. (400 Bad Request)' };
//                 case 401:
//                     return { statusCode, message: 'Authorization header was invalidated by the panel. (401 Unauthorized)' };
//                 case 403:
//                     return { statusCode, message: 'Your key is invalid or it doesn\'t have access to that endpoint. (403 Forbidden)' };
//                 case 404:
//                     return { statusCode, message: 'The endpoint requested could not be found. (404 Not Found)' };
//                 case 405:
//                     return { statusCode, message: 'The method used was invalid for this endpoint. (405 Method Not Allowed)' };
//                 case 406:
//                     return { statusCode, message: 'The requested data was a format that isn\'t json. (406 Not Acceptable)' };
//                 case 410:
//                     return { statusCode, message: 'The requested data was removed from the server. (410 Gone)' };
//                 case 412:
//                     return { statusCode, message: 'Some data is missing from the request. (412 Precondition Failed)' };
//                 case 418:
//                     return { statusCode, message: '418 I\'m a teapot' };
//                 case 429:
//                     return { statusCode, message: 'You have reached the rate limit! Slow down. (429 Too Many Requests)' };
//                 case 500:
//                     return { statusCode, message: 'An error occurred on the server. (500 Internal Server Error)' };
//                 case 503:
//                     return { statusCode, message: 'The server is temporarily offline for maintenance. Please try again later. (503 Service Unavailable)' };
//             }
//         }
//         if (typeof error.push === 'function') {
//             let errors: any[] = error;
//             if (errors.length < 1) return error;
//             if (error.length < 2) {
//                 let err = errors[0];
//                 if (err.code === 'required') {
//                     return { message: 'A field was not provided in the request that is required.', field: err.source.field, detail: err.detail, };
//                 }
//             } else {
//                 return errors;
//             }
//         }
//         if (error.code === 'ENOTFOUND') {
//             return { message: 'A connection could not be made to the server through the URL provided.', code: 'ENOTFOUND' };
//         }
//         return error;
//     }
// }
// let client = new PterodactylAPI('https://panel.minerva.gg', 'welNlp6mz0lCW00iTEFQe9zlb7NmiJXo66J1jJULHWIaqKwm');
// async function main() {
//     try {
//         let data = await client.call('/application/servers/11/details', 'PATCH', {
//             name: 'Minerva Bot',
//         });
//         console.log(data);
//     } catch (error) {
//         console.log(error);
//     }
// };
// main();
// let a: any = {
//     user: 1,
//     name: 'test',
//     allocations: 0,
// };
// let b: any = {
//     user: 43,
//     name: null,
//     allocations: 1,
//     nest: 4,
// };
// console.log(Object.assign(b, a));
// let datas = await client.getClientServers();
// let server = await client.getClientServer(datas[0].identifier);
// console.log(server);
// try {
//     let nodes = await client.getNodes();
//     let allocations = await nodes[0].getAllocations();
//     console.log(allocations.length, allocations[0].pagination);
// } catch (error) {
//     console.log(error);
// }
// try {
//     let servers = await client.getClientServers();
//     console.log(servers.map(server => server.name));
// } catch (error) {
//     console.log(error);
// }
// console.log(servers.map(server => server.name));
// let users = await client.getUsers();
// let user = users[0];
// console.log(user);
// user.setUsername('admin').then(v => { console.log(v) }).catch(e => console.log(e.errors[0]));
// }
// main();
