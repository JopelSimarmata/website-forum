import React from 'react'
import Search from '@/Components/Search'
import Sidebar from '@/Components/Sidebar'
import ThreadItems from '@/Components/ThreadItems'
import Pagination from '@/Components/Pagination'
import MainLayout from '@/Layouts/MainLayout'
import { Head, useForm, usePage } from '@inertiajs/react'
import { IconCircleCheck, IconDatabaseOff, IconProgressCheck } from '@tabler/icons-react'
export default function Index() {

    // destruct props
    const { threads, users_count, resolved_count, threads_count, tags } = usePage().props;

    // define useform helper from inertia
    const {data, setData, get} = useForm({
        status : ''
    })

    // define method filter
    const filter = async (e) => {
        e.preventDefault()

        get(`/threads?status=${data.status}`)
    }

    return (
        <>
            <Head title='Threads'/>
            <div className='flex flex-col-reverse md:flex-row gap-10'>
                <div className='w-full md:w-8/12'>
                    <div className='mb-2'>
                        <Search url={'/threads'}/>
                    </div>
                    <form onSubmit={filter} className='flex items-center justify-end mb-2'>
                        <button onClick={() => setData('status', 'resolved')} className='px-4 py-2 bg-white border border-r-0 rounded-l-lg hover:bg-gray-300 flex items-center gap-1'>
                            <IconCircleCheck strokeWidth={'1.5'} className='w-5 h-5'/> Resolved
                        </button>
                        <button onClick={() => setData('status', 'unresolved')} className='px-4 py-2 bg-white border rounded-r-lg hover:bg-gray-300 flex items-center gap-1'>
                            <IconProgressCheck strokeWidth={'1.5'} className='w-5 h-5'/> Unresolved
                        </button>
                    </form>
                    <div className='grid grid-cols-1 gap-2 mb-5'>
                        {threads.data.length ?
                            threads.data.map((thread, i) => <ThreadItems thread={thread} key={i}/>)
                            :
                            <div className='border bg-white w-full p-8 text-center flex flex-col items-center gap-1 justify-center font-semibold text-rose-500 rounded-lg'>
                                <IconDatabaseOff/> Threads Not Found
                            </div>
                        }
                    </div>
                    {threads.meta.last_page !== 1 && (<Pagination links={threads.meta.links}/>)}
                </div>
                <div className='w-full md:w-4/12'>
                    <Sidebar
                        users_count={users_count}
                        resolved_count={resolved_count}
                        threads_count={threads_count}
                        tags={tags}
                        />
                </div>
            </div>
        </>
    )
}

Index.layout = page => <MainLayout children={page}/>