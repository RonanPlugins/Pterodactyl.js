"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Nest {
    constructor(data) {
        this.id = data.id;
        this.uuid = data.uuid;
        this.internalId = data.uuid;
        this.author = data.author;
        this.name = data.name;
        this.description = data.description;
        this.updatedAt = new Date(data.updated_at);
        this.createdAt = new Date(data.created_at);
    }
    toJSON() {
        return {
            id: this.id,
            uuid: this.uuid,
            author: this.author,
            name: this.name,
            description: this.description,
            updatedAt: this.updatedAt,
            createdAt: this.createdAt
        };
    }
}
exports.default = Nest;
