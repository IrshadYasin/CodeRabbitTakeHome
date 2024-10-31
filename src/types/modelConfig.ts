import { ModelId } from './brand';
import { ModelType } from './modelTypes';

export interface ModelConfig<T extends keyof ModelType> {
    id: ModelId;
    type: T;
    version: string;
    parameters: ModelType[T];
    metadata: Record<string, unknown>;
}
export { ModelType };

