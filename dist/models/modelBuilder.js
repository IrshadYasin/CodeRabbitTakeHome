"use strict";
// src/models/modelBuilder.ts
Object.defineProperty(exports, "__esModule", { value: true });
exports.ModelBuilder = void 0;
class ModelBuilder {
    constructor() {
        this.config = { metadata: {} };
    }
    setId(id) {
        this.config.id = id;
        return this;
    }
    setVersion(version) {
        this.config.version = version;
        return this;
    }
    setParameters(params) {
        this.config.parameters = params;
        return this;
    }
    addMetadata(key, value) {
        this.config.metadata[key] = value;
        return this;
    }
    build() {
        if (!this.config.id || !this.config.version || !this.config.parameters) {
            throw new Error('Incomplete model configuration');
        }
        return this.config;
    }
}
exports.ModelBuilder = ModelBuilder;
