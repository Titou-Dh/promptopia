"use client";

import { useState ,useEffect } from 'react';
import {useSession} from 'next-auth/react';
import {useRouter} from 'next/navigation';

import Profile from '@components/Profile';


const MyProfile = () => {
    const handleEdit = () => {

    }

    const handleDelete = async () => {

    }


    return (
        <div>
            <Profile
                name="My"
                desc="welcome to yout personalized prifile page"
                data={[]}
                handleEdit={handleEdit}
                handleDelete={handleDelete}

            />
        </div>
    )
}

export default MyProfile
