"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class NodeAllocation {
    constructor(data, node) {
        this.id = data.id;
        this.ip = data.ip;
        this.alias = data.alias;
        this.port = data.port;
        this.assigned = data.assigned;
        this.node = node;
    }
    toJSON() {
        return {
            id: this.id,
            ip: this.ip,
            alias: this.alias,
            port: this.port,
            assigned: this.assigned,
        };
    }
}
exports.default = NodeAllocation;
