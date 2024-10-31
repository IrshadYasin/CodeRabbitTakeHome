"use strict";
// src/models/modelManager.ts
Object.defineProperty(exports, "__esModule", { value: true });
exports.ModelManager = void 0;
class ModelManager {
    constructor() {
        this.models = new Map();
    }
    addModel(config) {
        this.models.set(config.id, config);
    }
    getModel(id) {
        return this.models.get(id);
    }
    removeModel(id) {
        return this.models.delete(id);
    }
}
exports.ModelManager = ModelManager;
