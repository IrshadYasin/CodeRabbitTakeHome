export type Brand<K, T> = K & { __brand: T };
export type ModelId = Brand<string, 'ModelId'>;
export type DeploymentId = Brand<string, 'DeploymentId'>;
