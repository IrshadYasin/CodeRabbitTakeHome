"use strict";
// src/models/eventHandler.ts
Object.defineProperty(exports, "__esModule", { value: true });
exports.EventHandler = void 0;
class EventHandler {
    constructor() {
        this.listeners = new Map();
    }
    on(eventType, callback) {
        if (!this.listeners.has(eventType)) {
            this.listeners.set(eventType, []);
        }
        this.listeners.get(eventType).push(callback);
    }
    trigger(event) {
        const listeners = this.listeners.get(event.eventType);
        if (listeners) {
            listeners.forEach(callback => callback(event));
        }
    }
}
exports.EventHandler = EventHandler;
