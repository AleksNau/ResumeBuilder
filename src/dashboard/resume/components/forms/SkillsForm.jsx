
import {useContext, useState,useEffect} from "react";
import ResumeInfoContext from "../../../../context/ResumeInfoContext.jsx";
import {useParams} from "react-router-dom";
import {Input} from "@/components/ui/input.jsx";
import {Button} from "@/components/ui/button";
import { Rating } from '@smastrom/react-rating'
import '@smastrom/react-rating/style.css'
import {LoaderCircle} from "lucide-react";
import GlobalApi from "../../../../../service/GlobalApi.js";
import {toast} from "sonner";


const SkillsForm = ({enableNext}) => {
    const {resumeInfo, setResumeInfo} = useContext(ResumeInfoContext);
    const [loading, setLoading] = useState(false);
    const [skillList, setSkillList] = useState([{
        name: '',
        rating: 0,}]);
    const params = useParams();

    const handleChange = (index,name,value) => {
        const newEntries = skillList.slice();
        newEntries[index][name] = value;
        setSkillList(newEntries);
    }

    const addSkill = () => {
        setSkillList([...skillList, {
            name: '',
            rating: 0,}])
    }

    const removeSkill = () => {
        setSkillList(skillList => skillList.slice(0, -1))
    }

    const onSave = () => {
        setLoading(true)
        const data = {
            data:{
                skills: skillList
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
            skills: skillList
        })
        console.log(skillList)
    }, [skillList])

    return (
        <div className="p-5 shadow-lg rounded-lg border-t-primary border-t-4">
            <h2 className="font-bold text-lg">Skills</h2>
            <p>Add your skills</p>
            <div>
                {skillList.map((item,index)=> {
                    return(
                        <div key={index} className='flex justify-between border p-3 mb-2 rounded-lg'>
                            <div>
                                <label className='text-xs'>Name</label>
                                <Input className='w-full' name='name' onChange={(e)=> handleChange(index,'name',e.target.value)}/>
                            </div>
                            <Rating style={{ maxWidth: 120 }} value={item.rating} onChange={(v)=> handleChange(index,'rating',v)} />
                        </div>
                    )
                })}
            </div>
            <div  className="flex justify-between">
                <div className="flex gap-2">
                    <Button disabled={skillList.length<2} onClick={removeSkill} variant='outline' className='text-primary'> Remove</Button>
                    <Button onClick={addSkill} variant='outline' className='text-primary'> + Add Skill</Button>
                </div>
                <Button onClick={()=>onSave()}>{loading ?
                    <LoaderCircle className="animate-spin"/> : "Save"}</Button>
            </div>
        </div>
    );
};

export default SkillsForm;