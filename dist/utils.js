"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getMDFiles = exports.ppJSON = void 0;
var glob_1 = __importDefault(require("glob"));
var getMDFiles = function (path) {
    return glob_1.default.sync(path + '/**/*.md');
};
exports.getMDFiles = getMDFiles;
var ppJSON = function (obj) {
    return JSON.stringify(obj, null, 2);
};
exports.ppJSON = ppJSON;
