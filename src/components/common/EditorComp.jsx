import React, { useEffect, useRef } from 'react'
import { Editor as ToastEditor } from '@toast-ui/react-editor';
import '@toast-ui/editor/dist/toastui-editor.css';
import colorSyntax from '@toast-ui/editor-plugin-color-syntax';
import 'tui-color-picker/dist/tui-color-picker.css';
import '@toast-ui/editor-plugin-color-syntax/dist/toastui-editor-plugin-color-syntax.css';
import '@toast-ui/editor/dist/i18n/ko-kr';

const EditorComp = ({
    onChange,
    height = '300px',
    isEditorClear,
    setIsEditorClear,
    isEditorEdit,
    setIsEditorEdit,
    initValue, }) => {

    const editorRef = useRef(); // editorRef.current().getInstatnce() 형식으로 에디터의 설정값들을 가져올 수 있다.

    const onEditorChange = () => {
        const htmlElement = editorRef.current.getInstance().getHTML();
        const json = JSON.stringify(htmlElement);
        console.log(json);
        return onChange(json);
    };

    const onClearEditor = () => {
        editorRef.current.getInstance().setMarkdown('## *Your* **markdown** here');
    };

    const onChangeContent = () => {
        editorRef.current.getInstance().setHTML(initValue);
    };

    useEffect(() => {
        if (isEditorClear) {
            onClearEditor();
            setIsEditorClear(false);
        }

        if (isEditorEdit) {
            onChangeContent();
            setIsEditorEdit(false);
        }
    }, [isEditorClear, isEditorEdit]);

    return (
        <div className="edit_wrap">
            <ToastEditor
                initialValue=""
                previewStyle="vertical"
                height={height}
                initialEditType="wysiwyg"
                useCommandShortcut={false}
                language="ko-KR"
                ref={editorRef}
                onChange={onEditorChange}
                plugins={[colorSyntax]}
                toolbarItems={[
                    ['heading', 'bold', 'strike'],
                    ['hr', 'quote'],
                    ['ul', 'ol', 'task'],
                    ['table', 'link'],
                    // ['table', 'image', 'link'] 이미지 등록 문제 해결 후 추가 예정
                    ['code', 'codeblock'],
                ]}
            />
        </div>
    )
}

export default EditorComp