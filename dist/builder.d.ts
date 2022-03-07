import { Remarkable } from 'remarkable';
declare type RemarkableMeta = Record<string, any>;
declare type RemarkableParser = typeof Remarkable & RemarkableMeta;
declare const constructJSONObj: (parser: RemarkableParser, contentPath: string) => void;
export { constructJSONObj };
