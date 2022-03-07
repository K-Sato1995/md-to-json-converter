import { Remarkable  } from 'remarkable'
import { getMDFiles } from './utils'
import * as fs from 'fs'

/* eslint-disable @typescript-eslint/no-explicit-any */
type RemarkableMeta = Record<string, any>
type RemarkableParser = typeof Remarkable & RemarkableMeta

// const parser: RemarkableParser = new Remarkable(remarkableConfig).use(meta)

const constructJSONObj = (parser: RemarkableParser, contentPath: string) => {
    // const jsonObj = {
    //     'data': []
    // }
    // const mdFiles = getMDFiles(contentPath)

    // for(let i = 0; i < mdFiles.length; i++) {
    //     const mdFile = mdFiles[i]
    //     const mdText = fs.readFileSync(mdFile).toString()
    //     const item = {
    //         body: parser.render(mdText),
    //         ...parser.meta,
    //     }
    //     jsonObj.data.push(item) 
    // }
    // return jsonObj
}

export { constructJSONObj }
