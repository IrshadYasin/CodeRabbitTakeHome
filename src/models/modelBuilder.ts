import { ModelConfig, ModelType } from '../types/modelConfig';
import { ModelId } from '../types/brand';

export class ModelBuilder<T extends keyof ModelType> {
    private config: Partial<ModelConfig<T>> = { metadata: {} };

    setId(id: ModelId): this {
        this.config.id = id;
        return this;
    }

    setVersion(version: string): this {
        this.config.version = version;
        return this;
    }

    setParameters(params: ModelType[T]): this {
        this.config.parameters = params;
        return this;
    }

    addMetadata<K extends string, V>(key: K, value: V): this {
        this.config.metadata![key] = value;
        return this;
    }

    build(): ModelConfig<T> {
        if (!this.config.id || !this.config.version || !this.config.parameters) {
            throw new Error('Incomplete model configuration');
        }
        return this.config as ModelConfig<T>;
    }
}
