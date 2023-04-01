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
const User_1 = __importDefault(require("../models/User"));
const Pagination_1 = __importDefault(require("../models/Pagination"));
class User extends User_1.default {
    constructor(api, data, paginationOptions) {
        super(data);
        this.api = api;
        if (paginationOptions)
            this.pagination = new Pagination_1.default(paginationOptions);
    }
    static create(api, options) {
        return new Promise((resolve, reject) => __awaiter(this, void 0, void 0, function* () {
            try {
                let res = yield api.call(`/application/users`, 'POST', this.getCreateOptions(options));
                resolve(new User(api, res.data.attributes));
            }
            catch (error) {
                reject(error);
            }
        }));
    }
    static getAll(api, page = 1) {
        return new Promise((resolve, reject) => __awaiter(this, void 0, void 0, function* () {
            try {
                let res = yield api.call(`/application/users?page=${page}`);
                resolve(res.data.map((value) => new User(api, value.attributes, res.pagination)));
            }
            catch (error) {
                reject(error);
            }
        }));
    }
    static getById(api, id) {
        return new Promise((resolve, reject) => __awaiter(this, void 0, void 0, function* () {
            try {
                let res = yield api.call(`/application/users/${id}`);
                resolve(new User(api, res.data.attributes));
            }
            catch (error) {
                reject(error);
            }
        }));
    }
    static getByExternalId(api, externalId) {
        return new Promise((resolve, reject) => __awaiter(this, void 0, void 0, function* () {
            try {
                let res = yield api.call(`/application/users/external/${externalId}`);
                resolve(new User(api, res.data.attributes));
            }
            catch (error) {
                reject(error);
            }
        }));
    }
    static getCreateOptions(options) {
        let opts = {
            external_id: options.externalId,
            username: options.username,
            email: options.email,
            first_name: options.firstName,
            last_name: options.lastName,
            password: options.password,
            root_admin: options.admin,
            language: options.language,
        };
        return opts;
    }
    getRequestObject(data) {
        let request = {
            username: this.username,
            email: this.email,
            first_name: this.firstName,
            last_name: this.lastName,
        };
        return Object.assign(request, data);
    }
    // private userId: any;
    // private internalId: string;
    // private username: string;
    // constructor(api: AdminAPI, userId: any) {
    //     this.api = api;
    //     this.userId = userId;
    //     if (!/\d/g.test(this.userId)) {
    //         this.username = this.userId;
    //         this.api.getUsers().then(users => {
    //             let user = users.filter(user => user.username === this.username);
    //             this.userId = user[0].id;
    //             this.internalId = user[0].internalId;
    //         }).catch(error => { throw error; });
    //     } else {
    //         this.getInfo().then(info => {
    //             this.username = info.username;
    //         }).catch(error => { throw error; });
    //     }
    // }
    setExternalId(externalId) {
        this.externalId = externalId;
        return new Promise((resolve, reject) => __awaiter(this, void 0, void 0, function* () {
            try {
                let res = yield this.api.call(`/application/users/${this.id}`, 'PATCH', this.getRequestObject({ external_id: externalId }));
                resolve(new User(this.api, res.data.attributes));
            }
            catch (error) {
                reject(error);
            }
        }));
    }
    setUsername(username) {
        this.username = username;
        return new Promise((resolve, reject) => __awaiter(this, void 0, void 0, function* () {
            try {
                let res = yield this.api.call(`/application/users/${this.id}`, 'PATCH', this.getRequestObject({ username }));
                resolve(new User(this.api, res.data.attributes));
            }
            catch (error) {
                reject(error);
            }
        }));
    }
    setEmail(email) {
        this.email = email;
        return new Promise((resolve, reject) => __awaiter(this, void 0, void 0, function* () {
            try {
                let res = yield this.api.call(`/application/users/${this.id}`, 'PATCH', this.getRequestObject({ email }));
                resolve(new User(this.api, res.data.attributes));
            }
            catch (error) {
                reject(error);
            }
        }));
    }
    setFirstName(firstName) {
        this.firstName = firstName;
        return new Promise((resolve, reject) => __awaiter(this, void 0, void 0, function* () {
            try {
                let res = yield this.api.call(`/application/users/${this.id}`, 'PATCH', this.getRequestObject({ first_name: firstName }));
                resolve(new User(this.api, res.data.attributes));
            }
            catch (error) {
                reject(error);
            }
        }));
    }
    setLastName(lastName) {
        this.lastName = lastName;
        return new Promise((resolve, reject) => __awaiter(this, void 0, void 0, function* () {
            try {
                let res = yield this.api.call(`/application/users/${this.id}`, 'PATCH', this.getRequestObject({ last_name: lastName }));
                resolve(new User(this.api, res.data.attributes));
            }
            catch (error) {
                reject(error);
            }
        }));
    }
    setPassword(password) {
        return new Promise((resolve, reject) => __awaiter(this, void 0, void 0, function* () {
            try {
                let res = yield this.api.call(`/application/users/${this.id}`, 'PATCH', this.getRequestObject({ password }));
                resolve(new User(this.api, res.data.attributes));
            }
            catch (error) {
                reject(error);
            }
        }));
    }
    setAdmin(admin) {
        this.rootAdmin = admin;
        return new Promise((resolve, reject) => __awaiter(this, void 0, void 0, function* () {
            try {
                let res = yield this.api.call(`/application/users/${this.id}`, 'PATCH', this.getRequestObject({ root_admin: admin }));
                resolve(new User(this.api, res.data.attributes));
            }
            catch (error) {
                reject(error);
            }
        }));
    }
    setLanguage(language) {
        this.language = language;
        return new Promise((resolve, reject) => __awaiter(this, void 0, void 0, function* () {
            try {
                let res = yield this.api.call(`/application/users/${this.id}`, 'PATCH', this.getRequestObject({ language }));
                resolve(new User(this.api, res.data.attributes));
            }
            catch (error) {
                reject(error);
            }
        }));
    }
    delete() {
        return new Promise((resolve, reject) => __awaiter(this, void 0, void 0, function* () {
            try {
                yield this.api.call(`/application/users/${this.id}`, 'DELETE');
                resolve();
            }
            catch (error) {
                reject(error);
            }
        }));
    }
}
exports.default = User;
