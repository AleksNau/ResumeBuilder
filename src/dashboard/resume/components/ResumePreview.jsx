import { useContext } from "react";
import ResumeInfoContext from "../../../context/ResumeInfoContext";
import PersonalDetailPreview from "./preview/PersonalDetail";
import SummeryPreview from "./preview/SummeryPreview";
import ProfExpPreview from "./preview/ProfExpPreview";
import EducationalPreview from "./preview/EducationalPreview";
import SkillPreview from "./preview/SkillPreview";

const ResumePreview = () => {
    const {resumeInfo,setResumeInfo} = useContext(ResumeInfoContext);
    return ( 
    <div className="shadow-lg h-full p-14 border-t-[20px]" style={{borderColor:resumeInfo?.themeColor}}>
        <PersonalDetailPreview resumeInfo={resumeInfo}/>
        <SummeryPreview resumeInfo={resumeInfo}/>
        <ProfExpPreview resumeInfo={resumeInfo}/>
        <EducationalPreview resumeInfo={resumeInfo}/>
        <SkillPreview resumeInfo={resumeInfo}/>
    </div> );
}
 
export default ResumePreview;