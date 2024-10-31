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
            "id": "model-1", 
            "metadata": {"author": "AI Team"}, 
            "parameters": {"maxTokens": 100, "temperature": 0.7}, 
            "version": "1.0"});
    });
});

