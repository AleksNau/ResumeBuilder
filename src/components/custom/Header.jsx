import React from 'react';
import {Button} from "../ui/button";
import {Link} from "react-router-dom";
import {UserButton, useUser} from "@clerk/clerk-react";

const Header = () => {
    const {user, isSignedIn} = useUser();
    return (
        <div className={'p-3 px-5 flex justify-between shadow-md'}>
            <img src="/logo.svg" alt="logo" width={100} height={100}/>

            {isSignedIn ? (
                <div>
                    <Button>Dashboard</Button>
                    <UserButton/>
                </div>
            ) : (<Link to={'/auth/sign-in'}>
                <Button>Get started</Button>
            </Link>)

            }

        </div>
    );
};

export default Header;