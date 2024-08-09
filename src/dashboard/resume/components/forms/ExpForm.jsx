import { useEffect, useState,useContext } from "react";
import ResumeInfoContext from "../../../../context/ResumeInfoContext";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import RichTextEditor from "../RichTextEditor";

const formField = {
    title:'',
    companyName:'',
    city:'',
    state:'',
    startDate:'',
    endDate:'',
    workSummery:'',
}



const ExpForm = ({enableNext}) => {
    const {resumeInfo,setResumeInfo} = useContext(ResumeInfoContext);

    const [expList,setExpList]= useState([formField]);
    const handleChange = (index,event) => {
        const newEntries =expList.slice();
        const {name,value} = event.target
        newEntries[index][name]=value;
        setExpList(newEntries);
    }

    const addNewExp = () => {
        setExpList([...expList,formField])
    }

    const removeNewExp = () => {
        setExpList(expList=>expList.slice(0,-1))
    }

    const handleRichTextEditor = (event,name,index) => {
        const newEntries =expList.slice();
        newEntries[index][name]=event.target.value;
        setExpList(newEntries);
    }

    useEffect(()=> {
        setResumeInfo({
            ...resumeInfo,
            experience:expList
        })
console.log(expList)
    },[expList])
    return ( 
    <div className="p-5 shadow-lg rounded-lg border-t-primary border-t-4">
        <h2 className="font-bold text-lg">Expireance</h2>
        <p>Add your previus job exp</p>
        <div>
            {expList.map((item,index)=> {
                return (
                    <div>
                        <div className="grid grid-cols-2 gap-3 border p-3 my-5 rounded-lg">
                            <div>
                                <label className="text-xs">Position Title</label>
                                <Input name='title' onChange={(e)=> handleChange(index,e)}></Input>
                            </div>
                            <div>
                                <label className="text-xs">Company Name</label>
                                <Input name='companyName' onChange={(e)=> handleChange(index,e)}></Input>
                            </div>
                            <div>
                                <label className="text-xs">City</label>
                                <Input name='city' onChange={(e)=> handleChange(index,e)}></Input>
                            </div>
                            <div>
                                <label className="text-xs">State</label>
                                <Input name='state' onChange={(e)=> handleChange(index,e)}></Input>
                            </div>
                            <div>
                                <label className="text-xs">Start Date</label>
                                <Input type='date' name='startDate' onChange={(e)=> handleChange(index,e)}></Input>
                            </div>
                            <div>
                                <label className="text-xs">End Date</label>
                                <Input type='date' name='endDate' onChange={(e)=> handleChange(index,e)}></Input>
                            </div>
                            <div className="col-span-2">
                            <RichTextEditor onRichTextEditorChange={(event)=> handleRichTextEditor(event,'workSummery',index)}/>
                            </div>
                        </div>
                    </div>
                )
            })}
        </div>
        <div className="flex justify-between">
            <div className="flex gap-2">
            <Button onClick={addNewExp} variant='outline' className='text-primary'> + Add More Exp</Button>
            <Button onClick={removeNewExp}  variant='outline' className='text-primary'> Remove</Button>
            </div>
        <Button>Save</Button>
        </div>
    </div> );
}
 
export default ExpForm;