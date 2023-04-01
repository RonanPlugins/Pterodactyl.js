"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const index_1 = __importDefault(require("./index"));
const User_1 = __importDefault(require("./client/User"));
const Node_1 = __importDefault(require("./client/Node"));
const Location_1 = __importDefault(require("./client/Location"));
const Server_1 = __importDefault(require("./client/Server"));
const Nest_1 = __importDefault(require("./client/Nest"));
const Egg_1 = __importDefault(require("./client/Egg"));
class AdminClient extends index_1.default {
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
            this.call('/application/servers').then(res => {
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
    getUsers(page) {
        return User_1.default.getAll(this, page);
    }
    getNodes(page) {
        return Node_1.default.getAll(this, page);
    }
    getLocations(page) {
        return Location_1.default.getAll(this, page);
    }
    getServers(page) {
        return Server_1.default.getAll(this, page);
    }
    getNests(page) {
        return Nest_1.default.getAll(this, page);
    }
    getUser(userId) {
        return User_1.default.getById(this, userId);
    }
    getNode(nodeId) {
        return Node_1.default.getById(this, nodeId);
    }
    getLocation(locationId) {
        return Location_1.default.getById(this, locationId);
    }
    getServer(serverId) {
        return Server_1.default.getById(this, serverId);
    }
    getNest(nestId) {
        return Nest_1.default.getById(this, nestId);
    }
    getEgg(nestId, eggId) {
        return Egg_1.default.getById(this, nestId, eggId);
    }
    createServer(options) {
        return Server_1.default.create(this, options);
    }
    createUser(options) {
        return User_1.default.create(this, options);
    }
    createLocation(options) {
        return Location_1.default.create(this, options);
    }
    createNode(options) {
        return Node_1.default.create(this, options);
    }
}
exports.default = AdminClient;
