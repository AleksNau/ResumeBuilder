import {ArrowLeft, ArrowRight, LayoutGrid} from "lucide-react";
import PersonalDetailForm from "./forms/PersonalDetailForm";
import {Button} from "@/components/ui/button";
import {useState} from "react";
import SummeryForm from "./forms/SummeryForm";
import ExpForm from "./forms/ExpForm";
import EducationForm from "./forms/EducationForm.jsx";
import SkillsForm from "./forms/SkillsForm.jsx";

const FormSection = () => {
    const [activeFormIndex, setActiveFormIndex] = useState(5)
    const [enableNext, setEnableNext] = useState(false)
    return (
        <div>
            <div className="flex justify-between items-center mb-5">
                <Button variant="outline" size="sm"><LayoutGrid/> Theme</Button>
                <div className="flex gap-2">
                    {activeFormIndex > 1 &&
                        <Button size="sm" onClick={() => {
                            setActiveFormIndex(activeFormIndex - 1)
                            setEnableNext(true)
                        }}><ArrowLeft/></Button>}
                    <Button disabled={!enableNext} className="flex gap-2" size="sm"
                            onClick={() => {
                                setActiveFormIndex(activeFormIndex + 1)
                                setEnableNext(false)
                            }}>Next <ArrowRight/></Button>
                </div>
            </div>
            {activeFormIndex === 1 ?
                <PersonalDetailForm enableNext={(v) => setEnableNext(v)}/> : activeFormIndex === 2 ?
                    <SummeryForm enableNext={(v) => setEnableNext(v)}/> : activeFormIndex === 3 ?
                        <ExpForm enableNext={(v) => setEnableNext(v)}/>: activeFormIndex === 4 ?
                            <EducationForm enableNext={(v) => setEnableNext(v)}/> : activeFormIndex === 5 ?
                                <SkillsForm enableNext={(v) => setEnableNext(v)}/> : null}
        </div>);
}

export default FormSection;