import { Button } from "../../../../components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { useContext, useEffect, useState } from "react";
import {LoaderCircle} from "lucide-react";
import { useParams } from "react-router-dom";
import GlobalApi from "../../../../../service/GlobalApi";
import GigaAuth from "../../../../../service/GigaAuth";
import GigaApi from "../../../../../service/GigaApi";
import ResumeInfoContext from "../../../../context/ResumeInfoContext";
import { v4 as uuidv4 } from 'uuid';
import qs from "qs";

const SummeryForm = ({enableNext}) => {
    const {resumeInfo,setResumeInfo} = useContext(ResumeInfoContext);
    const [summery, setSummery] = useState();
    const [loading,setLoading]=useState(false);
    const params = useParams();

    const onSave = (e) => {
        e.preventDefault();
        setLoading(true)
        const data ={data:{summery:summery}}
        GlobalApi.updateResumeDetail(params?.resumeId,data).then(res => {
            console.log(res);
            enableNext(true);
            setLoading(false);
            toast("Resume has been updated.")
        },(error => setLoading(false)))
        
    }
    useEffect(()=> {
        summery&&setResumeInfo({
            ...resumeInfo,
            summery:summery
        })
    })

    

    
    const handleAi = (e) => {
        e.preventDefault();
        /*let data = qs.stringify({
            'scope': 'GIGACHAT_API_PERS' 
          });
        GigaAuth.getKey(data).then((response) => {
            console.log(JSON.stringify(response.data));
          })
          .catch((error) => {
            console.log(error);
          });*/
        const data = {
            "model": "GigaChat",
            "messages": [
              {
                "role": "user",
                "content": "Привет! Как дела?"
              }
            ],
            "stream": false,
            "repetition_penalty": 1
          }
        GigaApi.sendNewMessage(data)
    }
    return ( 
        <div className="p-5 shadow-lg rounded-lg border-t-primary border-t-4">
        <h2 className="font-bold text-lg">Summery</h2>
        <p>Add summery for your job title</p>
        <form className="mt-7">
            <div className="flex justify-between items-end">
                <label>Add summery</label>
                <Button onClick={handleAi} type="button" className="border-primary text-primary" size="sm" variant="outline">Generate from Ai</Button>
            </div>
            <Textarea requared onChange={(e) => setSummery(e.target.value)} className="mt-5"/>
            <div className="mt-2 flex justify-end">
                <Button type='submit' disabled={loading}>{loading?<LoaderCircle className="animate-spin"/>:"Save"}</Button>
            </div>
        </form>
        </div>
     );
}
 
export default SummeryForm;