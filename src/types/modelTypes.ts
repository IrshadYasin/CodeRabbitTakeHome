export type ModelType = {
    text: {
        maxTokens: number;
        temperature: number;
    };
    image: {
        width: number;
        height: number;
        format: 'png' | 'jpeg';
    };
    audio: {
        sampleRate: number;
        channels: number;
    };
};
