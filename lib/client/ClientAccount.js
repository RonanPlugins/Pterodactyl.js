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
const ClientAccount_1 = __importDefault(require("../models/ClientAccount"));
const ClientTwoFactor_1 = __importDefault(require("../controllers/ClientTwoFactor"));
class ClientAccount extends ClientAccount_1.default {
    constructor(api, data) {
        super(data);
        this.api = api;
        this.twoFactor = new ClientTwoFactor_1.default(api);
    }
    static get(api) {
        return new Promise((resolve, reject) => __awaiter(this, void 0, void 0, function* () {
            try {
                let res = yield api.call(`/client/account`);
                resolve(new ClientAccount(api, res.data.attributes));
            }
            catch (error) {
                reject(error);
            }
        }));
    }
    setEmail(email, currentPassword) {
        return new Promise((resolve, reject) => __awaiter(this, void 0, void 0, function* () {
            try {
                let res = yield this.api.call(`/client/account/email`, 'PUT', {
                    email,
                    password: currentPassword
                }, true);
                resolve(res.statusCode === 201);
            }
            catch (error) {
                reject(error);
            }
        }));
    }
    setPassword(currentPassword, newPassword, newPasswordConfirm) {
        return new Promise((resolve, reject) => __awaiter(this, void 0, void 0, function* () {
            try {
                let res = yield this.api.call(`/client/account/password`, 'PUT', {
                    current_password: currentPassword,
                    password: newPassword,
                    password_confirmation: newPasswordConfirm,
                }, true);
                resolve(res.statusCode === 204);
            }
            catch (error) {
                reject(error);
            }
        }));
    }
}
exports.default = ClientAccount;
