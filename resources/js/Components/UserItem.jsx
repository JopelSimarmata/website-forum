import React from 'react'
import { Link } from '@inertiajs/react'

export default function UserItem({user}) {
    return (
        <div className='bg-white rounded-lg'>
            <div className='flex flex-col gap-4 justify-center items-center text-center p-6 py-4'>
                <img src={user.avatar} className='rounded-full w-20 h-20'/>
                <div>
                    <Link href={`/users/${user.username}`} className='text-center text-gray-700 font-bold'>
                        {user.name}
                    </Link>
                    <div className='text-gray-600 text-xs font-semibold text-center mt-2'>
                        @{user.username}
                    </div>
                </div>
                <div className='flex items-center gap-6 border-t-2 border-gray-50 p-2 justify-center'>
                    <div className='text-center flex flex-col gap-1'>
                        <div className='text-gray-600 text-sm font-semibold'>Threads</div>
                        <div className='text-lg text-[#0084C7] font-bold'>
                            {user.threads}
                        </div>
                    </div>
                    <div className='text-center flex flex-col gap-1'>
                        <div className='text-gray-600 text-sm font-semibold'>Resolved</div>
                        <div className='text-lg text-[#0084C7] font-bold'>
                            {user.resolved}
                        </div>
                    </div>
                    <div className='text-center flex flex-col gap-1'>
                        <div className='text-gray-600 text-sm font-semibold'>Comments</div>
                        <div className='text-lg text-[#0084C7] font-bold'>
                            {user.comments}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}