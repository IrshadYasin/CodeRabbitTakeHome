// src/models/eventHandler.ts

import { ModelId } from '../types/brand';
import { ModelConfig, ModelType } from '../types/modelConfig';

export type ModelEvent<T extends keyof ModelType> = {
    modelId: ModelId;
    config: ModelConfig<T>;
    eventType: 'deployment.started' | 'deployment.completed';
    timestamp: Date;
};

type EventCallback<T extends keyof ModelType> = (event: ModelEvent<T>) => void;

export class EventHandler<T extends keyof ModelType> {
    private listeners: Map<string, EventCallback<T>[]> = new Map();

    on(eventType: ModelEvent<T>['eventType'], callback: EventCallback<T>): void {
        if (!this.listeners.has(eventType)) {
            this.listeners.set(eventType, []);
        }
        this.listeners.get(eventType)!.push(callback);
    }

    trigger(event: ModelEvent<T>): void {
        const listeners = this.listeners.get(event.eventType);
        if (listeners) {
            listeners.forEach(callback => callback(event));
        }
    }
}
