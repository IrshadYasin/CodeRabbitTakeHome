MODEL MANAGEMENT SYSTEM
A type-safe model management system built in TypeScript. This system manages various types of AI models (text, image, audio) with strict type safety, compile-time validation, and an extensible event-handling system.

PROJECT OVERVIEW
This project is a TypeScript-based system to manage multiple AI model types and configurations, ensuring each model type is configured accurately with a builder pattern. It provides:

 - Type-safe model configuration and validation.
 - A builder pattern for setting up model configurations.
 - A type-safe event system that emits and listens for model events.
 - Comprehensive error handling with proper TypeScript types.
 - Unit tests for each model type and its events using Jest.

 FOLDER STRUCTURE
src/

├── models/        # Core models and interfaces for configuration
├── types/         # Type definitions and branded types

tests/             # Jest test files for the ModelManager and EventHandler
package.json       # Project dependencies and scripts
tsconfig.json      # TypeScript configuration with strict mode
README.md          # Project documentation
jest.config.js     # jest configuration file

GETTING STARTED
Prereqs-
- Node.js (v14+ recommended)
- npm (Node Package Manager)

INSTALLATION
- Clone the repository.
    - git clone <repository-url>
      cd <repository-directory>
- Install dependencies.
    - npm install
- build project
    - npm run build
- Run tests
    - npm test

USAGE

Model Configuration
- Each model type (text, image, and audio) has specific configurations that can be set using a builder pattern and managed by the ModelManager.
    ```
    import { ModelManager } from './models/modelManager';
import { ModelId } from './types/brand';

// Example for text model configuration
const textModel = new ModelManager<'text'>({
    id: 'model-1' as ModelId,
    type: 'text',
    version: '1.0',
    parameters: {
        maxTokens: 100,
        temperature: 0.7
    },
    metadata: {
        author: 'AI Team'
    }
});

// Example for image model configuration
const imageModel = new ModelManager<'image'>({
    id: 'model-2' as ModelId,
    type: 'image',
    version: '1.0',
    parameters: {
        width: 1920,
        height: 1080,
        format: 'jpeg'
    },
    metadata: {
        createdBy: 'Graphics Team'
    }
});
    ```
Event Handling
- EventHandler allows registering event listeners for each model type and event type (e.g., deployment.started, deployment.finished)

```
import { EventHandler } from './models/eventHandler';

// Set up an event handler for text models
const textEventHandler = new EventHandler<'text'>();
textEventHandler.on('deployment.started', (event) => {
    console.log('Deployment started for text model:', event);
});

// Emit an event
textEventHandler.emit('deployment.started', {
    modelId: 'model-1' as ModelId,
    config: textModel.getConfig(),
    eventType: 'deployment.started',
    timestamp: new Date()
});
```
RUNNING TESTS
-The project includes tests for each model type and event system using Jest. Run all tests with the command:
    - npm test

DESIGN DECISIONS
- Type Safety with Branded Types: Model and Deployment IDs are defined as branded types to prevent accidental misuse of raw strings, enforcing type safety at compile time.
- Builder Pattern for Configurations: The builder pattern allows for more flexible and readable model configurations.
- Event System with Type Constraints: Events are strictly typed, ensuring that only relevant model types and event types can be emitted and listened to, reducing the likelihood of runtime errors.

TRADE OFFS CONSIDERED
- Literal Types for Events and Parameters: Using literal types (as const) ensures exact matches between model configurations and event handlers. This can lead to some refactoring requirements if model parameters change, but it reduces bugs.
- Limited to Specific Model Types: This design is specific to text, image, and audio model types. While this limits flexibility, it could be extended by modifying the ModelType and adding new event configurations.
