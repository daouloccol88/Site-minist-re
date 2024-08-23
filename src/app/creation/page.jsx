"use client"
import React from 'react'
import MyEditor from '@/components/Lexical/MyEditor'
import { LexicalComposer } from '@lexical/react/LexicalComposer';
import ExampleTheme from '@/components/Lexical/Theme';
import { HeadingNode, QuoteNode } from "@lexical/rich-text";
import { TableCellNode, TableNode, TableRowNode } from "@lexical/table";
import { ListItemNode, ListNode } from "@lexical/list";
import { CodeHighlightNode, CodeNode } from "@lexical/code";
import { AutoLinkNode, LinkNode } from "@lexical/link";
const editorConfig = {
  // NOTE: This is critical for collaboration plugin to set editor state to null. It
  // would indicate that the editor should not try to set any default state
  // (not even empty one), and let collaboration plugin do it instead
  editorState: null,
  namespace: 'React.js Collab Demo',
  nodes: [
    HeadingNode,
    ListNode,
    ListItemNode,
    QuoteNode,
    CodeNode,
    CodeHighlightNode,
    TableNode,
    TableCellNode,
    TableRowNode,
    AutoLinkNode,
    LinkNode,
  ],
  // Handling of errors during update
  onError(error) {
    throw error;
  },
  // The editor theme
  theme: ExampleTheme,
  editable: true,
};
const page = () => {
  return (
    <div >
      <LexicalComposer initialConfig={editorConfig}>
        <MyEditor/>
      </LexicalComposer>
    </div>
  )
}

export default page