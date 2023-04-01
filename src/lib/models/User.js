"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class User {
    constructor(data) {
        this.id = data.id;
        this.externalId = data.external_id;
        this.uuid = data.uuid;
        this.internalId = data.uuid;
        this.username = data.username;
        this.email = data.email;
        this.firstName = data.first_name;
        this.lastName = data.last_name;
        this.fullName = data.first_name + ' ' + data.last_name;
        this.language = data.language;
        this.rootAdmin = data.root_admin;
        this.twoFactor = data['2fa'];
        this.updatedAt = new Date(data.updated_at);
        this.createdAt = new Date(data.created_at);
    }
    toJSON() {
        return {
            id: this.id,
            externalId: this.externalId,
            uuid: this.uuid,
            username: this.username,
            email: this.username,
            firstName: this.firstName,
            lastName: this.lastName,
            fullName: this.firstName + ' ' + this.lastName,
            language: this.language,
            rootAdmin: this.rootAdmin,
            twoFactor: this.twoFactor,
            updatedAt: this.updatedAt,
            createdAt: this.createdAt
        };
    }
}
exports.default = User;
