"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Server {
    constructor(data) {
        this.id = data.id;
        this.externalId = data.external_id;
        this.internalId = data.uuid;
        this.uuid = data.uuid;
        this.identifier = data.identifier;
        this.name = data.name;
        this.description = data.description;
        this.suspended = data.suspended;
        this.limits = data.limits;
        this.featureLimits = data.feature_limits;
        this.user = data.user;
        this.node = data.node;
        this.allocation = data.allocation;
        this.nest = data.nest;
        this.egg = data.egg;
        this.pack = data.pack;
        this.container = {
            startupCommand: data.container.startup_command,
            image: data.container.image,
            installed: data.container.installed,
            environment: data.container.environment,
        };
        this.updatedAt = new Date(data.updated_at);
        this.createdAt = new Date(data.created_at);
    }
    toJSON() {
        return {
            id: this.id,
            externalId: this.externalId,
            uuid: this.uuid,
            identifier: this.identifier,
            name: this.name,
            description: this.description,
            suspended: this.suspended,
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
            },
            user: this.user,
            node: this.node,
            allocation: this.allocation,
            nest: this.nest,
            egg: this.egg,
            pack: this.pack,
            container: {
                startupCommand: this.container.startupCommand,
                image: this.container.image,
                installed: this.container.installed,
                environment: this.container.environment,
            },
            updatedAt: this.updatedAt,
            createdAt: this.createdAt
        };
    }
}
exports.default = Server;
