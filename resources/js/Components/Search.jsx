import React from "react"
import { useForm } from "@inertiajs/react"
import { IconSearch } from "@tabler/icons-react"

export default function Search ({url}) {

    // define useForm from inertia
    const { data, setData, get} = useForm({
        search: '',
    })

    // define method search
    function search(e){
        e.preventDefault()

        get('${url}')
    }

    return (
        <>
            <form onSubmit={search}>
                <div className='flex items-center'>
                    <input type='text' value={data.search} onChange={e => setData('search', e.target.value)} className='w-full text-sm border rounded-md border-r-0 rounded-r-none px-4 py-2 text-gray-700 focus:ring-0 border-gray-200 focus:border-sky-500' placeholder="Search Threads Data..."/>
                    <button type='submit' className='flex items-center gap-2 px-4 py-2 bg-slate-900 border text-white text-sm hover:bg-slate-950 group duration-500 hover:transition-transform rounded-lg rounded-l-none'>
                        <IconSearch size={'20'} strokeWidth={'1.5'} className={'group-hover:scale-110 group-hover:rotate-12 duration-500 text-gray-400 group-hover:text-gray-50'}/>
                    </button>
                </div>
            </form>
        </>
    )


}