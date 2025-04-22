import { readFileSync } from 'fs'
import Markdown from 'react-markdown'

export default function Page(params) {
  const file = readFileSync('public/test.md').toString()
  
  return <div>
    <h1>Page view</h1>
    <Markdown>{file}</Markdown>
  </div>
}