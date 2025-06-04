import React from 'react'
import CreatableSelect from 'react-select/creatable';

export default function MultiSelect({label, errors, ...props}) {
    return (
        <div className='flex flex-col gap-2'>
            <label className='text-gray-600 text-sm font-semibold'>{label}</label>
            <CreatableSelect isMulti {...props}/>
            {errors && (
                <small className='text-xs text-red-500 text-underline'>{errors}</small>
            )}
        </div>
    )
}