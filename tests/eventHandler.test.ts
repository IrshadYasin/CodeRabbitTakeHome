import { ModelId } from '../src/types/brand';
import { EventHandler } from '../src/models/eventHandler';

describe('EventHandler', () => {
    // Test for text model events
    it('should correctly register and emit a deployment.started event for a text model', () => {
        const handler = new EventHandler<'text'>();

        const mockListener = jest.fn();
        handler.on('deployment.started', mockListener);

        const eventData = {
            modelId: 'model-1' as ModelId,
            config: {
                id: 'model-1' as ModelId,
                type: 'text' as const,
                version: '1.0',
                parameters: {
                    maxTokens: 100,
                    temperature: 0.7
                },
                metadata: {}
            },
            eventType: 'deployment.started' as const,
            timestamp: new Date()
        };

        handler.emit('deployment.started', eventData);
        expect(mockListener).toHaveBeenCalledWith(eventData);
        expect(mockListener).toHaveBeenCalledTimes(1);
    });

    it('should not call listener for different event types on text model', () => {
        const handler = new EventHandler<'text'>();
        const mockListener = jest.fn();
        handler.on('deployment.started', mockListener);

        const eventData = {
            modelId: 'model-1' as ModelId,
            config: {
                id: 'model-1' as ModelId,
                type: 'text' as const,
                version: '1.0',
                parameters: {
                    maxTokens: 100,
                    temperature: 0.7
                },
                metadata: {}
            },
            eventType: 'deployment.finished' as const,
            timestamp: new Date()
        };

        handler.emit('deployment.finished', eventData);
        expect(mockListener).not.toHaveBeenCalled();
    });

    // Test for image model events
    it('should correctly register and emit a deployment.started event for an image model', () => {
        const handler = new EventHandler<'image'>();

        const mockListener = jest.fn();
        handler.on('deployment.started', mockListener);

        const eventData = {
            modelId: 'model-2' as ModelId,
            config: {
                id: 'model-2' as ModelId,
                type: 'image' as const,
                version: '1.0',
                parameters: {
                    width: 1920,
                    height: 1080,
                    format: 'jpeg' as const // Explicitly set to 'jpeg' as a literal type
                },
                metadata: {}
            },
            eventType: 'deployment.started' as const,
            timestamp: new Date()
        };

        handler.emit('deployment.started', eventData);
        expect(mockListener).toHaveBeenCalledWith(eventData);
        expect(mockListener).toHaveBeenCalledTimes(1);
    });

    it('should not call listener for different event types on image model', () => {
        const handler = new EventHandler<'image'>();
        const mockListener = jest.fn();
        handler.on('deployment.started', mockListener);

        const eventData = {
            modelId: 'model-2' as ModelId,
            config: {
                id: 'model-2' as ModelId,
                type: 'image' as const,
                version: '1.0',
                parameters: {
                    width: 1920,
                    height: 1080,
                    format: 'jpeg' as const // Explicitly set to 'jpeg' as a literal type
                },
                metadata: {}
            },
            eventType: 'deployment.finished' as const,
            timestamp: new Date()
        };

        handler.emit('deployment.finished', eventData);
        expect(mockListener).not.toHaveBeenCalled();
    });

    // Test for audio model events
    it('should correctly register and emit a deployment.started event for an audio model', () => {
        const handler = new EventHandler<'audio'>();

        const mockListener = jest.fn();
        handler.on('deployment.started', mockListener);

        const eventData = {
            modelId: 'model-3' as ModelId,
            config: {
                id: 'model-3' as ModelId,
                type: 'audio' as const,
                version: '1.0',
                parameters: {
                    sampleRate: 44100,
                    channels: 2
                },
                metadata: {}
            },
            eventType: 'deployment.started' as const,
            timestamp: new Date()
        };

        handler.emit('deployment.started', eventData);
        expect(mockListener).toHaveBeenCalledWith(eventData);
        expect(mockListener).toHaveBeenCalledTimes(1);
    });

    it('should not call listener for different event types on audio model', () => {
        const handler = new EventHandler<'audio'>();
        const mockListener = jest.fn();
        handler.on('deployment.started', mockListener);

        const eventData = {
            modelId: 'model-3' as ModelId,
            config: {
                id: 'model-3' as ModelId,
                type: 'audio' as const,
                version: '1.0',
                parameters: {
                    sampleRate: 44100,
                    channels: 2
                },
                metadata: {}
            },
            eventType: 'deployment.finished' as const,
            timestamp: new Date()
        };

        handler.emit('deployment.finished', eventData);
        expect(mockListener).not.toHaveBeenCalled();
    });
});

