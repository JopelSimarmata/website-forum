import React from 'react'
import { Link } from '@inertiajs/react'
import { IconPencilCancel, IconPencilCheck } from '@tabler/icons-react'

export default function Card({title, action, icon, btnTitle, href, children}) {
    return (
        <div className='bg-white rounded-lg'>
            <div className='border-b px-6 py-3'>
                <div className='flex items-center gap-2'>
                    {icon}
                    <h1 className='font-semibold text-gray-900'>{title}</h1>
                </div>
            </div>
            <form onSubmit={action}>
                <div className='px-6 py-4'>
                    {children}
                </div>
                <div className='border-t border-gray-200 px-6 py-3'>
                    <div className='flex items-center gap-3'>
                        <button type='submit' className='rounded-lg px-4 py-2 bg-sky-700 text-gray-50 hover:bg-sky-800 flex items-center gap-1 text-sm'>
                            <IconPencilCheck strokeWidth={'1.5'} className='w-5 h-5'/> {btnTitle}
                        </button>
                        <Link href={href} className='rounded-lg px-4 py-2 bg-rose-700 text-gray-50 hover:bg-rose-800 flex items-center gap-1 text-sm'>
                            <IconPencilCancel strokeWidth={'1.5'} className='w-5 h-5'/> Cancel
                        </Link>
                    </div>
                </div>
            </form>
        </div>
    )
}