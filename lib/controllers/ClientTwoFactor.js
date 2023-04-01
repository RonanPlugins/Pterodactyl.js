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
class ClientTwoFactor {
    constructor(api) {
        this.api = api;
    }
    getQR() {
        return new Promise((resolve, reject) => __awaiter(this, void 0, void 0, function* () {
            try {
                let res = yield this.api.call(`/client/account/two-factor`);
                resolve(res.data.image_url_data);
            }
            catch (error) {
                reject(error);
            }
        }));
    }
    enable(code) {
        return new Promise((resolve, reject) => __awaiter(this, void 0, void 0, function* () {
            try {
                let res = yield this.api.call(`/client/account/two-factor`, 'POST', {
                    code
                }, true);
                resolve(res.statusCode === 204);
            }
            catch (error) {
                reject(error);
            }
        }));
    }
    disable(currentPassword) {
        return new Promise((resolve, reject) => __awaiter(this, void 0, void 0, function* () {
            try {
                let res = yield this.api.call(`/client/account/two-factor`, 'DELETE', {
                    password: currentPassword
                }, true);
                resolve(res.statusCode === 204);
            }
            catch (error) {
                reject(error);
            }
        }));
    }
}
exports.default = ClientTwoFactor;
