import React from 'react'
import { Editor as ToastEditor } from '@toast-ui/react-editor';
import '@toast-ui/editor/dist/toastui-editor.css';
import colorSyntax from '@toast-ui/editor-plugin-color-syntax';
import 'tui-color-picker/dist/tui-color-picker.css';
import '@toast-ui/editor-plugin-color-syntax/dist/toastui-editor-plugin-color-syntax.css';

const EditorComp = () => {
    return (
        <ToastEditor
            initialValue=""
            previewStyle="vertical"
            height="300px"
            initialEditType="wysiwyg"
            useCommandShortcut={false}
            plugins={[colorSyntax]}
        />
    )
}

export default EditorComp