"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class ServerDatabase {
    constructor(data) {
        this.id = data.id;
        this.server = data.server;
        this.host = data.host;
        this.database = data.database;
        this.username = data.username;
        this.remote = data.remote;
        this.updatedAt = new Date(data.updated_at);
        this.createdAt = new Date(data.created_at);
    }
    toJSON() {
        return {
            id: this.id,
            server: this.server,
            host: this.host,
            database: this.database,
            username: this.username,
            remote: this.remote,
            updatedAt: this.updatedAt,
            createdAt: this.createdAt
        };
    }
}
exports.default = ServerDatabase;
