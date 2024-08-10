
import {useContext, useState,useEffect} from "react";
import ResumeInfoContext from "../../../../context/ResumeInfoContext.jsx";
import {Input} from "@/components/ui/input.jsx";
import {Textarea} from "@/components/ui/textarea";
import {Button} from "@/components/ui/button.jsx";
import {LoaderCircle} from "lucide-react";
import {toast} from "sonner";
import {useParams} from "react-router-dom";
import GlobalApi from "../../../../../service/GlobalApi.js";


const EducationForm = ({enableNext}) => {
    const {resumeInfo, setResumeInfo} = useContext(ResumeInfoContext);
    const [loading, setLoading] = useState(false);
    const params = useParams();

    const [educationList, setEducationList] = useState([{
        universityName: '',
        startDate: '',
        endDate: '',
        degree: '',
        major: '',
        description: ''
    }]);

    const handleChange = (e,index) => {
        const newEntries = educationList.slice();
        const {name, value} = e.target
        newEntries[index][name] = value;
        setEducationList(newEntries);
    }

    const addNewEdu = () => {
        setEducationList([...educationList, {
            universityName: null,
            startDate: null,
            endDate: null,
            degree: null,
            major: null,
            description: null
        }])
    }

    const removeNewEdu = () => {
        setEducationList(educationList => educationList.slice(0, -1))
    }

    const onSave = () => {
        setLoading(true)
        const data = {
        data:{
            education: educationList
        }}
        GlobalApi.updateResumeDetail(params?.resumeId, data).then(res => {
            console.log(res);
            enableNext(true);
            setLoading(false);
            toast("Resume has been updated.")
        }, ((error) => setLoading(false)))
    }

    useEffect(() => {
        setResumeInfo({
            ...resumeInfo,
            education: educationList
        })
        console.log(educationList)
    }, [educationList])
    return (
        <div className="p-5 shadow-lg rounded-lg border-t-primary border-t-4">
            <h2 className="font-bold text-lg">Education Info</h2>
            <p>Add your educational info</p>
            <div>
                {educationList.map((item,index)=> {
                    return(
                        <div key={index}>
                            <div className='grid grid-cols-2 gap-3 border p-3 my-5 rounded-lg'>
                                <div className='col-span-2'>
                                    <label>University Name</label>
                                    <Input name='universityName' onChange={(e)=> handleChange(e,index)}/>
                                </div>
                                <div>
                                    <label>Degree</label>
                                    <Input name='degree' onChange={(e)=> handleChange(e,index)}/>
                                </div>
                                <div>
                                    <label>Major</label>
                                    <Input name='major' onChange={(e)=> handleChange(e,index)}/>
                                </div>
                                <div>
                                    <label>Start Date</label>
                                    <Input type='date' name='startDate' onChange={(e)=> handleChange(e,index)}/>
                                </div>
                                <div>
                                    <label>End Date</label>
                                    <Input type='date' name='endDate' onChange={(e)=> handleChange(e,index)}/>
                                </div>
                                <div className='col-span-2'>
                                    <label>Description</label>
                                    <Textarea name='description' onChange={(e)=> handleChange(e,index)}/>
                                </div>
                            </div>
                        </div>
                    )
                })}
            </div>
            <div  className="flex justify-between">
                <div className="flex gap-2">
                    <Button disabled={educationList.length<2} onClick={removeNewEdu} variant='outline' className='text-primary'> Remove</Button>
                    <Button onClick={addNewEdu} variant='outline' className='text-primary'> + Add More Education</Button>
                </div>
                <Button onClick={()=>onSave()}>{loading ?
                    <LoaderCircle className="animate-spin"/> : "Save"}</Button>
            </div>
        </div>
    );
};

export default EducationForm;