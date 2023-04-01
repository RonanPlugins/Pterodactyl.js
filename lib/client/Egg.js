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
const Egg_1 = __importDefault(require("../models/Egg"));
class Egg extends Egg_1.default {
    constructor(api, data) {
        super(data);
        this.api = api;
    }
    static getAll(api, nest) {
        return new Promise((resolve, reject) => __awaiter(this, void 0, void 0, function* () {
            try {
                let res = yield api.call(`/application/nests/${nest}/eggs`);
                resolve(res.data.map((value) => new Egg(api, value.attributes)));
            }
            catch (error) {
                reject(error);
            }
        }));
    }
    static getById(api, nest, id) {
        return __awaiter(this, void 0, void 0, function* () {
            return new Promise((resolve, reject) => __awaiter(this, void 0, void 0, function* () {
                try {
                    let res = yield api.call(`/application/nests/${nest}/eggs/${id}`);
                    resolve(new Egg(api, res.data.attributes));
                }
                catch (error) {
                    reject(error);
                }
            }));
        });
    }
}
exports.default = Egg;
