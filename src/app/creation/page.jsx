"use client"
import React from 'react'
import Editor from '@/components/Lexical/Editor';
import { LexicalComposer } from '@lexical/react/LexicalComposer';

import PlaygroundEditorTheme from '@/components/Lexical/themes/PlaygroundEditorTheme'
import PlaygroundNodes from '@/components/Lexical/nodes/PlaygroundNodes';

const page = () => {
  const initialConfig = {
    editorState: null,
    namespace: 'Redaction',
    nodes: [...PlaygroundNodes],
    onError: (error) => {
      throw error;
    },
    theme: PlaygroundEditorTheme,
  };

  return (
    <div >
      <LexicalComposer initialConfig={initialConfig}>
        <div className="editor-shell">
          <Editor />
        </div>
      </LexicalComposer>
    </div>
  )
}

export default page