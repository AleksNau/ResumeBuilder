import { PlusSquare } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { v4 as uuidv4 } from 'uuid';
import GlobalApi from "../../../service/GlobalApi";
import {useUser} from '@clerk/clerk-react'


const AddResume = () => {
  const [openDialog, setOpenDialog] = useState(false);
  const [title, setTitle] = useState("");
  const {user} = useUser()

  const onCreate = () => {
    console.log(user)
    let uuid = uuidv4();
    const data = {
      data: {
        title:title,
        resumeid:uuid,
        userEmail:user?.primaryEmailAddress?.emailAddress,
        userName:user?.fullName
      }
    }

    GlobalApi.createNewResume(data).then(res => console.log(res))
  }
  return (
    <div>
      <div
        onClick={() => setOpenDialog(true)}
        className="p-14 py-24 border items-center 
        flex justify-center bg-secondary rounded-lg h-[280px] hover:scale-105 transiotio-all hover:shadow-md cursor-pointer border-dashed"
      >
        <PlusSquare />
      </div>

      <Dialog open={openDialog}>
        <DialogTrigger>Open</DialogTrigger>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Create New Resume</DialogTitle>
            <DialogDescription>
                <p>Add title for your new resume</p>
                <Input className="mt-2" placeholder="Ex.Frontend Developer" onChange={(e)=> setTitle(e.target.value)}/>
            </DialogDescription>
            <div className="flex justify-end gap-5">
              <Button onClick={()=>setOpenDialog(false)} variant="ghost">Cancel</Button>
              <Button disabled={title===""} onClick={()=>onCreate()} >Create</Button>
            </div>
          </DialogHeader>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default AddResume;
