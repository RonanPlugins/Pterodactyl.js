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
const NodeAllocation_1 = __importDefault(require("../models/NodeAllocation"));
const Pagination_1 = __importDefault(require("../models/Pagination"));
class NodeAllocation extends NodeAllocation_1.default {
    constructor(api, node, data, paginationOptions) {
        super(data, node);
        this.api = api;
        if (paginationOptions)
            this.pagination = new Pagination_1.default(paginationOptions);
    }
    static getAll(api, node, page = 1) {
        return new Promise((resolve, reject) => __awaiter(this, void 0, void 0, function* () {
            try {
                let res = yield api.call(`/application/nodes/${node}/allocations?page=${page}`);
                resolve(res.data.map((value) => new NodeAllocation(api, node, value.attributes, res.pagination)));
            }
            catch (error) {
                reject(error);
            }
        }));
    }
    delete() {
        return new Promise((resolve, reject) => __awaiter(this, void 0, void 0, function* () {
            try {
                yield this.api.call(`/application/nodes/${this.node}/allocations/${this.id}`);
                resolve();
            }
            catch (error) {
                reject(error);
            }
        }));
    }
}
exports.default = NodeAllocation;
