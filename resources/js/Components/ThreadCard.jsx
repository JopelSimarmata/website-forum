import React from 'react'
import { Link } from '@inertiajs/react'
import { IconCalendar, IconEye, IconPencilCog, IconMessage } from '@tabler/icons-react'
import Delete from './Delete'

export default function ThreadCard({thread}) {
    return (
        <div className={`bg-white rounded-lg border border-gray-50 ${thread.solved !== null ? 'border-teal-400' : ''}`}>
            <div className='border-b border-gray-100 px-3 py-1.5'>
                <div className='flex items-center gap-2'>
                    <img src={thread.user.avatar} className='w-8 h-8 rounded-full'/>
                    <div className='text-sm line-clamp-1'>{thread.user.name}</div>
                </div>
            </div>
            <div className='px-4 py-3'>
                <div className='flex flex-wrap items-center gap-2'>
                    {thread.tags.map((tag, index) => (
                        <div key={index} className='text-xs px-3 py-0.5 bg-sky-100 text-sky-500 rounded-sm font-semibold capitalize'>
                            {tag.label}
                        </div>
                    ))}
                </div>
                <div className='mt-5'>
                    <h3 className="line-clamp-1 font-bold text-gray-700 hover:text-sky-500">
                        <Link href={`/threads/${thread.slug}`}>{thread.title}</Link>
                    </h3>
                    <p className="mt-3 line-clamp-2 text-sm text-gray-500">
                        {thread.description}
                    </p>
                </div>
                <div className='flex justify-between items-center gap-2 mt-5'>
                    <div className='text-xs text-gray-500 flex items-center gap-1'>
                        <IconCalendar strokeWidth={'1.5'} className='w-5 h-5 text-gray-500'/> {thread.created_at}
                    </div>
                    <div className='flex items-center gap-2'>
                        <Delete url={'/account/threads'} id={thread.id}/>
                        <Link href={`/account/threads/${thread.id}/edit`} className='bg-teal-100 p-1 rounded-full border border-teal-100 hover:bg-teal-200'>
                            <IconPencilCog className='text-teal-500 w-5 h-5' strokeWidth={'1.5'}/>
                        </Link>
                    </div>
                </div>
            </div>
            <div className='border-t border-gray-100 px-3 py-1.5'>
                <div className='flex flex-wrap justify-end items-center gap-4'>
                    <div className='flex items-center gap-1 text-xs text-gray-500'>
                        <IconEye className='w-5 h-5' strokeWidth={'1.5'}/>
                        {thread.visit_count_total}x Dilihat
                    </div>
                    <div className='flex items-center gap-1 text-xs text-gray-500'>
                        <IconMessage className='w-5 h-5' strokeWidth={'1.5'}/>
                        {thread.comments} Balasan
                    </div>
                </div>
            </div>
        </div>
    )
}