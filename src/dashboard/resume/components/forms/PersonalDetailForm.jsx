import { useContext } from "react";
import ResumeInfoContext from "../../../../context/ResumeInfoContext";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
const PersonalDetailForm = ({enableNext}) => {
    const {resumeInfo,setResumeInfo} = useContext(ResumeInfoContext);
    const handleInputChange = (e) => {
        enableNext(false);
        const {name,value} = e.target;

        setResumeInfo({...resumeInfo,[name]:value})
    }
    const onSave = (e) => {
        e.preventDefault();
        enableNext(true);
    }
    return ( 
    <div className="p-5 shadow-lg rounded-lg border-t-primary border-t-4">
        <h2 className="font-bold text-lg">Personal Detail</h2>
        <p>Get started</p>
        <form onSubmit={onSave}>
            <div className="grid grid-cols-2 mt-5 gap-3">
                <div>
                    <label htmlFor="firstName" className="text-sm">First Name</label>
                    <Input type="text" id="firstName" name="firstName" required onChange={handleInputChange}/>
                </div>
                <div>
                    <label htmlFor="lastName" className="text-sm">Last Name</label>
                    <Input type="text" id="lastName" name="lastName" required onChange={handleInputChange}/>
                </div>
                <div className="col-span-2">
                    <label htmlFor="jobTitle" className="text-sm">Job Title</label>
                    <Input type="text" id="jobTitle" name="jobTitle" required onChange={handleInputChange}/>
                </div>
                <div className="col-span-2">
                    <label htmlFor="address" className="text-sm">Address</label>
                    <Input type="text" id="address" name="address" required onChange={handleInputChange}/>
                </div>
                <div>
                    <label htmlFor="phone" className="text-sm">Phone</label>
                    <Input type="text" id="phone" name="phone" required onChange={handleInputChange}/>
                </div>
                <div>
                    <label htmlFor="email" className="text-sm">Email</label>
                    <Input type="text" id="email" name="email" required onChange={handleInputChange}/>
                </div>
            </div>
            <div className="mt-3 flex justify-end">
                <Button type='submit'>Save</Button>
            </div>
        </form>
    </div> );
}
 
export default PersonalDetailForm;