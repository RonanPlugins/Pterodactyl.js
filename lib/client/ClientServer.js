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
const ClientServer_1 = __importDefault(require("../models/ClientServer"));
const Pagination_1 = __importDefault(require("../models/Pagination"));
class ClientServer extends ClientServer_1.default {
    constructor(api, data, paginationOptions) {
        super(data);
        this.api = api;
        if (paginationOptions)
            this.pagination = new Pagination_1.default(paginationOptions);
    }
    static getAll(api, page = 1) {
        return new Promise((resolve, reject) => __awaiter(this, void 0, void 0, function* () {
            try {
                let res = yield api.call(`/client?page=${page}`);
                resolve(res.data.map((value) => new ClientServer(api, value.attributes, res.pagination)));
            }
            catch (error) {
                reject(error);
            }
        }));
    }
    static getById(api, id) {
        return new Promise((resolve, reject) => __awaiter(this, void 0, void 0, function* () {
            try {
                let res = yield api.call(`/client/servers/${id}`);
                resolve(new ClientServer(api, res.data.attributes));
            }
            catch (error) {
                reject(error);
            }
        }));
    }
    cpuUsage() {
        return new Promise((resolve, reject) => __awaiter(this, void 0, void 0, function* () {
            try {
                let res = yield this.api.call(`/client/servers/${this.identifier}/utilization`);
                resolve({ used: res.data.attributes.cpu.current, total: res.data.attributes.cpu.limit });
            }
            catch (error) {
                reject(error);
            }
        }));
    }
    diskUsage() {
        return new Promise((resolve, reject) => __awaiter(this, void 0, void 0, function* () {
            try {
                let res = yield this.api.call(`/client/servers/${this.identifier}/utilization`);
                resolve({ used: res.data.attributes.disk.current, total: res.data.attributes.disk.limit });
            }
            catch (error) {
                reject(error);
            }
        }));
    }
    memoryUsage() {
        return new Promise((resolve, reject) => __awaiter(this, void 0, void 0, function* () {
            try {
                let res = yield this.api.call(`/client/servers/${this.identifier}/utilization`);
                resolve({ used: res.data.attributes.memory.current, total: res.data.attributes.memory.limit });
            }
            catch (error) {
                reject(error);
            }
        }));
    }
    powerState() {
        return new Promise((resolve, reject) => __awaiter(this, void 0, void 0, function* () {
            try {
                let res = yield this.api.call(`/client/servers/${this.identifier}/utilization`);
                resolve(res.data.attributes.state);
            }
            catch (error) {
                reject(error);
            }
        }));
    }
    powerAction(signal) {
        return new Promise((resolve, reject) => __awaiter(this, void 0, void 0, function* () {
            try {
                yield this.api.call(`/client/servers/${this.identifier}/power`, 'POST', { signal }, true);
                resolve();
            }
            catch (error) {
                reject(error);
            }
        }));
    }
    start() {
        return new Promise((resolve, reject) => __awaiter(this, void 0, void 0, function* () {
            try {
                yield this.api.call(`/client/servers/${this.identifier}/power`, 'POST', { signal: 'start' }, true);
                resolve();
            }
            catch (error) {
                reject(error);
            }
        }));
    }
    stop() {
        return new Promise((resolve, reject) => __awaiter(this, void 0, void 0, function* () {
            try {
                yield this.api.call(`/client/servers/${this.identifier}/power`, 'POST', { signal: 'stop' }, true);
                resolve();
            }
            catch (error) {
                reject(error);
            }
        }));
    }
    restart() {
        return new Promise((resolve, reject) => __awaiter(this, void 0, void 0, function* () {
            try {
                yield this.api.call(`/client/servers/${this.identifier}/power`, 'POST', { signal: 'restart' }, true);
                resolve();
            }
            catch (error) {
                reject(error);
            }
        }));
    }
    kill() {
        return new Promise((resolve, reject) => __awaiter(this, void 0, void 0, function* () {
            try {
                yield this.api.call(`/client/servers/${this.identifier}/power`, 'POST', { signal: 'kill' }, true);
                resolve();
            }
            catch (error) {
                reject(error);
            }
        }));
    }
    databases() {
        return Promise.resolve(this.featureLimits.databases);
    }
    allocations() {
        return Promise.resolve(this.featureLimits.allocations);
    }
    sendCommand(command) {
        return new Promise((resolve, reject) => __awaiter(this, void 0, void 0, function* () {
            try {
                yield this.api.call(`/client/servers/${this.identifier}/command`, 'POST', { command });
                resolve();
            }
            catch (error) {
                reject(error);
            }
        }));
    }
}
exports.default = ClientServer;
