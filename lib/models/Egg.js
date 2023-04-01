"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Egg {
    constructor(data) {
        this.id = data.id;
        this.uuid = data.uuid;
        this.internalId = data.uuid;
        this.nest = data.nest;
        this.author = data.author;
        this.description = data.description;
        this.dockerImage = data.docker_image;
        this.config = data.config;
        this.startup = data.startup;
        this.script = data.script;
        this.updatedAt = new Date(data.updated_at);
        this.createdAt = new Date(data.created_at);
    }
    toJSON() {
        return {
            id: this.id,
            uuid: this.uuid,
            nest: this.nest,
            author: this.author,
            description: this.description,
            dockerImage: this.dockerImage,
            config: this.config,
            startup: this.startup,
            script: this.script,
            updatedAt: this.updatedAt,
            createdAt: this.createdAt
        };
    }
}
exports.default = Egg;
