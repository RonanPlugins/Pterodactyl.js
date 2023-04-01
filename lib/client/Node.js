"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Node_1 = __importDefault(require("../models/Node"));
const NodeAllocation_1 = __importDefault(require("./NodeAllocation"));
const Pagination_1 = __importDefault(require("../models/Pagination"));
class Node extends Node_1.default {
    constructor(api, data, paginationOptions) {
        super(data);
        this.api = api;
        if (paginationOptions)
            this.pagination = new Pagination_1.default(paginationOptions);
    }
    static create(api, options) {
        return new Promise((resolve, reject) => __awaiter(this, void 0, void 0, function* () {
            try {
                let res = yield api.call(`/application/nodes`, 'POST', this.getCreateOptions(options));
                resolve(new Node(api, res.data.attributes));
            }
            catch (error) {
                reject(error);
            }
        }));
    }
    static getAll(api, page = 1) {
        return new Promise((resolve, reject) => __awaiter(this, void 0, void 0, function* () {
            try {
                let res = yield api.call(`/application/nodes?page=${page}`);
                resolve(res.data.map((value) => new Node(api, value.attributes, res.pagination)));
            }
            catch (error) {
                reject(error);
            }
        }));
    }
    static getById(api, id) {
        return new Promise((resolve, reject) => __awaiter(this, void 0, void 0, function* () {
            try {
                let res = yield api.call(`/application/nodes/${id}`);
                resolve(new Node(api, res.data.attributes));
            }
            catch (error) {
                reject(error);
            }
        }));
    }
    static getCreateOptions(options) {
        let opts = {
            name: options.name,
            description: options.description,
            location_id: options.locationId,
            public: options.public,
            fqdn: options.fqdn,
            scheme: options.scheme,
            behind_proxy: options.behindProxy,
            memory: options.memory,
            memory_overallocate: options.memoryOverAllocate,
            disk: options.disk,
            disk_overallocate: options.diskOverAllocate,
            daemon_base: options.daemonBase,
            daemon_listen: options.daemonPort,
            daemon_sftp: options.daemonSftpPort,
            maintenance_mode: options.maintenanceMode,
            upload_size: options.uploadSize,
        };
        return opts;
    }
    getRequestObject(data) {
        let request = {
            name: this.name,
            location_id: this.locationId,
            fqdn: this.fqdn,
            scheme: this.scheme,
            memory: this.memory,
            memory_overallocate: this.memoryOverAllocate,
            disk: this.disk,
            disk_overallocate: this.diskOverAllocate,
            daemon_sftp: this.daemonSftp,
            daemon_listen: this.daemonListen,
        };
        return Object.assign(request, data);
    }
    setPublic(isPublic) {
        this.public = isPublic;
        return new Promise((resolve, reject) => __awaiter(this, void 0, void 0, function* () {
            try {
                let res = yield this.api.call(`/application/nodes/${this.id}`, 'PATCH', this.getRequestObject({ public: isPublic }));
                resolve(new Node(this.api, res.data.attributes));
            }
            catch (error) {
                reject(error);
            }
        }));
    }
    setName(name) {
        this.name = name;
        return new Promise((resolve, reject) => __awaiter(this, void 0, void 0, function* () {
            try {
                let res = yield this.api.call(`/application/nodes/${this.id}`, 'PATCH', this.getRequestObject({ name }));
                resolve(new Node(this.api, res.data.attributes));
            }
            catch (error) {
                reject(error);
            }
        }));
    }
    setDescription(description) {
        this.description = description;
        return new Promise((resolve, reject) => __awaiter(this, void 0, void 0, function* () {
            try {
                let res = yield this.api.call(`/application/nodes/${this.id}`, 'PATCH', this.getRequestObject({ description }));
                resolve(new Node(this.api, res.data.attributes));
            }
            catch (error) {
                reject(error);
            }
        }));
    }
    setLocation(locationId) {
        this.locationId = locationId;
        return new Promise((resolve, reject) => __awaiter(this, void 0, void 0, function* () {
            try {
                let res = yield this.api.call(`/application/nodes/${this.id}`, 'PATCH', this.getRequestObject({ location_id: locationId }));
                resolve(new Node(this.api, res.data.attributes));
            }
            catch (error) {
                reject(error);
            }
        }));
    }
    setFQDN(fqdn) {
        this.fqdn = fqdn;
        return new Promise((resolve, reject) => __awaiter(this, void 0, void 0, function* () {
            try {
                let res = yield this.api.call(`/application/nodes/${this.id}`, 'PATCH', this.getRequestObject({ fqdn }));
                resolve(new Node(this.api, res.data.attributes));
            }
            catch (error) {
                reject(error);
            }
        }));
    }
    setScheme(scheme) {
        this.scheme = scheme;
        return new Promise((resolve, reject) => __awaiter(this, void 0, void 0, function* () {
            try {
                let res = yield this.api.call(`/application/nodes/${this.id}`, 'PATCH', this.getRequestObject({ scheme }));
                resolve(new Node(this.api, res.data.attributes));
            }
            catch (error) {
                reject(error);
            }
        }));
    }
    setBehindProxy(behindProxy) {
        this.behindProxy = behindProxy;
        return new Promise((resolve, reject) => __awaiter(this, void 0, void 0, function* () {
            try {
                let res = yield this.api.call(`/application/nodes/${this.id}`, 'PATCH', this.getRequestObject({ behind_proxy: behindProxy }));
                resolve(new Node(this.api, res.data.attributes));
            }
            catch (error) {
                reject(error);
            }
        }));
    }
    setMaintenanceMode(maintenanceMode) {
        this.maintenanceMode = maintenanceMode;
        return new Promise((resolve, reject) => __awaiter(this, void 0, void 0, function* () {
            try {
                let res = yield this.api.call(`/application/nodes/${this.id}`, 'PATCH', this.getRequestObject({ maintenance_mode: maintenanceMode }));
                resolve(new Node(this.api, res.data.attributes));
            }
            catch (error) {
                reject(error);
            }
        }));
    }
    setUploadSize(size) {
        this.uploadSize = size;
        return new Promise((resolve, reject) => __awaiter(this, void 0, void 0, function* () {
            try {
                let res = yield this.api.call(`/application/nodes/${this.id}`, 'PATCH', this.getRequestObject({ upload_size: size }));
                resolve(new Node(this.api, res.data.attributes));
            }
            catch (error) {
                reject(error);
            }
        }));
    }
    setMemory(memory) {
        this.memory = memory;
        return new Promise((resolve, reject) => __awaiter(this, void 0, void 0, function* () {
            try {
                let res = yield this.api.call(`/application/nodes/${this.id}`, 'PATCH', this.getRequestObject({ memory }));
                resolve(new Node(this.api, res.data.attributes));
            }
            catch (error) {
                reject(error);
            }
        }));
    }
    setMemoryOverAllocate(memoryOverAllocate) {
        this.memoryOverAllocate = memoryOverAllocate;
        return new Promise((resolve, reject) => __awaiter(this, void 0, void 0, function* () {
            try {
                let res = yield this.api.call(`/application/nodes/${this.id}`, 'PATCH', this.getRequestObject({ memory_overallocate: memoryOverAllocate }));
                resolve(new Node(this.api, res.data.attributes));
            }
            catch (error) {
                reject(error);
            }
        }));
    }
    setDisk(disk) {
        this.disk = disk;
        return new Promise((resolve, reject) => __awaiter(this, void 0, void 0, function* () {
            try {
                let res = yield this.api.call(`/application/nodes/${this.id}`, 'PATCH', this.getRequestObject({ disk }));
                resolve(new Node(this.api, res.data.attributes));
            }
            catch (error) {
                reject(error);
            }
        }));
    }
    setDiskOverAllocate(diskOverAllocate) {
        this.diskOverAllocate = diskOverAllocate;
        return new Promise((resolve, reject) => __awaiter(this, void 0, void 0, function* () {
            try {
                let res = yield this.api.call(`/application/nodes/${this.id}`, 'PATCH', this.getRequestObject({ disk_overallocate: diskOverAllocate }));
                resolve(new Node(this.api, res.data.attributes));
            }
            catch (error) {
                reject(error);
            }
        }));
    }
    setDaemonPort(port) {
        this.daemonListen = port;
        return new Promise((resolve, reject) => __awaiter(this, void 0, void 0, function* () {
            try {
                let res = yield this.api.call(`/application/nodes/${this.id}`, 'PATCH', this.getRequestObject({ daemon_listen: port }));
                resolve(new Node(this.api, res.data.attributes));
            }
            catch (error) {
                reject(error);
            }
        }));
    }
    setDaemonSftpPort(port) {
        this.daemonSftp = port;
        return new Promise((resolve, reject) => __awaiter(this, void 0, void 0, function* () {
            try {
                let res = yield this.api.call(`/application/nodes/${this.id}`, 'PATCH', this.getRequestObject({ daemon_sftp: port }));
                resolve(new Node(this.api, res.data.attributes));
            }
            catch (error) {
                reject(error);
            }
        }));
    }
    setDaemonBase(baseDirectory) {
        this.daemonBase = baseDirectory;
        return new Promise((resolve, reject) => __awaiter(this, void 0, void 0, function* () {
            try {
                let res = yield this.api.call(`/application/nodes/${this.id}`, 'PATCH', this.getRequestObject({ daemon_base: baseDirectory }));
                resolve(new Node(this.api, res.data.attributes));
            }
            catch (error) {
                reject(error);
            }
        }));
    }
    getAllocations(page) {
        return NodeAllocation_1.default.getAll(this.api, this.id, page);
    }
    createAllocations(ip, alias, ports) {
        return new Promise((resolve, reject) => __awaiter(this, void 0, void 0, function* () {
            try {
                yield this.api.call(`/application/nodes/${this.id}/allocations`, 'POST', { ip, alias, ports });
                resolve();
            }
            catch (error) {
                reject(error);
            }
        }));
    }
    delete() {
        return new Promise((resolve, reject) => __awaiter(this, void 0, void 0, function* () {
            try {
                yield this.api.call(`/application/nodes/${this.id}`, 'DELETE');
                resolve();
            }
            catch (error) {
                reject(error);
            }
        }));
    }
}
exports.default = Node;
