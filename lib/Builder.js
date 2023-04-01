"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const UserAPI_1 = __importDefault(require("./UserAPI"));
const AdminAPI_1 = __importDefault(require("./AdminAPI"));
class ClientBuilder {
    constructor(url, apiKey) {
        this.url = url;
        this.apiKey = apiKey;
    }
    setURL(url) {
        this.url = url;
        return this;
    }
    setAPIKey(apiKey) {
        this.apiKey = apiKey;
        return this;
    }
    build() {
        if (this.url && this.apiKey) {
            return true;
        }
        else {
            throw new Error('Please provide both a URL and API Key to the client builder.');
        }
    }
    asUser() {
        try {
            this.build();
            return new UserAPI_1.default(this.url, this.apiKey);
        }
        catch (error) {
            throw error;
        }
    }
    asAdmin() {
        try {
            this.build();
            return new AdminAPI_1.default(this.url, this.apiKey);
        }
        catch (error) {
            throw error;
        }
    }
}
exports.default = ClientBuilder;
