"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class ClientDatabase {
    constructor(data) {
        this.id = data.id;
        this.host = {
            address: data.host.address,
            port: data.host.port
        };
        this.name = data.name;
        this.username = data.username;
        this.connectionsFrom = data.connections_from;
        this.maxConnections = data.max_connections;
    }
    toJSON() {
        return {
            id: this.id,
            host: this.host,
            name: this.name,
            username: this.username,
            connectionsFrom: this.connectionsFrom,
            maxConnections: this.maxConnections
        };
    }
    toRaw() {
        return this.raw;
    }
}
exports.default = ClientDatabase;
