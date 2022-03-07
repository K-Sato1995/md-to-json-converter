import { Remarkable } from 'remarkable';
import type { JsonObj } from './builder';
declare type RemarkableMeta = Record<string, any>;
export declare type RemarkableParser = Remarkable & RemarkableMeta;
interface MdToJSONConverterOptions {
    contentPath: string;
    outputPath: string;
    remarkableOptions?: Remarkable.Options;
    raw?: boolean;
}
export declare const converteMdToJSON: (options: MdToJSONConverterOptions) => Promise<JsonObj>;
export {};
