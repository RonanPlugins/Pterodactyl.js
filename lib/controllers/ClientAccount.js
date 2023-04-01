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
const ClientAccount_1 = __importDefault(require("../client/ClientAccount"));
const ClientAPIKeys_1 = __importDefault(require("./ClientAPIKeys"));
class ClientAccount {
    constructor(api) {
        this.api = api;
        this.apiKeys = new ClientAPIKeys_1.default(api);
    }
    get() {
        return ClientAccount_1.default.get(this.api);
    }
    setEmail(email, currentPassword) {
        return new Promise((resolve, reject) => __awaiter(this, void 0, void 0, function* () {
            try {
                let account = yield this.get();
                resolve(account.setEmail(email, currentPassword));
            }
            catch (error) {
                reject(error);
            }
        }));
    }
    setPassword(currentPassword, newPassword, newPasswordConfirm) {
        return new Promise((resolve, reject) => __awaiter(this, void 0, void 0, function* () {
            try {
                let account = yield this.get();
                resolve(account.setPassword(currentPassword, newPassword, newPasswordConfirm));
            }
            catch (error) {
                reject(error);
            }
        }));
    }
}
exports.default = ClientAccount;
