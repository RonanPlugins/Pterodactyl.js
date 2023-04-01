"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Location {
    constructor(data) {
        this.id = data.id;
        this.shortCode = data.short;
        this.description = data.long;
        this.updatedAt = new Date(data.updated_at);
        this.createdAt = new Date(data.created_at);
    }
    toJSON() {
        return {
            id: this.id,
            shortCode: this.shortCode,
            description: this.description,
            updatedAt: this.updatedAt,
            createdAt: this.createdAt
        };
    }
}
exports.default = Location;
