"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class ClientAPIKey {
    constructor(data) {
        this.raw = data;
        this.identifier = data.identifier;
        this.description = data.description;
        this.allowedIps = data.allowed_ips;
        this.lastUsedAt = new Date(data.last_used_at);
        this.createdAt = new Date(data.created_at);
    }
    toJSON() {
        return {
            identifier: this.identifier,
            description: this.description,
            allowedIps: this.allowedIps,
            lastUsedAt: this.lastUsedAt,
            createdAt: this.createdAt,
        };
    }
    toRaw() {
        return this.raw;
    }
}
exports.default = ClientAPIKey;
