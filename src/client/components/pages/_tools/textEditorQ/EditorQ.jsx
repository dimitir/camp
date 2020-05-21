import React from 'react';
import 'react-quill/dist/quill.snow.css';
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

        [{ 'color': [] }, { 'background': [] }],          // dropdown with defaults from theme

        ['image', 'link',],

        ['emoji'],

        ['clean'],
      ],
    handlers: { 'emoji': function () { } },
  },
  'emoji-toolbar': true,
  'emoji-textarea': true,
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

function MyComponent() {
  const [value, setValue] = React.useState('');

  return (
    <ReactQuill
      theme="snow"
      value={value}
      onChange={setValue}
      modules={toolbarOptions}
      placeholder={'Compose an epic...'}

    />
  );
}


export default MyComponent;


// formats={formats}