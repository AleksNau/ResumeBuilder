const SkillPreview = ({resumeInfo}) => {
    return ( 
    <div className="my-6">
        <h2 className="text-center font-bold test-sm mb-2"
        style={{color:resumeInfo?.themeColor}}>Education</h2>
        <hr style={{borderColor:resumeInfo?.themeColor}}/>
        <div className="grid grid-cols-2 gap-3 my-4">
        {resumeInfo&&resumeInfo.skills.map((item,index)=> {
               return (<div className="my-5 flex items-center justify-between" key={index}>
                    <h2 className="text-xs font-bold" style={{color:resumeInfo.themeColor}}>{item?.name}</h2>
                    <div className="h-2 bg-gray-200 w-[120px]">
                        <div className="h-2" style={{backgroundColor:resumeInfo?.themeColor,width:item?.rating+'%'}}></div>
                    </div>
                </div> )
            })}
        </div>
    </div> );
}
 
export default SkillPreview;