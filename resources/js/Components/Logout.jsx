import React from 'react'
import { useForm } from '@inertiajs/react';
import { IconLogout } from '@tabler/icons-react';
export default function Logout() {

    // define useform helper inertia
    const { post } = useForm();

		// define method logout
    const logout = async (e) => {
        e.preventDefault();

        post('/logout');
    }
    return (
        <button
            className='w-full bg-rose-200 rounded-lg px-3 py-2 font-bold text-rose-500 flex items-center gap-2 justify-start mt-5 hover:bg-rose-300'
            onClick={logout}>
            <IconLogout strokeWidth={'1.5'} className='w-6 h-6'/>
            Logout
        </button>
    )
}