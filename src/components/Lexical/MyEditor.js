import React, { useState } from "react";
import useMediaQuery from './hooks/useMediaQuery'
import { $generateHtmlFromNodes } from '@lexical/html';
import { RichTextPlugin } from "@lexical/react/LexicalRichTextPlugin";
import { ContentEditable } from "@lexical/react/LexicalContentEditable";
import { HistoryPlugin } from "@lexical/react/LexicalHistoryPlugin";
import { AutoFocusPlugin } from "@lexical/react/LexicalAutoFocusPlugin";
import LexicalErrorBoundary from "@lexical/react/LexicalErrorBoundary";
import { LinkPlugin } from "@lexical/react/LexicalLinkPlugin";
import { ListPlugin } from "@lexical/react/LexicalListPlugin";
import { MarkdownShortcutPlugin } from "@lexical/react/LexicalMarkdownShortcutPlugin";
import { TRANSFORMERS, $convertToMarkdownString } from "@lexical/markdown";
import { OnChangePlugin } from '@lexical/react/LexicalOnChangePlugin';

import "./editor.css";
import DragDropPaste from "./plugins/DragDropPastPlugin";
import ToolbarPlugin from './plugins/ToolbarPlugin';
import TreeViewPlugin from './plugins/TreeViewPlugin';
import FloatingLinkEditorPlugin from "./plugins/FloatingLinkEditorPlugin";

function Placeholder() {
  return <div className="editor-placeholder">Enter some rich text...</div>;
}

export default function Editor() {

  const [inputs, setInputs] = useState({});
  const isSmallWidthViewPort = useMediaQuery('(max-width: 1025px)')
  const [previewMode, setPreviewMode] = useState(false)
  const [textValue, setTextValue] = useState("")
  const handlePreviewMode = () => setPreviewMode(!previewMode);
  const [floatingAnchorElem, setFloatingAnchorElem] =
    useState(null)
  const onChange = (editorState, editor) => {
    editorState.read(() => {
      const markdown = $convertToMarkdownString(TRANSFORMERS);
      const htmlString = $generateHtmlFromNodes(editor, null);
      console.log(htmlString);
      setTextValue(htmlString)
      setInputs(prev => {
        return { ...prev, ["content"]: (htmlString) };
      });
    });
  }
  const onRef = (_floatingAnchorElem) => {
    if (_floatingAnchorElem !== null) {
      setFloatingAnchorElem(_floatingAnchorElem)
    }
  }

  const handleSubmit = ()=> {
    //TODO function de creation d'article (ajout la requete POST avec la bonne data)
    console.log(inputs, textValue);
  }


  function handleChange(event) {
    const { name, value } = event.target;
    setInputs(prev => {
      return { ...prev, [name]: (value) };
    });
  }
  return (
    <div className="container">
      <ToolbarPlugin />
      <div className="editor-inner">
        <RichTextPlugin
          contentEditable={<div className="editor" ref={onRef}><ContentEditable className="editor-input"/></div>}
          placeholder={<Placeholder />}
          ErrorBoundary={LexicalErrorBoundary}
        />
        <AutoFocusPlugin />
        <OnChangePlugin onChange={onChange} />
        <HistoryPlugin />
        {/* <CodeHighlightPlugin /> */}
        <ListPlugin />
        <LinkPlugin />
        <DragDropPaste />
        {floatingAnchorElem && !isSmallWidthViewPort && (
          <FloatingLinkEditorPlugin anchorElem={floatingAnchorElem} />
        )}
        <MarkdownShortcutPlugin transformers={TRANSFORMERS} />
        {/*<TreeViewPlugin />*/}
      </div>
    </div>
  );
}
