// tests/eventHandler.test.ts

import { EventHandler } from '../src/models/eventHandler';
import { ModelId } from '../src/types/brand';

describe('EventHandler', () => {
    it('should register and trigger an event', () => {
        const handler = new EventHandler<'text'>();
        const callback = jest.fn();
        handler.on('deployment.started', callback);

        const event = {
            modelId: 'model-1' as ModelId,
            config: { id: 'model-1' as ModelId, type: 'text', version: '1.0', parameters: { maxTokens: 100, temperature: 0.7 }, metadata: {} },
            eventType: 'deployment.started',
            timestamp: new Date()
        };
        handler.trigger(event);

        expect(callback).toHaveBeenCalledWith(event);
    });
});
