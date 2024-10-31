// src/models/modelManager.ts

import { ModelConfig, ModelType } from '../types/modelConfig';
import { ModelId } from '../types/brand';

export class ModelManager<T extends keyof ModelType> {
    private models: Map<ModelId, ModelConfig<T>> = new Map();

    addModel(config: ModelConfig<T>): void {
        this.models.set(config.id, config);
    }

    getModel(id: ModelId): ModelConfig<T> | undefined {
        return this.models.get(id);
    }

    removeModel(id: ModelId): boolean {
        return this.models.delete(id);
    }
}
