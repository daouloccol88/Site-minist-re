/**
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */


import './InlineImageNode.css'

import { AutoFocusPlugin } from '@lexical/react/LexicalAutoFocusPlugin'
import { useLexicalComposerContext } from '@lexical/react/LexicalComposerContext'
import LexicalErrorBoundary from '@lexical/react/LexicalErrorBoundary'
import { LexicalNestedComposer } from '@lexical/react/LexicalNestedComposer'
import { RichTextPlugin } from '@lexical/react/LexicalRichTextPlugin'
import { useLexicalNodeSelection } from '@lexical/react/useLexicalNodeSelection'
import { mergeRegister } from '@lexical/utils'

import {
  $getNodeByKey,
  $getSelection,
  $isNodeSelection,
  $setSelection,
  CLICK_COMMAND,
  COMMAND_PRIORITY_LOW,
  DRAGSTART_COMMAND,
  KEY_BACKSPACE_COMMAND,
  KEY_DELETE_COMMAND,
  KEY_ENTER_COMMAND,
  KEY_ESCAPE_COMMAND,
  SELECTION_CHANGE_COMMAND,
} from 'lexical'
import { Suspense, useCallback, useEffect, useRef, useState } from 'react'

import useModal from '../hooks/useModal'
import { LinkPlugin } from "@lexical/react/LexicalLinkPlugin";
import { ContentEditable } from "@lexical/react/LexicalContentEditable";
import { $isInlineImageNode, InlineImageNode } from './InlineImageNode'
import TextInput from '../../ui/TextInput'
import Select from '../../ui/Select'
import { DialogActions } from '../../ui/Dialog'
import Button from '../../ui/Button'
import FloatingLinkEditorPlugin from '../plugins/FloatingLinkEditorPlugin'
import FloatingTextFormatToolbarPlugin from '../plugins/FloatingTextFormatToolbarPlugin'


function Placeholder() {
  return <div className="editor-placeholder">Enter some rich text...</div>;
}
const imageCache = new Set()

function useSuspenseImage(src) {
  if (!imageCache.has(src)) {
    throw new Promise((resolve) => {
      const img = new Image()
      img.src = src
      img.onload = () => {
        imageCache.add(src)
        resolve(null)
      }
    })
  }
}

function LazyImage({
  altText,
  className,
  imageRef,
  src,
  width,
  height,
  position,
}) {
  useSuspenseImage(src)
  return (
    <img
      className={className || undefined}
      src={src}
      alt={altText}
      ref={imageRef}
      data-position={position}
      style={{
        height,
        width,
        display: 'block',
      }}
      draggable="false"
    />
  )
}

export function UpdateInlineImageDialog({
  activeEditor,
  nodeKey,
  onClose,
}) {
  const editorState = activeEditor.getEditorState()
  const node = editorState.read(() => $getNodeByKey(nodeKey))
  const [altText, setAltText] = useState(node.getAltText())
  const [showCaption, setShowCaption] = useState(node.getShowCaption())
  const [position, setPosition] = useState < Position > (node.getPosition())

  const handleShowCaptionChange = (e) => {
    setShowCaption(e.target.checked)
  }

  const handlePositionChange = (e) => {
    setPosition(e.target.value)
  }

  const handleOnConfirm = () => {
    const payload = { altText, showCaption, position }
    if (node) {
      activeEditor.update(() => { node.update(payload) })
    }
    onClose()
  }

  return (
    <>
      <div style={{ marginBottom: '1em' }}>
        <TextInput
          label="Alt Text"
          placeholder="Descriptive alternative text"
          onChange={setAltText}
          value={altText}
          data-test-id="image-modal-alt-text-input"
        />
      </div>

      <Select style={{ marginBottom: '1em', width: '208px' }} value={position} label="Position" name="position" id="position-select" onChange={handlePositionChange}>
        <option value="left">Left</option>
        <option value="right">Right</option>
        <option value="full">Full Width</option>
      </Select>

      <div className="Input__wrapper">
        <input id="caption" type="checkbox" checked={showCaption} onChange={handleShowCaptionChange} />
        <label htmlFor="caption">Show Caption</label>
      </div>

      <DialogActions>
        <Button
          data-test-id="image-modal-file-upload-btn"
          onClick={() => handleOnConfirm()}>
          Confirm
        </Button>
      </DialogActions>
    </>
  )
}

export default function InlineImageComponent({
  src,
  altText,
  nodeKey,
  width,
  height,
  showCaption,
  caption,
  position,
}) {
  const [modal, showModal] = useModal()
  const imageRef = useRef < null | HTMLImageElement > (null)
  const buttonRef = useRef < HTMLButtonElement | null > (null)
  const [isSelected, setSelected, clearSelection] =
    useLexicalNodeSelection(nodeKey)
  const [editor] = useLexicalComposerContext()
  const [selection, setSelection] = useState <
    RangeSelection | NodeSelection | GridSelection | null
    > (null)
  const activeEditorRef = useRef < LexicalEditor | null > (null)

  const onDelete = useCallback(
    (payload) => {
      if (isSelected && $isNodeSelection($getSelection())) {
        const event= payload
        event.preventDefault()
        const node = $getNodeByKey(nodeKey)
        if ($isInlineImageNode(node)) {
          node?.remove()
        }
        setSelected(false)
      }
      return false
    },
    [isSelected, nodeKey, setSelected],
  )

  const onEnter = useCallback(
    (event) => {
      const latestSelection = $getSelection()
      const buttonElem = buttonRef.current
      if (
        isSelected &&
        $isNodeSelection(latestSelection) &&
        latestSelection.getNodes().length === 1
      ) {
        if (showCaption) {
          // Move focus into nested editor
          $setSelection(null)
          event.preventDefault()
          caption.focus()
          return true
        } else if (
          buttonElem !== null &&
          buttonElem !== document.activeElement
        ) {
          event.preventDefault()
          buttonElem.focus()
          return true
        }
      }
      return false
    },
    [caption, isSelected, showCaption],
  )

  const onEscape = useCallback(
    (event) => {
      if (
        activeEditorRef.current === caption ||
        buttonRef.current === event.target
      ) {
        $setSelection(null)
        editor.update(() => {
          setSelected(true)
          const parentRootElement = editor.getRootElement()
          if (parentRootElement !== null) {
            parentRootElement.focus()
          }
        })
        return true
      }
      return false
    },
    [caption, editor, setSelected],
  )

  useEffect(() => {
    let isMounted = true
    const unregister = mergeRegister(
      editor.registerUpdateListener(({ editorState }) => {
        if (isMounted) {
          setSelection(editorState.read(() => $getSelection()))
        }
      }),
      editor.registerCommand(
        SELECTION_CHANGE_COMMAND,
        (_, activeEditor) => {
          activeEditorRef.current = activeEditor
          return false
        },
        COMMAND_PRIORITY_LOW,
      ),
      editor.registerCommand (
        CLICK_COMMAND,
        (payload) => {
          const event = payload
          if (event.target === imageRef.current) {
            if (event.shiftKey) {
              setSelected(!isSelected)
            } else {
              clearSelection()
              setSelected(true)
            }
            return true
          }

          return false
        },
        COMMAND_PRIORITY_LOW,
      ),
      editor.registerCommand(
        DRAGSTART_COMMAND,
        (event) => {
          if (event.target === imageRef.current) {
            // TODO This is just a temporary workaround for FF to behave like other browsers.
            // Ideally, this handles drag & drop too (and all browsers).
            event.preventDefault()
            return true
          }
          return false
        },
        COMMAND_PRIORITY_LOW,
      ),
      editor.registerCommand(
        KEY_DELETE_COMMAND,
        onDelete,
        COMMAND_PRIORITY_LOW,
      ),
      editor.registerCommand(
        KEY_BACKSPACE_COMMAND,
        onDelete,
        COMMAND_PRIORITY_LOW,
      ),
      editor.registerCommand(KEY_ENTER_COMMAND, onEnter, COMMAND_PRIORITY_LOW),
      editor.registerCommand(
        KEY_ESCAPE_COMMAND,
        onEscape,
        COMMAND_PRIORITY_LOW,
      ),
    )
    return () => {
      isMounted = false
      unregister()
    }
  }, [
    clearSelection,
    editor,
    isSelected,
    nodeKey,
    onDelete,
    onEnter,
    onEscape,
    setSelected,
  ])

  const draggable = isSelected && $isNodeSelection(selection)
  const isFocused = isSelected
  return (
    <Suspense fallback={null}>
      <>
        <div draggable={draggable}>
          <button
            className="image-edit-button"
            ref={buttonRef}
            onClick={() => {
              showModal('Update Inline Image', (onClose) => (
                <UpdateInlineImageDialog
                  activeEditor={editor}
                  nodeKey={nodeKey}
                  onClose={onClose}
                />
              ))
            }}>
            Edit
          </button>
          <LazyImage
            className={
              isFocused
                ? `focused ${$isNodeSelection(selection) ? 'draggable' : ''}`
                : null
            }
            src={src}
            altText={altText}
            imageRef={imageRef}
            width={width}
            height={height}
            position={position}
          />
        </div>
        {showCaption && (
          <div className="image-caption-container">
            <LexicalNestedComposer initialEditor={caption}>
              <AutoFocusPlugin />
              <LinkPlugin />
              <FloatingLinkEditorPlugin />
              <FloatingTextFormatToolbarPlugin />
              <RichTextPlugin
                contentEditable={
                  <ContentEditable className="InlineImageNode__contentEditable" />
                }
                placeholder={
                  <Placeholder className="InlineImageNode__placeholder">
                    Enter a caption...
                  </Placeholder>
                }
                ErrorBoundary={LexicalErrorBoundary}
              />
            </LexicalNestedComposer>
          </div>
        )}
      </>
      {modal}
    </Suspense>
  )
}