"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.converteMdToJSON = void 0;
var config_1 = require("./config");
var remarkable_1 = require("remarkable");
var remarkable_meta_1 = __importDefault(require("remarkable-meta"));
var parser = new remarkable_1.Remarkable(config_1.remarkableDefaultConfig).use(remarkable_meta_1.default);
// cli.info(`Path: ${path.resolve(options.cwd, options.src)}`)
/*
  Required
  contentPath: string
  outputPath: string

  Optional
  remarkableConfig
*/
// contentPath, outputPath
function converteMdToJSON(options) {
    console.log(options);
}
exports.converteMdToJSON = converteMdToJSON;
