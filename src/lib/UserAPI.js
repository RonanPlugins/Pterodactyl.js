"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const index_1 = __importDefault(require("./index"));
const ClientServer_1 = __importDefault(require("./client/ClientServer"));
class UserClient extends index_1.default {
    constructor(url, apiKey) {
        super(url, apiKey);
        this.testConnection()
            .catch(error => {
            throw error;
        });
    }
    testConnection() {
        let solutions = {
            0: 'Most likely hostname is configured wrong causing the request never get executed.',
            401: 'Authorization header either missing or not provided.',
            403: 'Double check the password (which should be the Application Key).',
            404: 'Result not found.',
            422: 'Validation error.',
            500: 'Panel errored, check panel logs.',
        };
        return new Promise((resolve, reject) => {
            this.call('/client').then(res => {
                let error = null;
                if (res.statusCode !== 200) {
                    let { statusCode } = res;
                    error = `Non success status code received: ${statusCode}.\nPossible sulutions: ${solutions[statusCode] !== undefined ? solutions[statusCode] : 'None.'}`;
                }
                if (error !== null)
                    return reject(new Error(error));
                resolve();
            }).catch(error => reject(error));
        });
    }
    getClientServers(page) {
        return ClientServer_1.default.getAll(this, page);
    }
    getClientServer(serverId) {
        return ClientServer_1.default.getById(this, serverId);
    }
}
exports.default = UserClient;
