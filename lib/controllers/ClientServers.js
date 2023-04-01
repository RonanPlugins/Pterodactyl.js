"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const ClientServer_1 = __importDefault(require("../client/ClientServer"));
class ClientServers {
    constructor(api) {
        this.api = api;
    }
    get(page) {
        return ClientServer_1.default.getAll(this.api, page);
    }
    getAll(id) {
        return ClientServer_1.default.getById(this.api, id);
    }
}
exports.default = ClientServers;
