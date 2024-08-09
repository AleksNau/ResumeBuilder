import { ArrowLeft, ArrowRight, LayoutGrid } from "lucide-react";
import PersonalDetailForm from "./forms/PersonalDetailForm";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import SummeryForm from "./forms/SummeryForm";
import ExpForm from "./forms/ExpForm";
const FormSection = () => {
    const [activeFormIndex,setActiveFormIndex] = useState(3)
    const [enableNext,setEnableNext] = useState(false)
    return ( 
    <div>
        <div className="flex justify-between items-center mb-5">
            <Button variant="outline" size="sm"><LayoutGrid/> Theme</Button>
            <div className="flex gap-2">
                {activeFormIndex>1&&<Button size="sm" onClick={()=> setActiveFormIndex(activeFormIndex-1)}><ArrowLeft/></Button>}
                <Button disabled={!enableNext} className="flex gap-2" size="sm" onClick={()=> setActiveFormIndex(activeFormIndex+1)}>Next <ArrowRight/></Button>
            </div>
        </div>
        {activeFormIndex===1?<PersonalDetailForm enableNext={(v)=>setEnableNext(v)}/>:activeFormIndex===2?<SummeryForm enableNext={(v)=>setEnableNext(v)}/>:activeFormIndex===3?<ExpForm enableNext={(v)=>setEnableNext(v)}/>:null}
    </div> );
}
 
export default FormSection;