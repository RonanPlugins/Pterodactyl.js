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
const Server_1 = __importDefault(require("../models/Server"));
const ServerDatabase_1 = __importDefault(require("./ServerDatabase"));
const Pagination_1 = __importDefault(require("../models/Pagination"));
class Server extends Server_1.default {
    constructor(api, data, paginationOptions) {
        super(data);
        this.api = api;
        if (paginationOptions)
            this.pagination = new Pagination_1.default(paginationOptions);
    }
    static create(api, options) {
        return new Promise((resolve, reject) => __awaiter(this, void 0, void 0, function* () {
            try {
                let res = yield api.call(`/application/servers`, 'POST', this.getCreateOptions(options));
                resolve(new Server(api, res.data.attributes));
            }
            catch (error) {
                reject(error);
            }
        }));
    }
    static getAll(api, page = 1) {
        return new Promise((resolve, reject) => __awaiter(this, void 0, void 0, function* () {
            try {
                let res = yield api.call(`/application/servers?page=${page}`);
                resolve(res.data.map((value) => new Server(api, value.attributes, res.pagination)));
            }
            catch (error) {
                reject(error);
            }
        }));
    }
    static getById(api, id) {
        return new Promise((resolve, reject) => __awaiter(this, void 0, void 0, function* () {
            try {
                let res = yield api.call(`/application/servers/${id}`);
                resolve(new Server(api, res.data.attributes));
            }
            catch (error) {
                reject(error);
            }
        }));
    }
    static getByExternalId(api, externalId) {
        return new Promise((resolve, reject) => __awaiter(this, void 0, void 0, function* () {
            try {
                let res = yield api.call(`/application/servers/external/${externalId}`);
                resolve(new Server(api, res.data.attributes));
            }
            catch (error) {
                reject(error);
            }
        }));
    }
    static getCreateOptions(options) {
        let opts = {
            external_id: options.externalId,
            name: options.name,
            user: options.user,
            description: options.description,
            egg: options.egg,
            pack: options.pack,
            docker_image: options.image,
            startup: options.startup,
            limits: options.limits,
            feature_limits: options.featureLimits,
            environment: options.environment,
            start_on_completion: options.startWhenInstalled,
            skip_scripts: options.skipScripts,
            oom_disabled: options.outOfMemoryKiller,
        };
        if (options.allocation)
            opts.allocation = options.allocation;
        if (options.deploy)
            opts.deploy = {
                locations: options.deploy.locations,
                dedicated_ip: options.deploy.dedicatedIp,
                port_range: options.deploy.portRange,
            };
        return opts;
    }
    getDetailsRequestObject(data) {
        let request = {
            name: this.name,
            user: this.user,
        };
        return Object.assign(request, data);
    }
    getBuildRequestObject(data) {
        let request = {
            allocation: this.allocation,
            limits: this.limits,
            feature_limits: this.featureLimits,
        };
        return Object.assign(request, data);
    }
    getStartupRequestObject(data) {
        let request = {
            startup: this.container.startupCommand,
            egg: this.egg,
            image: this.container.image,
        };
        return Object.assign(request, data);
    }
    updateDetails(options) {
        return new Promise((resolve, reject) => __awaiter(this, void 0, void 0, function* () {
            try {
                let res = yield this.api.call(`/application/servers/${this.id}/details`, 'PATCH', this.getDetailsRequestObject(options));
                resolve(new Server(this.api, res.data.attributes));
            }
            catch (error) {
                reject(error);
            }
        }));
    }
    updateBuild(options) {
        return new Promise((resolve, reject) => __awaiter(this, void 0, void 0, function* () {
            try {
                let res = yield this.api.call(`/application/servers/${this.id}/build`, 'PATCH', this.getBuildRequestObject(options));
                resolve(new Server(this.api, res.data.attributes));
            }
            catch (error) {
                reject(error);
            }
        }));
    }
    updateStartup(options) {
        return new Promise((resolve, reject) => __awaiter(this, void 0, void 0, function* () {
            try {
                let res = yield this.api.call(`/application/servers/${this.id}/startup`, 'PATCH', this.getStartupRequestObject(options));
                resolve(new Server(this.api, res.data.attributes));
            }
            catch (error) {
                reject(error);
            }
        }));
    }
    suspend() {
        this.suspended = true;
        return new Promise((resolve, reject) => __awaiter(this, void 0, void 0, function* () {
            try {
                yield this.api.call(`/application/servers/${this.id}/suspend`, 'POST');
                resolve();
            }
            catch (error) {
                reject(error);
            }
        }));
    }
    unsuspend() {
        this.suspended = false;
        return new Promise((resolve, reject) => __awaiter(this, void 0, void 0, function* () {
            try {
                yield this.api.call(`/application/servers/${this.id}/unsuspend`, 'POST');
                resolve();
            }
            catch (error) {
                reject(error);
            }
        }));
    }
    reinstall() {
        return new Promise((resolve, reject) => __awaiter(this, void 0, void 0, function* () {
            try {
                yield this.api.call(`/application/servers/${this.id}/reinstall`, 'POST');
                resolve();
            }
            catch (error) {
                reject(error);
            }
        }));
    }
    rebuild() {
        return new Promise((resolve, reject) => __awaiter(this, void 0, void 0, function* () {
            try {
                yield this.api.call(`/application/servers/${this.id}/rebuild`, 'POST');
                resolve();
            }
            catch (error) {
                reject(error);
            }
        }));
    }
    isSuspended() {
        return new Promise((resolve, reject) => {
            resolve(this.suspended);
        });
    }
    setName(name) {
        this.name = name;
        return new Promise((resolve, reject) => __awaiter(this, void 0, void 0, function* () {
            try {
                let res = yield this.api.call(`/application/servers/${this.id}/details`, 'PATCH', this.getDetailsRequestObject({ name }));
                resolve(new Server(this.api, res.data.attributes));
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
                let res = yield this.api.call(`/application/servers/${this.id}/details`, 'PATCH', this.getDetailsRequestObject({ description }));
                resolve(new Server(this.api, res.data.attributes));
            }
            catch (error) {
                reject(error);
            }
        }));
    }
    setUser(user) {
        this.user = user;
        return new Promise((resolve, reject) => __awaiter(this, void 0, void 0, function* () {
            try {
                let res = yield this.api.call(`/application/servers/${this.id}/details`, 'PATCH', this.getDetailsRequestObject({ user }));
                resolve(new Server(this.api, res.data.attributes));
            }
            catch (error) {
                reject(error);
            }
        }));
    }
    setMemory(memory) {
        this.limits.memory = memory;
        return new Promise((resolve, reject) => __awaiter(this, void 0, void 0, function* () {
            try {
                let res = yield this.api.call(`/application/servers/${this.id}/details`, 'PATCH', this.getDetailsRequestObject({ limits: { memory } }));
                resolve(new Server(this.api, res.data.attributes));
            }
            catch (error) {
                reject(error);
            }
        }));
    }
    setCPU(cpu) {
        this.limits.cpu = cpu;
        return new Promise((resolve, reject) => __awaiter(this, void 0, void 0, function* () {
            try {
                let res = yield this.api.call(`/application/servers/${this.id}/build`, 'PATCH', this.getBuildRequestObject({ limits: { cpu } }));
                resolve(new Server(this.api, res.data.attributes));
            }
            catch (error) {
                reject(error);
            }
        }));
    }
    setDisk(disk) {
        this.limits.disk = disk;
        return new Promise((resolve, reject) => __awaiter(this, void 0, void 0, function* () {
            try {
                let res = yield this.api.call(`/application/servers/${this.id}/build`, 'PATCH', this.getBuildRequestObject({ limits: { disk } }));
                resolve(new Server(this.api, res.data.attributes));
            }
            catch (error) {
                reject(error);
            }
        }));
    }
    setIO(io) {
        this.limits.io = io;
        return new Promise((resolve, reject) => __awaiter(this, void 0, void 0, function* () {
            try {
                let res = yield this.api.call(`/application/servers/${this.id}/build`, 'PATCH', this.getBuildRequestObject({ limits: { io } }));
                resolve(new Server(this.api, res.data.attributes));
            }
            catch (error) {
                reject(error);
            }
        }));
    }
    setSwap(swap) {
        this.limits.swap = swap;
        return new Promise((resolve, reject) => __awaiter(this, void 0, void 0, function* () {
            try {
                let res = yield this.api.call(`/application/servers/${this.id}/build`, 'PATCH', this.getBuildRequestObject({ limits: { swap } }));
                resolve(new Server(this.api, res.data.attributes));
            }
            catch (error) {
                reject(error);
            }
        }));
    }
    setDatabaseAmount(amount) {
        this.featureLimits.databases = amount;
        return new Promise((resolve, reject) => __awaiter(this, void 0, void 0, function* () {
            try {
                let res = yield this.api.call(`/application/servers/${this.id}/build`, 'PATCH', this.getBuildRequestObject({ feature_limits: { databases: amount } }));
                resolve(new Server(this.api, res.data.attributes));
            }
            catch (error) {
                reject(error);
            }
        }));
    }
    setAllocationAmount(amount) {
        this.featureLimits.allocations = amount;
        return new Promise((resolve, reject) => __awaiter(this, void 0, void 0, function* () {
            try {
                let res = yield this.api.call(`/application/servers/${this.id}/build`, 'PATCH', this.getBuildRequestObject({ feature_limits: { allocations: amount } }));
                resolve(new Server(this.api, res.data.attributes));
            }
            catch (error) {
                reject(error);
            }
        }));
    }
    setStartupCommand(command) {
        this.container.startupCommand = command;
        return new Promise((resolve, reject) => __awaiter(this, void 0, void 0, function* () {
            try {
                let res = yield this.api.call(`/application/servers/${this.id}/startup`, 'PATCH', this.getStartupRequestObject({ startup: command }));
                resolve(new Server(this.api, res.data.attributes));
            }
            catch (error) {
                reject(error);
            }
        }));
    }
    setEgg(egg) {
        this.egg = egg;
        return new Promise((resolve, reject) => __awaiter(this, void 0, void 0, function* () {
            try {
                let res = yield this.api.call(`/application/servers/${this.id}/startup`, 'PATCH', this.getStartupRequestObject({ egg }));
                resolve(new Server(this.api, res.data.attributes));
            }
            catch (error) {
                reject(error);
            }
        }));
    }
    setPack(pack) {
        this.pack = pack;
        return new Promise((resolve, reject) => __awaiter(this, void 0, void 0, function* () {
            try {
                let res = yield this.api.call(`/application/servers/${this.id}/startup`, 'PATCH', this.getStartupRequestObject({ pack }));
                resolve(new Server(this.api, res.data.attributes));
            }
            catch (error) {
                reject(error);
            }
        }));
    }
    setImage(image) {
        this.container.image = image;
        return new Promise((resolve, reject) => __awaiter(this, void 0, void 0, function* () {
            try {
                let res = yield this.api.call(`/application/servers/${this.id}/startup`, 'PATCH', this.getStartupRequestObject({ image }));
                resolve(new Server(this.api, res.data.attributes));
            }
            catch (error) {
                reject(error);
            }
        }));
    }
    createDatabase(name, remote, host) {
        return new Promise((resolve, reject) => __awaiter(this, void 0, void 0, function* () {
            try {
                let res = yield this.api.call(`/application/servers/${this.id}/databases`, 'POST', { database: name, remote, host });
                resolve(new ServerDatabase_1.default(this.api, res.data.attributes));
            }
            catch (error) {
                reject(error);
            }
        }));
    }
    databases() {
        return ServerDatabase_1.default.getAll(this.api, this.id);
    }
    getDatabase(database) {
        return ServerDatabase_1.default.getById(this.api, this.id, database);
    }
    delete(force) {
        return new Promise((resolve, reject) => __awaiter(this, void 0, void 0, function* () {
            try {
                yield this.api.call(`/application/servers/${this.id}${force ? '/force' : ''}`, 'DELETE');
                resolve();
            }
            catch (error) {
                reject(error);
            }
        }));
    }
}
exports.default = Server;
