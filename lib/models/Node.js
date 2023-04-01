"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Node {
    constructor(data) {
        this.id = data.id;
        this.public = data.public;
        this.name = data.name;
        this.description = data.description;
        this.locationId = data.location_id;
        this.fqdn = data.fqdn;
        this.scheme = data.scheme;
        this.behindProxy = data.behind_proxy;
        this.maintenanceMode = data.maintenance_mode;
        this.memory = data.memory;
        this.memoryOverAllocate = data.memory_overallocate;
        this.disk = data.disk;
        this.diskOverAllocate = data.disk_overallocate;
        this.uploadSize = data.upload_size;
        this.daemonListen = data.daemon_listen;
        this.daemonSftp = data.daemon_sftp;
        this.daemonBase = data.daemon_base;
        this.updatedAt = new Date(data.updated_at);
        this.createdAt = new Date(data.created_at);
    }
    toJSON() {
        return {
            id: this.id,
            public: this.public,
            name: this.name,
            description: this.description,
            locationId: this.locationId,
            fqdn: this.fqdn,
            scheme: this.scheme,
            behindProxy: this.behindProxy,
            maintenanceMode: this.maintenanceMode,
            memory: this.memory,
            memoryOverAllocate: this.memoryOverAllocate,
            disk: this.disk,
            diskOverAllocate: this.diskOverAllocate,
            uploadSize: this.uploadSize,
            daemonListen: this.daemonListen,
            daemonSftp: this.daemonSftp,
            daemonBase: this.daemonBase,
            updatedAt: this.updatedAt,
            createdAt: this.createdAt
        };
    }
}
exports.default = Node;
