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
const Location_1 = __importDefault(require("../models/Location"));
const Pagination_1 = __importDefault(require("../models/Pagination"));
class Location extends Location_1.default {
    constructor(api, data, paginationOptions) {
        super(data);
        this.api = api;
        if (paginationOptions)
            this.pagination = new Pagination_1.default(paginationOptions);
    }
    static create(api, options) {
        return new Promise((resolve, reject) => __awaiter(this, void 0, void 0, function* () {
            try {
                let res = yield api.call(`/application/locations`, 'POST', { short: options.shortCode, long: options.description });
                resolve(new Location(api, res.data.attributes));
            }
            catch (error) {
                reject(error);
            }
        }));
    }
    static getAll(api, page = 1) {
        return new Promise((resolve, reject) => __awaiter(this, void 0, void 0, function* () {
            try {
                let res = yield api.call(`/application/locations?page=${page}`);
                resolve(res.data.map((value) => new Location(api, value.attributes, res.pagination)));
            }
            catch (error) {
                reject(error);
            }
        }));
    }
    static getById(api, id) {
        return new Promise((resolve, reject) => __awaiter(this, void 0, void 0, function* () {
            try {
                let res = yield api.call(`/application/locations/${id}`);
                resolve(new Location(api, res.data.attributes));
            }
            catch (error) {
                reject(error);
            }
        }));
    }
    getRequestObject(data) {
        let request = {
            short: this.shortCode,
            long: this.description,
        };
        return Object.assign(request, data);
    }
    setShortCode(shortCode) {
        this.shortCode = shortCode;
        return new Promise((resolve, reject) => {
            return new Promise((resolve, reject) => __awaiter(this, void 0, void 0, function* () {
                try {
                    let res = yield this.api.call(`/application/locations`, 'POST', this.getRequestObject({ short: shortCode }));
                    resolve(new Location(this.api, res.data.attributes));
                }
                catch (error) {
                    reject(error);
                }
            }));
        });
    }
    setDescription(description) {
        this.description = description;
        return new Promise((resolve, reject) => {
            return new Promise((resolve, reject) => __awaiter(this, void 0, void 0, function* () {
                try {
                    let res = yield this.api.call(`/application/locations`, 'POST', this.getRequestObject({ long: description }));
                    resolve(new Location(this.api, res.data.attributes));
                }
                catch (error) {
                    reject(error);
                }
            }));
        });
    }
    delete() {
        return new Promise((resolve, reject) => {
            return new Promise((resolve, reject) => {
                return new Promise((resolve, reject) => __awaiter(this, void 0, void 0, function* () {
                    try {
                        yield this.api.call(`/application/locations/${this.id}`, 'DELETE');
                        resolve();
                    }
                    catch (error) {
                        reject(error);
                    }
                }));
            });
        });
    }
}
exports.default = Location;
