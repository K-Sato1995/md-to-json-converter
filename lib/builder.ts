import type { RemarkableParser } from './index'
import * as fs from 'fs'

export interface JsonObj {
    data: Record<string, unknown>[]
}

const constructJSONObj = (parser: RemarkableParser, mdFiles: string[], raw: boolean) => {
    const jsonObj: JsonObj = { data: [] }
    for(let i = 0; i < mdFiles.length; i++) {
        const mdFile = mdFiles[i]
        const mdText = fs.readFileSync(mdFile).toString()
        const renderedResult = parser.render(mdText)

        const item = {
            body: raw ? mdText : renderedResult,
            ...parser.meta,
        }
        jsonObj.data.push(item) 
    }
    return jsonObj
}

export { constructJSONObj }
