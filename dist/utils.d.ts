import type { JsonObj } from './builder';
declare const getMDFiles: (path: string) => string[];
declare const ppJSON: (obj: JsonObj) => string;
declare const writeJSON: (outputPath: string, jsonObj: JsonObj) => void;
export { ppJSON, getMDFiles, writeJSON };
