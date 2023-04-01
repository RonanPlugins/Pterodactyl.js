"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Pagination {
    constructor(data) {
        this.total = data.total;
        this.count = data.count;
        this.pageSize = data.per_page;
        this.currentPage = data.current_page;
        this.totalPages = data.total_pages;
        this.links = data.links;
    }
    nextPage() {
        return this.currentPage + 1;
    }
}
exports.default = Pagination;
