import React from 'react'
import ReactDOM from 'react-dom'
import ReactMarkdown from 'react-markdown'

const MarkdownReactUI = ({ props }) => {
  return (
    <div className='editor-inner spacingg'>
      <h3 className='text-success text-center py-2'>Preview</h3>
      <ReactMarkdown children={props} />
    </div>
  )
}

export default MarkdownReactUI