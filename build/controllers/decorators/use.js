"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.use = void 0;
require("reflect-metadata");
var MetadataKeys_1 = require("./MetadataKeys");
//factory decorator (returns function)
function use(middleware) {
    return function (target, key, desc) {
        var middlewares = Reflect.getMetadata(MetadataKeys_1.MetadataKeys.middleware, target, key) || [];
        middlewares.push(middleware);
        Reflect.defineMetadata(MetadataKeys_1.MetadataKeys.middleware, middlewares, target, key);
        // or shorter by destructuring:
        // Reflect.defineMetadata(
        //   MetadataKeys.middleware,
        //   [...middlewares, middleware],
        //   target,
        //   key
        // );
    };
}
exports.use = use;
