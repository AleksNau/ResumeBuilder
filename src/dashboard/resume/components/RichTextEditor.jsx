import { useState } from 'react';
import { 
  BtnBold,
  BtnItalic,
  Editor,
  EditorProvider,
  Toolbar
} from 'react-simple-wysiwyg';

const RichTextEditor = ({onRichTextEditorChange}) => {
    const [value, setValue] = useState('simple text');

    return ( 
    <div>
        <EditorProvider>
      <Editor value={value} onChange={(e) => {
        setValue(e.target.value)
        onRichTextEditorChange(e)
        }}>
      <Toolbar>
          <BtnBold />
          <BtnItalic />
        </Toolbar>
      </Editor>
    </EditorProvider>
    </div> );
}
 
export default RichTextEditor;