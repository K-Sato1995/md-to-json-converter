import type { RemarkableParser } from './index'
import * as fs from 'fs'

export interface JsonObj {
    data: Record<string, unknown>[]
}

const constructJSONObj = (parser: RemarkableParser, mdFiles: string[]) => {
    const jsonObj: JsonObj = { data: [] }
    for(let i = 0; i < mdFiles.length; i++) {
        const mdFile = mdFiles[i]
        const mdText = fs.readFileSync(mdFile).toString()
        const item = {
            body: parser.render(mdText),
            ...parser.meta,
        }
        jsonObj.data.push(item) 
    }
    return jsonObj
}

export { constructJSONObj }
