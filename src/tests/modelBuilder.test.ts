// tests/modelBuilder.test.ts

import { ModelBuilder } from '../src/models/modelBuilder';
import { ModelId } from '../src/types/brand';

describe('ModelBuilder', () => {
    it('should create a text model configuration correctly', () => {
        const builder = new ModelBuilder<'text'>()
            .setId('model-1' as ModelId)
            .setVersion('1.0')
            .setParameters({ maxTokens: 100, temperature: 0.7 })
            .addMetadata('author', 'AI Team');
        const config = builder.build();

        expect(config).toEqual({
            id: 'model-1' as ModelId,
            type: 'text',
            version: '1.0',
            parameters: { maxTokens: 100, temperature: 0.7 },
            metadata: { author: 'AI Team' }
        });
    });

    it('should throw an error for incomplete configuration', () => {
        const builder = new ModelBuilder<'text'>().setId('model-1' as ModelId);
        expect(() => builder.build()).toThrowError('Incomplete model configuration');
    });
});
