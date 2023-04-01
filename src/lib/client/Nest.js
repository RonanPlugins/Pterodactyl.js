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
const Egg_1 = __importDefault(require("./Egg"));
const Nest_1 = __importDefault(require("../models/Nest"));
const Pagination_1 = __importDefault(require("../models/Pagination"));
class Nest extends Nest_1.default {
    constructor(api, data, paginationOptions) {
        super(data);
        this.api = api;
        if (paginationOptions)
            this.pagination = new Pagination_1.default(paginationOptions);
    }
    static getAll(api, page = 1) {
        return new Promise((resolve, reject) => __awaiter(this, void 0, void 0, function* () {
            try {
                let res = yield api.call(`/application/nests?page=${page}`);
                resolve(res.data.map((value) => new Nest(api, value.attributes, res.pagination)));
            }
            catch (error) {
                reject(error);
            }
        }));
    }
    static getById(api, id) {
        return new Promise((resolve, reject) => __awaiter(this, void 0, void 0, function* () {
            try {
                let res = yield api.call(`/application/nests/${id}`);
                resolve(new Nest(api, res.data.attributes));
            }
            catch (error) {
                reject(error);
            }
        }));
    }
    getEggs() {
        return new Promise((resolve, reject) => __awaiter(this, void 0, void 0, function* () {
            try {
                let data = yield Egg_1.default.getAll(this.api, this.id);
                resolve(data);
            }
            catch (error) {
                reject(error);
            }
        }));
    }
    getEgg(eggId) {
        return new Promise((resolve, reject) => __awaiter(this, void 0, void 0, function* () {
            try {
                let data = yield Egg_1.default.getById(this.api, this.id, eggId);
                resolve(data);
            }
            catch (error) {
                reject(error);
            }
        }));
    }
}
exports.default = Nest;
