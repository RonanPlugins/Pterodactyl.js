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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const ClientAPIKey_1 = __importDefault(require("../models/ClientAPIKey"));
class ClientAPIKey extends ClientAPIKey_1.default {
    constructor(api, data) {
        super(data);
        this.api = api;
    }
    static create(api, data) {
        return new Promise((resolve, reject) => __awaiter(this, void 0, void 0, function* () {
            try {
                let options = { description: data.description };
                if (data.allowedIps)
                    options['allowed_ips'] = data.allowedIps;
                let res = yield api.call(`/client/account/api-keys`, 'POST', options);
                resolve({ identifier: res.data.attributes.identifier, key: res.data.meta.secret_token });
            }
            catch (error) {
                reject(error);
            }
        }));
    }
    static getAll(api) {
        return new Promise((resolve, reject) => __awaiter(this, void 0, void 0, function* () {
            try {
                let res = yield api.call(`/client/account/api-keys`);
                resolve(res.data.map((value) => new ClientAPIKey(api, value.attributes)));
            }
            catch (error) {
                reject(error);
            }
        }));
    }
    delete() {
        return new Promise((resolve, reject) => __awaiter(this, void 0, void 0, function* () {
            try {
                let res = yield this.api.call(`/client/account/api-keys/${this.identifier}`, 'DELETE', null, true);
                resolve(res.statusCode === 204);
            }
            catch (error) {
                reject(error);
            }
        }));
    }
}
exports.default = ClientAPIKey;
