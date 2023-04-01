"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const ClientAPIKey_1 = __importDefault(require("../client/ClientAPIKey"));
class ClientAPIKeys {
    constructor(api) {
        this.api = api;
    }
    get() {
        return ClientAPIKey_1.default.getAll(this.api);
    }
    create(description, allowedIps) {
        return ClientAPIKey_1.default.create(this.api, { description, allowedIps });
    }
}
exports.default = ClientAPIKeys;
