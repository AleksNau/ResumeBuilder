const PersonalDetail = ({resumeInfo}) => {
    return ( <div>
        <h2 className="font-bold test-xl text-center" style={{color:resumeInfo?.themeColor}}>{resumeInfo?.firstName} {resumeInfo?.lastName}</h2>
        <h2 className="text-center text-sm font-medium">{resumeInfo?.jobTitle}</h2>
        <h2 className="text-center font-normal text-xs"  style={{color:resumeInfo?.themeColor}}>{resumeInfo?.addres}</h2>
    <div className="flex justify-between">
        <p className="font-normal text-xs" style={{color:resumeInfo?.themeColor}}>{resumeInfo?.phone}</p>
        <p className="font-normal text-xs" style={{color:resumeInfo?.themeColor}}>{resumeInfo?.email}</p>
    </div>
    <hr className="border-[1.5px] my-2" style={{borderColor:resumeInfo?.themeColor}}/>
    </div> );
}
 
export default PersonalDetail;