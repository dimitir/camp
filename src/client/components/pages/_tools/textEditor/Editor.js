import React from 'react';
import { EditorState, convertToRaw } from 'draft-js';
import { Editor } from 'react-draft-wysiwyg';
// import draftToHtml from 'draftjs-to-html';
// import htmlToDraft from 'html-to-draftjs';
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';
import './react-draft-wysiwyg.css';


const EditorConvertToHTML = () => {
    const [editorState, setEditorState] = React.useState(
        () => EditorState.createEmpty(),
    );
    console.log('editorState');
    console.log(editorState);

    const onEditorStateChange = () => {
        setEditorState(editorState)
    };

    return (
        <>
            <Editor
                editorState={editorState}
                wrapperClassName="demo-wrapper"
                editorClassName="demo-editor"
                onEditorStateChange={setEditorState}
                toolbar={{
                    options: ['inline', 'blockType', 'fontSize', 'fontFamily', 'list', 'textAlign', 'colorPicker', 'link', 'embedded', 'emoji', 'image',],
                    inline: { inDropdown: true },
                    list: { inDropdown: true },
                    textAlign: { inDropdown: true },
                    link: { inDropdown: true },
                }}
            />

        </>
    );
}
export default EditorConvertToHTML