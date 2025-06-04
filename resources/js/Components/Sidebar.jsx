import React from 'react'
import { Link, usePage } from '@inertiajs/react'
import { IconMessage2Bolt, IconPencilPlus, IconTimeline } from '@tabler/icons-react'
import UserItem from './UserItem';
export default function Sidebar({users_count, resolved_count, threads_count, tags}) {

    const { auth } = usePage().props;

    return (
        <div className='flex flex-col gap-5 lg:sticky lg:top-20'>
            <UserItem user={auth.user}/>
            <div className='bg-white rounded-lg'>
                <div className='flex items-center gap-1 text-gray-900 font-semibold px-4 py-2'>
                    <IconTimeline strokeWidth={'1.5'} className='w-6 h-6'/> Forum Stats
                </div>
                <div className='px-4 py-2 border-t border-gray-200'>
                    <div className='flex flex-col'>
                        <div className='flex justify-between items-center gap-2 py-3 border-b'>
                            <span className='font-semibold text-center text-sm text-gray-900'>Threads</span>
                            <span className='font-semibold text-sm text-gray-500 '>{threads_count}</span>
                        </div>
                        <div className='flex justify-between items-center gap-2 py-3 border-b'>
                            <span className='font-semibold text-sm text-gray-900'>Members</span>
                            <span className='font-semibold text-sm text-gray-500 '>{users_count}</span>
                        </div>
                        <div className='flex justify-between items-center gap-2 py-3 border-b'>
                            <span className='font-semibold text-sm text-gray-900'>Resolved</span>
                            <span className='font-semibold text-sm text-gray-500 '>{resolved_count}</span>
                        </div>
                        <div className='flex py-3'>
                            <Link href={'/account/threads/create'} className='w-full text-center bg-green-200 px-4 py-1.5 text-green-800 rounded-md flex items-center gap-1 justify-center hover:bg-green-300'>
                                <IconPencilPlus strokeWidth={'1.5'} className='w-5 h-5'/>
                                Start new Threads
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
            <div className='bg-white rounded-lg'>
                <div className='flex items-center gap-1 text-gray-900 font-semibold px-4 py-2'>
                    <IconMessage2Bolt strokeWidth={'1.5'} className='w-6 h-6'/> Trending Thread Tags
                </div>
                <div className='px-4 py-2 border-t border-gray-200 flex lg:items-center lg:justify-center gap-2 flex-wrap'>
                    {tags.map((tag, i) => (
                        <Link href={`/threads/tags/${tag.slug}`} className='capitalize px-3 py-0.5 border border-slate-200 bg-blue-100 text-gray-700 text-xs rounded-sm font-semibold hover:bg-blue-200' key={i}>
                            # {tag.name}
                        </Link>
                    ))}
                </div>
            </div>
        </div>
    )
}
