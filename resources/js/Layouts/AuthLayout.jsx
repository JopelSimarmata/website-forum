import React from "react";

export default function AuthLayout({children}){
    return (
        <div className='flex flex-col items-center min-h-screen justify-center px-2 md:px-0'>
            {children}
        </div>
    )
}