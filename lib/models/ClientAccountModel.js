"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class ClientAccount {
    constructor(data) {
        this.raw = data;
        this.id = data.id;
        this.admin = data.admin;
        this.username = data.username;
        this.email = data.email;
        this.firstName = data.first_name;
        this.lastName = data.last_name;
        this.language = data.language;
    }
    toJSON() {
        return {
            id: this.id,
            admin: this.admin,
            username: this.username,
            email: this.email,
            firstName: this.firstName,
            lastName: this.lastName,
            language: this.language,
        };
    }
    toRaw() {
        return this.raw;
    }
}
exports.default = ClientAccount;
