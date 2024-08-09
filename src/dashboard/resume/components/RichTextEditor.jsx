import {useState} from 'react';
import {BtnBold, BtnItalic, Editor, EditorProvider, Toolbar} from 'react-simple-wysiwyg';
import {Button} from "../../../components/ui/button.jsx";
import {useContext} from "@types/react";
import ResumeInfoContext from "../../../context/ResumeInfoContext.jsx";
import {toast} from "sonner";
import {LoaderCircle} from "lucide-react";

const RichTextEditor = ({onRichTextEditorChange, index}) => {
    const [value, setValue] = useState('simple text');
    const [loading, setLoading] = useState(false);
    const {resumeInfo, setResumeInfo} = useContext(ResumeInfoContext);
    const generateSummeryFromAi = () => {
        setLoading(true)
        if (!resumeInfo.experience[index].title) {
            toast('Please Add Position');
            return;
        }
        console.log('Тут запрос к AI')
        setTimeout(() => setLoading(false), 2000)
    }
    return (
        <div>
            <div className={'flex justify-between my-2'}>
                <label className={'text-xs'}>Summery</label>
                <Button onClick={generateSummeryFromAi} variant={'outline'} size={'sm'}
                        className={'flex gap-2 border-primary text-primary'}>{loading ?
                    <LoaderCircle className="animate-spin"/> : "Generate by AI"}</Button>
            </div>
            <EditorProvider>
                <Editor value={value} onChange={(e) => {
                    setValue(e.target.value)
                    onRichTextEditorChange(e)
                }}>
                    <Toolbar>
                        <BtnBold/>
                        <BtnItalic/>
                    </Toolbar>
                </Editor>
            </EditorProvider>
        </div>);
}

export default RichTextEditor;