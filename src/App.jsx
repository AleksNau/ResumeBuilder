

import './App.css'
import {Button} from "./components/ui/button";
import {Navigate, Outlet} from "react-router-dom";
import {useUser} from "@clerk/clerk-react";
import { Toaster } from "@/components/ui/sonner"
import Header from "./components/custom/Header.jsx";

function App() {
const {user,isLoaded,isSignedIn} = useUser()
//поправить на !isSignedIn
if (isSignedIn && isLoaded) {
    return <Navigate to={'/auth/sign-in'}/>
}
  return (
    <>
        <Header/>
        <Outlet/>
        <Toaster />
    </>
  )
}

export default App
