import 'reflect-metadata';
import { RequestHandler } from 'express';
import { MetadataKeys } from './MetadataKeys';

//factory decorator (returns function)
export function use(middleware: RequestHandler) {
  return function (target: any, key: string, desc: PropertyDescriptor) {
    const middlewares =
      Reflect.getMetadata(MetadataKeys.middleware, target, key) || [];
    middlewares.push(middleware);

    Reflect.defineMetadata(MetadataKeys.middleware, middlewares, target, key);
    // or shorter by destructuring:
    // Reflect.defineMetadata(
    //   MetadataKeys.middleware,
    //   [...middlewares, middleware],
    //   target,
    //   key
    // );
  };
}
