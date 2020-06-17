import React from 'react';
import './quill.snow.custom.css';
import ReactQuill, { Quill } from 'react-quill';
import quillEmoji from "quill-emoji";
import "quill-emoji/dist/quill-emoji.css";


Quill.register(
  {
    "formats/emoji": quillEmoji.EmojiBlot,
    "modules/emoji-toolbar": quillEmoji.ToolbarEmoji,
    "modules/emoji-textarea": quillEmoji.TextAreaEmoji,
    "modules/emoji-shortname": quillEmoji.ShortNameEmoji,
  },
  true,
);

const toolbarOptions = {
  toolbar: {
    container:
      [
        [{ 'font': [] }, { 'size': ['small', false, 'large', 'huge'] }],  // custom dropdown

        ['bold', 'italic', 'underline', 'strike'],        // toggled buttons

        [{ 'list': 'ordered' }, { 'list': 'bullet' }, { 'align': [] }],

        ['link', 'image', 'video'],

        [{ 'color': [] }, { 'background': [] }, 'emoji'],          // dropdown with defaults from theme
      ],
    handlers: { 'emoji': function () { } },
  },
  'emoji-toolbar': true,
  'emoji-textarea': false,
  'emoji-shortname': true,                         // remove formatting button

};

const formats = [
  'font', 'size',
  'bold', 'italic', 'underline', 'strike',
  'list', 'bullet', 'align',
  'color', 'background',
  'image', 'link', 'emoji',
  'clean',
];

const EditorText = ({ value, setValue, placeholder }) => {

  return (
    <ReactQuill
      theme="snow"
      value={value}
      onChange={setValue}
      modules={toolbarOptions}
      placeholder={placeholder}

    />
  );
}


export default React.memo(EditorText);


// formats={formats}