const EducationalPreview = ({resumeInfo}) => {
    
    return ( 
        <div className="my-6">
        <h2 className="text-center font-bold test-sm mb-2"
        style={{color:resumeInfo?.themeColor}}>Education</h2>
        <hr style={{borderColor:resumeInfo?.themeColor}}/>
        {resumeInfo&&resumeInfo.education.map((item,index)=> {
               return (<div className="my-5" key={index}>
                    <h2 className="text-sm font-bold" style={{color:resumeInfo.themeColor}}>{item?.universityName}</h2>
                    <h2 className="text-xs flex justify-between">{item?.degree} in {item?.major} <span>{item?.startDate} - {item?.endDate}</span></h2>
                    <p className="text-xs my-2">{item?.description}</p>
                </div> )
            })}
    </div> );
}
 
export default EducationalPreview;