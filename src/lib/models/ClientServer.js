"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class ClientServer {
    constructor(data) {
        this.serverOwner = data.server_owner;
        this.identifier = data.identifier;
        this.internalId = data.uuid;
        this.uuid = data.uuid;
        this.name = data.name;
        this.description = data.description;
        this.limits = data.limits;
        this.featureLimits = data.feature_limits;
    }
    toJSON() {
        return {
            serverOwner: this.serverOwner,
            identifier: this.identifier,
            uuid: this.uuid,
            name: this.name,
            description: this.description,
            limits: {
                memory: this.limits.memory,
                swap: this.limits.swap,
                disk: this.limits.disk,
                io: this.limits.io,
                cpu: this.limits.cpu
            },
            featureLimits: {
                databases: this.featureLimits.databases,
                allocations: this.featureLimits.allocations
            }
        };
    }
}
exports.default = ClientServer;
