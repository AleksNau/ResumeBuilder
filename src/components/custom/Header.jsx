import React from 'react';
import {Button} from "../ui/button";
import {Link, useNavigate} from "react-router-dom";
import {UserButton, useUser} from "@clerk/clerk-react";

const Header = () => {
    const {user, isSignedIn} = useUser();
    const navigate = useNavigate();
    return (
        <div className={'p-3 px-5 flex justify-between shadow-md'}>
            <img src="/logo.svg" alt="logo" width={100} height={100}/>

            {isSignedIn ? (
                <div className='flex gap-2 items-center'>
                    <Button onClick={() => {navigate('/dashboard')}}>Dashboard</Button>
                    <UserButton variant="outline"/>
                </div>
            ) : (<Link to={'/auth/sign-in'}>
                <Button>Get started</Button>
            </Link>)

            }

        </div>
    );
};

export default Header;