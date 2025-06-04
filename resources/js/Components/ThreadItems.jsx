import React from 'react'
import { Link } from '@inertiajs/react'
import { IconCircleCheck, IconEye, IconMessage, IconProgressCheck } from '@tabler/icons-react'

export default function ThreadItems({thread}) {
    return (
        <div className={`bg-white rounded-lg border ${thread.solved !== null ? 'border-teal-400' : ''}`}>
            <div className='border-b px-6 py-3'>
                <div className='flex items-center justify-between gap-10'>
                    <div className='flex items-center gap-2'>
                        <img src={thread.user.avatar} className='rounded-full w-8 h-8'/>
                        <span className='text-sm text-gray-900 font-semibold'>{thread.user.name}</span>
                    </div>
                    <div className='text-sm text-gray-700 flex items-center gap-1'>
                        {thread.created_at}
                    </div>
                </div>
            </div>
            <div className='px-6 py-4'>
                <div className='flex items-center gap-2 mb-6'>
                    {thread.tags.map((tag, i) =>
                        <Link href={`/threads/tags/${tag.slug}`} className='capitalize px-3 py-0.5 border border-slate-200 bg-blue-100 text-gray-700 text-xs rounded-sm font-semibold' key={i}>
                            {tag.label}
                        </Link>
                    )}
                </div>
                <Link href={`/threads/${thread.slug}`} className='text-gray-900 font-bold text-base hover:text-sky-500'>
                    {thread.title}
                </Link>
                <p className='line-clamp-2 text-sm mt-4'>
                    {thread.description}
                </p>
            </div>
            <div className='border-t border-gray-200 px-6 py-3'>
                <div className='flex justify-end items-center gap-4'>
                    <div className='flex items-center text-sm py-1 text-gray-700 gap-1'>
                        <IconEye strokeWidth={'1.5'} className='w-4 h-4'/> {thread.visit_count_total}x Dilihat
                    </div>
                    <div className='flex items-center text-sm py-1 text-gray-700 gap-1'>
                        <IconMessage strokeWidth={'1.5'} className='w-4 h-4'/> {thread.comments} Balasan
                    </div>
                    <div className='flex items-center text-sm py-1 text-gray-700 gap-1'>
                        {thread.solved === null ?
                            <>
                                <IconProgressCheck strokeWidth={'1.5'} className='w-4 h-4'/> Unresolved
                            </>
                            :
                            <>
                                <IconCircleCheck strokeWidth={'1.5'} className='w-4 h-4'/> Resolved
                            </>
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}