"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var decorators_1 = require("./decorators");
//create new middleware:
function requireAuth(req, res, next) {
    if (req.session && req.session.loggedIn) {
        next();
        return;
    }
    res.status(403);
    res.send('Not permitted');
}
var RouteController = /** @class */ (function () {
    function RouteController() {
    }
    RouteController.prototype.getRoot = function (req, res) {
        // req session
        if (req.session && req.session.loggedIn) {
            res.send("\n        <div>You are logged in</div>\n        <a href='/auth/logout'>Logout</a>\n      ");
        }
        else {
            res.send("\n      <div>You are NOT logged in</div>\n      <a href='/auth/login'>Login</a>\n    ");
        }
    };
    RouteController.prototype.getProtected = function (req, res) {
        res.send("<h1>Welcome to protected route, logged in user</h1>");
    };
    __decorate([
        (0, decorators_1.get)('/'),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object, Object]),
        __metadata("design:returntype", void 0)
    ], RouteController.prototype, "getRoot", null);
    __decorate([
        (0, decorators_1.get)('/protected'),
        (0, decorators_1.use)(requireAuth),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object, Object]),
        __metadata("design:returntype", void 0)
    ], RouteController.prototype, "getProtected", null);
    RouteController = __decorate([
        (0, decorators_1.controller)('') // to avoid end of the route '//' we should leave empty string ('')
    ], RouteController);
    return RouteController;
}());
