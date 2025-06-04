import React from 'react'

export default function Footer() {
    return (
        <div className='w-full mt-4'>
            <div className='p-6 bg-white border-b text-gray-700 border-t shadow'>
                <div className='container mx-auto max-w-6xl'>
                    <div className='flex flex-col gap-2 jusify-center items-center'>
                        <div className='text-xl font-semibold flex items-center gap-1'>
                            FORUM
                        </div>
                        <p className='text-gray-500 text-sm text-center'>
                            The developer portal for problem solving, knowledge sharing and community building.
                        </p>
                    </div>
                    <div className='mt-2 text-center pt-2 font-semibold text-gray-500 text-sm'>
                        © Forum
                    </div>
                </div>
            </div>
        </div>
    )
}
