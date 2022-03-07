## md-to-json-converter

Turn your markdown files into a single JSON file.

## Installation

```
$ npm i md-to-json-converter
```

or if you use yarn

```
$ yarn add md-to-json-converter
```

## Usage

The code below displays a simple usecase of this module.

```js
import { converteMdToJSON } from 'md-to-json-converter'
import path from 'path'

const __dirname = path.resolve();
const contentPath = path.join(__dirname, './example/content')
const outputPath = path.join(__dirname, './example/output/posts.json')

// Returns Promise.
converteMdToJSON({
  // available options are listed below.
  contentPath,
  outputPath,
}).then((data) => {
  console.log('data:', data);
}).catch((err) => {
  console.log('error:', err);
})
```

Here are the options you can set.

| Name                 | Type              | Description                                                                   |
| -------------------- | ----------------- | ----------------------------------------------------------------------------- |
| `contentPath`       | string | **Required** The path to the director where your markdown files live.|
| `outputPath`         | string| **Required**  The path to the JSON file you want to export the result to.|
| `remarkableOptions` | Remarkable.Options|This module uses [remarkable](https://github.com/jonschlinkert/remarkable) as its markdown parser. You can see [here](https://github.com/jonschlinkert/remarkable#options) for available options for remarkable|
| `raw` | boolean| If this is set to true, the module is not gonna parse the markdonw internally and export the markdown text itself.|

## Examples

### Input

```md
---
title: Test Title
date: 2022-03-05
description: Description for this blog post
tags: [test-tag]
---

## Heading2


Here's an [**important** anchor link](#example).

Two newlines creates a line break.
```


### Output

```json
{
  "data": [
    {
      "body": "<h2>Heading2</h2>\n<p>Here's an <a href=\"#example\"><strong>important</strong> anchor link</a>.</p>\n<p>Two newlines creates a line break.</p>\n",
      "title": "Test Title",
      "date": "2022-03-05T00:00:00.000Z",
      "description": "Description for this blog post",
      "tags": [
        "test-tag"
      ]
    }
  ]
}
```
