import { useContext, useEffect, useState } from "react";
import ResumeInfoContext from "../../../../context/ResumeInfoContext";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useParams } from "react-router-dom";
import {LoadinCircle} from "lucide-react";
import { toast } from "sonner"
import GlobalApi from "../../../../../service/GlobalApi";
const PersonalDetailForm = ({enableNext}) => {
    const {resumeInfo,setResumeInfo} = useContext(ResumeInfoContext);
    const [formData,setFormData]=useState();
    const [loading,setLoading]=useState(false);
    const params = useParams();

    useEffect(() => {
        console.log(params)
    })
    const handleInputChange = (e) => {
        setFormData({...formData,[name]:value})
        enableNext(false);
        const {name,value} = e.target;

        setResumeInfo({...resumeInfo,[name]:value})
    }
    const onSave = (e) => {
        e.preventDefault();
        setLoading(true)
        const data ={data:formData}
        GlobalApi.updateResumeDetail(params?.resumeId,data).then(res => {
            console.log(res);
            enableNext(true);
            setLoading(false);
            toast("Resume has been updated.")
        },(error => setLoading(false)))
        
    }
    return ( 
    <div className="p-5 shadow-lg rounded-lg border-t-primary border-t-4">
        <h2 className="font-bold text-lg">Personal Detail</h2>
        <p>Get started</p>
        <form onSubmit={onSave}>
            <div className="grid grid-cols-2 mt-5 gap-3">
                <div>
                    <label htmlFor="firstName" className="text-sm">First Name</label>
                    <Input type="text" id="firstName" defaultValue={resumeInfo?.firstName} name="firstName" required onChange={handleInputChange}/>
                </div>
                <div>
                    <label htmlFor="lastName" className="text-sm">Last Name</label>
                    <Input type="text" id="lastName" defaultValue={resumeInfo?.lastName}  name="lastName" required onChange={handleInputChange}/>
                </div>
                <div className="col-span-2">
                    <label htmlFor="jobTitle" className="text-sm">Job Title</label>
                    <Input type="text" id="jobTitle" defaultValue={resumeInfo?.jobTitle} name="jobTitle" required onChange={handleInputChange}/>
                </div>
                <div className="col-span-2">
                    <label htmlFor="address" className="text-sm">Address</label>
                    <Input type="text" id="address" defaultValue={resumeInfo?.address}  name="address" required onChange={handleInputChange}/>
                </div>
                <div>
                    <label htmlFor="phone" className="text-sm">Phone</label>
                    <Input type="text" id="phone" name="phone" defaultValue={resumeInfo?.phone}  required onChange={handleInputChange}/>
                </div>
                <div>
                    <label htmlFor="email" className="text-sm">Email</label>
                    <Input type="text" id="email" name="email" defaultValue={resumeInfo?.email} required onChange={handleInputChange}/>
                </div>
            </div>
            <div className="mt-3 flex justify-end">
                <Button type='submit' disabled={loading}>{loading?<LoadinCircle className="animate-spin"/>:"Save"}</Button>
            </div>
        </form>
    </div> );
}
 
export default PersonalDetailForm;