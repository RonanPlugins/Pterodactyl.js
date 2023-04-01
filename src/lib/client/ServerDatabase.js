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
const ServerDatabase_1 = __importDefault(require("../models/ServerDatabase"));
class ServerDatabase extends ServerDatabase_1.default {
    constructor(api, data) {
        super(data);
        this.api = api;
    }
    static getAll(api, server) {
        return new Promise((resolve, reject) => __awaiter(this, void 0, void 0, function* () {
            try {
                let res = yield api.call(`/application/servers/${server}/databases`);
                resolve(res.data.map((value) => new ServerDatabase(api, value.attributes)));
            }
            catch (error) {
                reject(error);
            }
        }));
    }
    static getById(api, server, id) {
        return new Promise((resolve, reject) => __awaiter(this, void 0, void 0, function* () {
            try {
                let res = yield api.call(`/application/servers/${server}/databases/${id}`);
                resolve(new ServerDatabase(api, res.data.attributes));
            }
            catch (error) {
                reject(error);
            }
        }));
    }
    resetPassword() {
        return new Promise((resolve, reject) => __awaiter(this, void 0, void 0, function* () {
            try {
                yield this.api.call(`/application/servers/${this.server}/databases/${this.id}/reset-password`, 'POST');
                resolve();
            }
            catch (error) {
                reject(error);
            }
        }));
    }
    delete() {
        return new Promise((resolve, reject) => {
            return new Promise((resolve, reject) => __awaiter(this, void 0, void 0, function* () {
                try {
                    yield this.api.call(`/application/servers/${this.server}/databases/${this.id}`, 'DELETE');
                    resolve();
                }
                catch (error) {
                    reject(error);
                }
            }));
        });
    }
}
exports.default = ServerDatabase;
