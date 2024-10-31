// tests/modelManager.test.ts

import { ModelManager } from '../src/models/modelManager';
import { ModelId } from '../src/types/brand';

describe('ModelManager', () => {
    it('should add and retrieve a model', () => {
        const manager = new ModelManager<'text'>();
        const config = {
            id: 'model-1' as ModelId,
            type: 'text',
            version: '1.0',
            parameters: { maxTokens: 100, temperature: 0.7 },
            metadata: {}
        };
        manager.addModel(config);
        expect(manager.getModel(config.id)).toEqual(config);
    });

    it('should remove a model', () => {
        const manager = new ModelManager<'text'>();
        const config = { id: 'model-1' as ModelId, type: 'text', version: '1.0', parameters: { maxTokens: 100, temperature: 0.7 }, metadata: {} };
        manager.addModel(config);
        expect(manager.removeModel(config.id)).toBe(true);
        expect(manager.getModel(config.id)).toBeUndefined();
    });
});
