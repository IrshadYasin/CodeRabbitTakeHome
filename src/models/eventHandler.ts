import { ModelId } from '../types/brand';
import { ModelType, ModelConfig } from '../types/modelConfig';

// Define possible event types
type EventType = 'deployment.started' | 'deployment.finished';

// Define the ModelEvent type for a specific model type (text, image, or audio)
type ModelEvent<T extends keyof ModelType> = {
    modelId: ModelId;
    config: ModelConfig<T>;
    eventType: EventType;
    timestamp: Date;
};

// The EventHandler class for handling events with type safety
export class EventHandler<T extends keyof ModelType> {
    private listeners: {
        [K in EventType]?: ((event: ModelEvent<T>) => void)[];
    } = {};

    // Register an event listener for a specific event type
    on(eventType: EventType, listener: (event: ModelEvent<T>) => void): void {
        if (!this.listeners[eventType]) {
            this.listeners[eventType] = [];
        }
        this.listeners[eventType]?.push(listener);
    }

    // Emit an event to invoke all registered listeners for the specified event type
    emit(eventType: EventType, event: ModelEvent<T>): void {
        const listeners = this.listeners[eventType];
        if (listeners) {
            listeners.forEach((listener) => listener(event));
        }
    }
}
