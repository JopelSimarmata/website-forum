import Navbar from '@/Components/Navbar'
import Footer from '@/Components/Footer'
import React from 'react'
import { Toaster } from 'react-hot-toast';
export default function MainLayout({children}) {
    return (
        <>
            <Navbar/>
            <div className='min-h-screen mx-auto mt-20 max-w-screen-lg px-2 sm:px-4 lg:px-8'>
                <Toaster position="top-right"/>
                {children}
            </div>
            <Footer/>
        </>
    )
}