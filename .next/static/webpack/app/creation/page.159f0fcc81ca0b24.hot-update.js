"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/creation/page",{

/***/ "(app-pages-browser)/./src/components/Lexical/MyEditor.js":
/*!********************************************!*\
  !*** ./src/components/Lexical/MyEditor.js ***!
  \********************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Editor; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _hooks_useMediaQuery__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./hooks/useMediaQuery */ \"(app-pages-browser)/./src/components/Lexical/hooks/useMediaQuery.js\");\n/* harmony import */ var _lexical_html__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @lexical/html */ \"(app-pages-browser)/./node_modules/@lexical/html/LexicalHtml.js\");\n/* harmony import */ var _lexical_html__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_lexical_html__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _lexical_react_LexicalRichTextPlugin__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @lexical/react/LexicalRichTextPlugin */ \"(app-pages-browser)/./node_modules/@lexical/react/LexicalRichTextPlugin.js\");\n/* harmony import */ var _lexical_react_LexicalRichTextPlugin__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_lexical_react_LexicalRichTextPlugin__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _lexical_react_LexicalContentEditable__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @lexical/react/LexicalContentEditable */ \"(app-pages-browser)/./node_modules/@lexical/react/LexicalContentEditable.js\");\n/* harmony import */ var _lexical_react_LexicalContentEditable__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_lexical_react_LexicalContentEditable__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _lexical_react_LexicalHistoryPlugin__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @lexical/react/LexicalHistoryPlugin */ \"(app-pages-browser)/./node_modules/@lexical/react/LexicalHistoryPlugin.js\");\n/* harmony import */ var _lexical_react_LexicalHistoryPlugin__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_lexical_react_LexicalHistoryPlugin__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var _lexical_react_LexicalAutoFocusPlugin__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @lexical/react/LexicalAutoFocusPlugin */ \"(app-pages-browser)/./node_modules/@lexical/react/LexicalAutoFocusPlugin.js\");\n/* harmony import */ var _lexical_react_LexicalAutoFocusPlugin__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_lexical_react_LexicalAutoFocusPlugin__WEBPACK_IMPORTED_MODULE_7__);\n/* harmony import */ var _lexical_react_LexicalErrorBoundary__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @lexical/react/LexicalErrorBoundary */ \"(app-pages-browser)/./node_modules/@lexical/react/LexicalErrorBoundary.js\");\n/* harmony import */ var _lexical_react_LexicalErrorBoundary__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_lexical_react_LexicalErrorBoundary__WEBPACK_IMPORTED_MODULE_8__);\n/* harmony import */ var _lexical_react_LexicalLinkPlugin__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @lexical/react/LexicalLinkPlugin */ \"(app-pages-browser)/./node_modules/@lexical/react/LexicalLinkPlugin.js\");\n/* harmony import */ var _lexical_react_LexicalLinkPlugin__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_lexical_react_LexicalLinkPlugin__WEBPACK_IMPORTED_MODULE_9__);\n/* harmony import */ var _lexical_react_LexicalListPlugin__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @lexical/react/LexicalListPlugin */ \"(app-pages-browser)/./node_modules/@lexical/react/LexicalListPlugin.js\");\n/* harmony import */ var _lexical_react_LexicalListPlugin__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_lexical_react_LexicalListPlugin__WEBPACK_IMPORTED_MODULE_10__);\n/* harmony import */ var _lexical_react_LexicalMarkdownShortcutPlugin__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @lexical/react/LexicalMarkdownShortcutPlugin */ \"(app-pages-browser)/./node_modules/@lexical/react/LexicalMarkdownShortcutPlugin.js\");\n/* harmony import */ var _lexical_react_LexicalMarkdownShortcutPlugin__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_lexical_react_LexicalMarkdownShortcutPlugin__WEBPACK_IMPORTED_MODULE_11__);\n/* harmony import */ var _lexical_markdown__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @lexical/markdown */ \"(app-pages-browser)/./node_modules/@lexical/markdown/LexicalMarkdown.js\");\n/* harmony import */ var _lexical_markdown__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(_lexical_markdown__WEBPACK_IMPORTED_MODULE_12__);\n/* harmony import */ var _lexical_react_LexicalOnChangePlugin__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @lexical/react/LexicalOnChangePlugin */ \"(app-pages-browser)/./node_modules/@lexical/react/LexicalOnChangePlugin.js\");\n/* harmony import */ var _lexical_react_LexicalOnChangePlugin__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(_lexical_react_LexicalOnChangePlugin__WEBPACK_IMPORTED_MODULE_13__);\n/* harmony import */ var _editor_css__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./editor.css */ \"(app-pages-browser)/./src/components/Lexical/editor.css\");\n/* harmony import */ var _plugins_DragDropPastPlugin__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./plugins/DragDropPastPlugin */ \"(app-pages-browser)/./src/components/Lexical/plugins/DragDropPastPlugin.js\");\n/* harmony import */ var _plugins_ToolbarPlugin__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./plugins/ToolbarPlugin */ \"(app-pages-browser)/./src/components/Lexical/plugins/ToolbarPlugin.js\");\n/* harmony import */ var _plugins_TreeViewPlugin__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./plugins/TreeViewPlugin */ \"(app-pages-browser)/./src/components/Lexical/plugins/TreeViewPlugin.js\");\n/* harmony import */ var _plugins_FloatingLinkEditorPlugin__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./plugins/FloatingLinkEditorPlugin */ \"(app-pages-browser)/./src/components/Lexical/plugins/FloatingLinkEditorPlugin.js\");\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\nfunction Placeholder() {\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"editor-placeholder\",\n        children: \"Enter some rich text...\"\n    }, void 0, false, {\n        fileName: \"/Users/saheliandev/Desktop/Personnal/Site-minist-re/src/components/Lexical/MyEditor.js\",\n        lineNumber: 22,\n        columnNumber: 10\n    }, this);\n}\n_c = Placeholder;\nfunction Editor() {\n    _s();\n    const isSmallWidthViewPort = (0,_hooks_useMediaQuery__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(\"(max-width: 1025px)\");\n    const [previewMode, setPreviewMode] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const [textValue, setTextValue] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const handlePreviewMode = ()=>setPreviewMode(!previewMode);\n    const [floatingAnchorElem, setFloatingAnchorElem] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);\n    const onChange = (editorState, editor)=>{\n        editorState.read(()=>{\n            const markdown = (0,_lexical_markdown__WEBPACK_IMPORTED_MODULE_12__.$convertToMarkdownString)(_lexical_markdown__WEBPACK_IMPORTED_MODULE_12__.TRANSFORMERS);\n            const htmlString = (0,_lexical_html__WEBPACK_IMPORTED_MODULE_3__.$generateHtmlFromNodes)(editor, null);\n            console.log(htmlString);\n            setTextValue(markdown);\n        });\n    };\n    const onRef = (_floatingAnchorElem)=>{\n        if (_floatingAnchorElem !== null) {\n            setFloatingAnchorElem(_floatingAnchorElem);\n        }\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"editor-container\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_plugins_ToolbarPlugin__WEBPACK_IMPORTED_MODULE_16__[\"default\"], {}, void 0, false, {\n                fileName: \"/Users/saheliandev/Desktop/Personnal/Site-minist-re/src/components/Lexical/MyEditor.js\",\n                lineNumber: 50,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"editor-inner\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_lexical_react_LexicalRichTextPlugin__WEBPACK_IMPORTED_MODULE_4__.RichTextPlugin, {\n                        contentEditable: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"editor\",\n                            ref: onRef,\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_lexical_react_LexicalContentEditable__WEBPACK_IMPORTED_MODULE_5__.ContentEditable, {\n                                className: \"editor-input\"\n                            }, void 0, false, {\n                                fileName: \"/Users/saheliandev/Desktop/Personnal/Site-minist-re/src/components/Lexical/MyEditor.js\",\n                                lineNumber: 53,\n                                columnNumber: 64\n                            }, void 0)\n                        }, void 0, false, {\n                            fileName: \"/Users/saheliandev/Desktop/Personnal/Site-minist-re/src/components/Lexical/MyEditor.js\",\n                            lineNumber: 53,\n                            columnNumber: 28\n                        }, void 0),\n                        placeholder: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Placeholder, {}, void 0, false, {\n                            fileName: \"/Users/saheliandev/Desktop/Personnal/Site-minist-re/src/components/Lexical/MyEditor.js\",\n                            lineNumber: 54,\n                            columnNumber: 24\n                        }, void 0),\n                        ErrorBoundary: (_lexical_react_LexicalErrorBoundary__WEBPACK_IMPORTED_MODULE_8___default())\n                    }, void 0, false, {\n                        fileName: \"/Users/saheliandev/Desktop/Personnal/Site-minist-re/src/components/Lexical/MyEditor.js\",\n                        lineNumber: 52,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_lexical_react_LexicalAutoFocusPlugin__WEBPACK_IMPORTED_MODULE_7__.AutoFocusPlugin, {}, void 0, false, {\n                        fileName: \"/Users/saheliandev/Desktop/Personnal/Site-minist-re/src/components/Lexical/MyEditor.js\",\n                        lineNumber: 57,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_lexical_react_LexicalOnChangePlugin__WEBPACK_IMPORTED_MODULE_13__.OnChangePlugin, {\n                        onChange: onChange\n                    }, void 0, false, {\n                        fileName: \"/Users/saheliandev/Desktop/Personnal/Site-minist-re/src/components/Lexical/MyEditor.js\",\n                        lineNumber: 58,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_lexical_react_LexicalHistoryPlugin__WEBPACK_IMPORTED_MODULE_6__.HistoryPlugin, {}, void 0, false, {\n                        fileName: \"/Users/saheliandev/Desktop/Personnal/Site-minist-re/src/components/Lexical/MyEditor.js\",\n                        lineNumber: 59,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_lexical_react_LexicalListPlugin__WEBPACK_IMPORTED_MODULE_10__.ListPlugin, {}, void 0, false, {\n                        fileName: \"/Users/saheliandev/Desktop/Personnal/Site-minist-re/src/components/Lexical/MyEditor.js\",\n                        lineNumber: 61,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_lexical_react_LexicalLinkPlugin__WEBPACK_IMPORTED_MODULE_9__.LinkPlugin, {}, void 0, false, {\n                        fileName: \"/Users/saheliandev/Desktop/Personnal/Site-minist-re/src/components/Lexical/MyEditor.js\",\n                        lineNumber: 62,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_plugins_DragDropPastPlugin__WEBPACK_IMPORTED_MODULE_15__[\"default\"], {}, void 0, false, {\n                        fileName: \"/Users/saheliandev/Desktop/Personnal/Site-minist-re/src/components/Lexical/MyEditor.js\",\n                        lineNumber: 63,\n                        columnNumber: 9\n                    }, this),\n                    floatingAnchorElem && !isSmallWidthViewPort && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_plugins_FloatingLinkEditorPlugin__WEBPACK_IMPORTED_MODULE_18__[\"default\"], {\n                        anchorElem: floatingAnchorElem\n                    }, void 0, false, {\n                        fileName: \"/Users/saheliandev/Desktop/Personnal/Site-minist-re/src/components/Lexical/MyEditor.js\",\n                        lineNumber: 65,\n                        columnNumber: 11\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_lexical_react_LexicalMarkdownShortcutPlugin__WEBPACK_IMPORTED_MODULE_11__.MarkdownShortcutPlugin, {\n                        transformers: _lexical_markdown__WEBPACK_IMPORTED_MODULE_12__.TRANSFORMERS\n                    }, void 0, false, {\n                        fileName: \"/Users/saheliandev/Desktop/Personnal/Site-minist-re/src/components/Lexical/MyEditor.js\",\n                        lineNumber: 67,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/saheliandev/Desktop/Personnal/Site-minist-re/src/components/Lexical/MyEditor.js\",\n                lineNumber: 51,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/saheliandev/Desktop/Personnal/Site-minist-re/src/components/Lexical/MyEditor.js\",\n        lineNumber: 49,\n        columnNumber: 5\n    }, this);\n}\n_s(Editor, \"IzTDRKzsKSfdrmwCZnmSGRCvp8M=\", false, function() {\n    return [\n        _hooks_useMediaQuery__WEBPACK_IMPORTED_MODULE_2__[\"default\"]\n    ];\n});\n_c1 = Editor;\nvar _c, _c1;\n$RefreshReg$(_c, \"Placeholder\");\n$RefreshReg$(_c1, \"Editor\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9jb21wb25lbnRzL0xleGljYWwvTXlFZGl0b3IuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUF3QztBQUNTO0FBQ007QUFDZTtBQUNFO0FBQ0o7QUFDSTtBQUNEO0FBQ1Q7QUFDQTtBQUN3QjtBQUNYO0FBQ0w7QUFFaEQ7QUFDbUM7QUFDTDtBQUNFO0FBQ29CO0FBRTFFLFNBQVNtQjtJQUNQLHFCQUFPLDhEQUFDQztRQUFJQyxXQUFVO2tCQUFxQjs7Ozs7O0FBQzdDO0tBRlNGO0FBSU0sU0FBU0c7O0lBRXRCLE1BQU1DLHVCQUF1QnJCLGdFQUFhQSxDQUFDO0lBQzNDLE1BQU0sQ0FBQ3NCLGFBQWFDLGVBQWUsR0FBR3hCLCtDQUFRQSxDQUFDO0lBQy9DLE1BQU0sQ0FBQ3lCLFdBQVdDLGFBQWEsR0FBRzFCLCtDQUFRQSxDQUFDO0lBQzNDLE1BQU0yQixvQkFBb0IsSUFBTUgsZUFBZSxDQUFDRDtJQUNoRCxNQUFNLENBQUNLLG9CQUFvQkMsc0JBQXNCLEdBQy9DN0IsK0NBQVFBLENBQUM7SUFDWCxNQUFNOEIsV0FBVyxDQUFDQyxhQUFhQztRQUM3QkQsWUFBWUUsSUFBSSxDQUFDO1lBQ2YsTUFBTUMsV0FBV3RCLDRFQUF3QkEsQ0FBQ0QsNERBQVlBO1lBQ3RELE1BQU13QixhQUFhakMscUVBQXNCQSxDQUFDOEIsUUFBUTtZQUNsREksUUFBUUMsR0FBRyxDQUFDRjtZQUNaVCxhQUFhUTtRQUNmO0lBQ0Y7SUFDQSxNQUFNSSxRQUFRLENBQUNDO1FBQ2IsSUFBSUEsd0JBQXdCLE1BQU07WUFDaENWLHNCQUFzQlU7UUFDeEI7SUFDRjtJQUdBLHFCQUNFLDhEQUFDcEI7UUFBSUMsV0FBVTs7MEJBQ2IsOERBQUNMLCtEQUFhQTs7Ozs7MEJBQ2QsOERBQUNJO2dCQUFJQyxXQUFVOztrQ0FDYiw4REFBQ2pCLGdGQUFjQTt3QkFDYnFDLCtCQUFpQiw4REFBQ3JCOzRCQUFJQyxXQUFVOzRCQUFTcUIsS0FBS0g7c0NBQU8sNEVBQUNsQyxrRkFBZUE7Z0NBQUNnQixXQUFVOzs7Ozs7Ozs7Ozt3QkFDaEZzQiwyQkFBYSw4REFBQ3hCOzs7Ozt3QkFDZHlCLGVBQWVwQyw0RUFBb0JBOzs7Ozs7a0NBRXJDLDhEQUFDRCxrRkFBZUE7Ozs7O2tDQUNoQiw4REFBQ08saUZBQWNBO3dCQUFDaUIsVUFBVUE7Ozs7OztrQ0FDMUIsOERBQUN6Qiw4RUFBYUE7Ozs7O2tDQUVkLDhEQUFDSSx5RUFBVUE7Ozs7O2tDQUNYLDhEQUFDRCx3RUFBVUE7Ozs7O2tDQUNYLDhEQUFDTSxvRUFBYUE7Ozs7O29CQUNiYyxzQkFBc0IsQ0FBQ04sc0NBQ3RCLDhEQUFDTCwwRUFBd0JBO3dCQUFDMkIsWUFBWWhCOzs7Ozs7a0NBRXhDLDhEQUFDbEIsaUdBQXNCQTt3QkFBQ21DLGNBQWNsQyw0REFBWUE7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUsxRDtHQS9Dd0JVOztRQUVPcEIsNERBQWFBOzs7TUFGcEJvQiIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvY29tcG9uZW50cy9MZXhpY2FsL015RWRpdG9yLmpzPzBlZTEiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgdXNlTWVkaWFRdWVyeSBmcm9tICcuL2hvb2tzL3VzZU1lZGlhUXVlcnknXG5pbXBvcnQgeyAkZ2VuZXJhdGVIdG1sRnJvbU5vZGVzIH0gZnJvbSAnQGxleGljYWwvaHRtbCc7XG5pbXBvcnQgeyBSaWNoVGV4dFBsdWdpbiB9IGZyb20gXCJAbGV4aWNhbC9yZWFjdC9MZXhpY2FsUmljaFRleHRQbHVnaW5cIjtcbmltcG9ydCB7IENvbnRlbnRFZGl0YWJsZSB9IGZyb20gXCJAbGV4aWNhbC9yZWFjdC9MZXhpY2FsQ29udGVudEVkaXRhYmxlXCI7XG5pbXBvcnQgeyBIaXN0b3J5UGx1Z2luIH0gZnJvbSBcIkBsZXhpY2FsL3JlYWN0L0xleGljYWxIaXN0b3J5UGx1Z2luXCI7XG5pbXBvcnQgeyBBdXRvRm9jdXNQbHVnaW4gfSBmcm9tIFwiQGxleGljYWwvcmVhY3QvTGV4aWNhbEF1dG9Gb2N1c1BsdWdpblwiO1xuaW1wb3J0IExleGljYWxFcnJvckJvdW5kYXJ5IGZyb20gXCJAbGV4aWNhbC9yZWFjdC9MZXhpY2FsRXJyb3JCb3VuZGFyeVwiO1xuaW1wb3J0IHsgTGlua1BsdWdpbiB9IGZyb20gXCJAbGV4aWNhbC9yZWFjdC9MZXhpY2FsTGlua1BsdWdpblwiO1xuaW1wb3J0IHsgTGlzdFBsdWdpbiB9IGZyb20gXCJAbGV4aWNhbC9yZWFjdC9MZXhpY2FsTGlzdFBsdWdpblwiO1xuaW1wb3J0IHsgTWFya2Rvd25TaG9ydGN1dFBsdWdpbiB9IGZyb20gXCJAbGV4aWNhbC9yZWFjdC9MZXhpY2FsTWFya2Rvd25TaG9ydGN1dFBsdWdpblwiO1xuaW1wb3J0IHsgVFJBTlNGT1JNRVJTLCAkY29udmVydFRvTWFya2Rvd25TdHJpbmcgfSBmcm9tIFwiQGxleGljYWwvbWFya2Rvd25cIjtcbmltcG9ydCB7IE9uQ2hhbmdlUGx1Z2luIH0gZnJvbSAnQGxleGljYWwvcmVhY3QvTGV4aWNhbE9uQ2hhbmdlUGx1Z2luJztcblxuaW1wb3J0IFwiLi9lZGl0b3IuY3NzXCI7XG5pbXBvcnQgRHJhZ0Ryb3BQYXN0ZSBmcm9tIFwiLi9wbHVnaW5zL0RyYWdEcm9wUGFzdFBsdWdpblwiO1xuaW1wb3J0IFRvb2xiYXJQbHVnaW4gZnJvbSAnLi9wbHVnaW5zL1Rvb2xiYXJQbHVnaW4nO1xuaW1wb3J0IFRyZWVWaWV3UGx1Z2luIGZyb20gJy4vcGx1Z2lucy9UcmVlVmlld1BsdWdpbic7XG5pbXBvcnQgRmxvYXRpbmdMaW5rRWRpdG9yUGx1Z2luIGZyb20gXCIuL3BsdWdpbnMvRmxvYXRpbmdMaW5rRWRpdG9yUGx1Z2luXCI7XG5cbmZ1bmN0aW9uIFBsYWNlaG9sZGVyKCkge1xuICByZXR1cm4gPGRpdiBjbGFzc05hbWU9XCJlZGl0b3ItcGxhY2Vob2xkZXJcIj5FbnRlciBzb21lIHJpY2ggdGV4dC4uLjwvZGl2Pjtcbn1cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gRWRpdG9yKCkge1xuXG4gIGNvbnN0IGlzU21hbGxXaWR0aFZpZXdQb3J0ID0gdXNlTWVkaWFRdWVyeSgnKG1heC13aWR0aDogMTAyNXB4KScpXG4gIGNvbnN0IFtwcmV2aWV3TW9kZSwgc2V0UHJldmlld01vZGVdID0gdXNlU3RhdGUoZmFsc2UpXG4gIGNvbnN0IFt0ZXh0VmFsdWUsIHNldFRleHRWYWx1ZV0gPSB1c2VTdGF0ZShcIlwiKVxuICBjb25zdCBoYW5kbGVQcmV2aWV3TW9kZSA9ICgpID0+IHNldFByZXZpZXdNb2RlKCFwcmV2aWV3TW9kZSk7XG4gIGNvbnN0IFtmbG9hdGluZ0FuY2hvckVsZW0sIHNldEZsb2F0aW5nQW5jaG9yRWxlbV0gPVxuICAgIHVzZVN0YXRlKG51bGwpXG4gIGNvbnN0IG9uQ2hhbmdlID0gKGVkaXRvclN0YXRlLCBlZGl0b3IpID0+IHtcbiAgICBlZGl0b3JTdGF0ZS5yZWFkKCgpID0+IHtcbiAgICAgIGNvbnN0IG1hcmtkb3duID0gJGNvbnZlcnRUb01hcmtkb3duU3RyaW5nKFRSQU5TRk9STUVSUyk7XG4gICAgICBjb25zdCBodG1sU3RyaW5nID0gJGdlbmVyYXRlSHRtbEZyb21Ob2RlcyhlZGl0b3IsIG51bGwpO1xuICAgICAgY29uc29sZS5sb2coaHRtbFN0cmluZyk7XG4gICAgICBzZXRUZXh0VmFsdWUobWFya2Rvd24pXG4gICAgfSk7XG4gIH1cbiAgY29uc3Qgb25SZWYgPSAoX2Zsb2F0aW5nQW5jaG9yRWxlbSkgPT4ge1xuICAgIGlmIChfZmxvYXRpbmdBbmNob3JFbGVtICE9PSBudWxsKSB7XG4gICAgICBzZXRGbG9hdGluZ0FuY2hvckVsZW0oX2Zsb2F0aW5nQW5jaG9yRWxlbSlcbiAgICB9XG4gIH1cblxuXG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9XCJlZGl0b3ItY29udGFpbmVyXCI+XG4gICAgICA8VG9vbGJhclBsdWdpbiAvPlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJlZGl0b3ItaW5uZXJcIj5cbiAgICAgICAgPFJpY2hUZXh0UGx1Z2luXG4gICAgICAgICAgY29udGVudEVkaXRhYmxlPXs8ZGl2IGNsYXNzTmFtZT1cImVkaXRvclwiIHJlZj17b25SZWZ9PjxDb250ZW50RWRpdGFibGUgY2xhc3NOYW1lPVwiZWRpdG9yLWlucHV0XCIvPjwvZGl2Pn1cbiAgICAgICAgICBwbGFjZWhvbGRlcj17PFBsYWNlaG9sZGVyIC8+fVxuICAgICAgICAgIEVycm9yQm91bmRhcnk9e0xleGljYWxFcnJvckJvdW5kYXJ5fVxuICAgICAgICAvPlxuICAgICAgICA8QXV0b0ZvY3VzUGx1Z2luIC8+XG4gICAgICAgIDxPbkNoYW5nZVBsdWdpbiBvbkNoYW5nZT17b25DaGFuZ2V9IC8+XG4gICAgICAgIDxIaXN0b3J5UGx1Z2luIC8+XG4gICAgICAgIHsvKiA8Q29kZUhpZ2hsaWdodFBsdWdpbiAvPiAqL31cbiAgICAgICAgPExpc3RQbHVnaW4gLz5cbiAgICAgICAgPExpbmtQbHVnaW4gLz5cbiAgICAgICAgPERyYWdEcm9wUGFzdGUgLz5cbiAgICAgICAge2Zsb2F0aW5nQW5jaG9yRWxlbSAmJiAhaXNTbWFsbFdpZHRoVmlld1BvcnQgJiYgKFxuICAgICAgICAgIDxGbG9hdGluZ0xpbmtFZGl0b3JQbHVnaW4gYW5jaG9yRWxlbT17ZmxvYXRpbmdBbmNob3JFbGVtfSAvPlxuICAgICAgICApfVxuICAgICAgICA8TWFya2Rvd25TaG9ydGN1dFBsdWdpbiB0cmFuc2Zvcm1lcnM9e1RSQU5TRk9STUVSU30gLz5cbiAgICAgICAgey8qIDxUcmVlVmlld1BsdWdpbiAvPiAqL31cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICApO1xufVxuIl0sIm5hbWVzIjpbIlJlYWN0IiwidXNlU3RhdGUiLCJ1c2VNZWRpYVF1ZXJ5IiwiJGdlbmVyYXRlSHRtbEZyb21Ob2RlcyIsIlJpY2hUZXh0UGx1Z2luIiwiQ29udGVudEVkaXRhYmxlIiwiSGlzdG9yeVBsdWdpbiIsIkF1dG9Gb2N1c1BsdWdpbiIsIkxleGljYWxFcnJvckJvdW5kYXJ5IiwiTGlua1BsdWdpbiIsIkxpc3RQbHVnaW4iLCJNYXJrZG93blNob3J0Y3V0UGx1Z2luIiwiVFJBTlNGT1JNRVJTIiwiJGNvbnZlcnRUb01hcmtkb3duU3RyaW5nIiwiT25DaGFuZ2VQbHVnaW4iLCJEcmFnRHJvcFBhc3RlIiwiVG9vbGJhclBsdWdpbiIsIlRyZWVWaWV3UGx1Z2luIiwiRmxvYXRpbmdMaW5rRWRpdG9yUGx1Z2luIiwiUGxhY2Vob2xkZXIiLCJkaXYiLCJjbGFzc05hbWUiLCJFZGl0b3IiLCJpc1NtYWxsV2lkdGhWaWV3UG9ydCIsInByZXZpZXdNb2RlIiwic2V0UHJldmlld01vZGUiLCJ0ZXh0VmFsdWUiLCJzZXRUZXh0VmFsdWUiLCJoYW5kbGVQcmV2aWV3TW9kZSIsImZsb2F0aW5nQW5jaG9yRWxlbSIsInNldEZsb2F0aW5nQW5jaG9yRWxlbSIsIm9uQ2hhbmdlIiwiZWRpdG9yU3RhdGUiLCJlZGl0b3IiLCJyZWFkIiwibWFya2Rvd24iLCJodG1sU3RyaW5nIiwiY29uc29sZSIsImxvZyIsIm9uUmVmIiwiX2Zsb2F0aW5nQW5jaG9yRWxlbSIsImNvbnRlbnRFZGl0YWJsZSIsInJlZiIsInBsYWNlaG9sZGVyIiwiRXJyb3JCb3VuZGFyeSIsImFuY2hvckVsZW0iLCJ0cmFuc2Zvcm1lcnMiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/components/Lexical/MyEditor.js\n"));

/***/ })

});