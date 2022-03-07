import type { RemarkableParser } from './index';
export interface JsonObj {
    data: Record<string, unknown>[];
}
declare const constructJSONObj: (parser: RemarkableParser, mdFiles: string[], raw: boolean) => JsonObj;
export { constructJSONObj };
