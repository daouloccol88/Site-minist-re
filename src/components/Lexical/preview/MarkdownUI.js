import React from 'react';
import MarkdownPreview from '@uiw/react-markdown-preview';

const MarkdownUI = ({ props }) => {
  return (
    <div className='editor-inner spacingg'>
      <h3 className='text-success text-center py-2'>Preview</h3>
      <MarkdownPreview source={props} />
    </div>
  )
}

export default MarkdownUI