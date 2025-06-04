import React from 'react'
import { Dialog, Transition } from '@headlessui/react'
import { IconMessagePlus } from '@tabler/icons-react'

export default function Modal({isOpen, children,...props}) {
    return (
        <Transition
            show={isOpen}
            enter="transition-opacity duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="transition-opacity duration-300"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
        >
            <Dialog {...props} className={'fixed inset-0 flex items-center justify-center z-50 px-2'}>
                <div className="fixed inset-0 bg-black/30" aria-hidden="true" />
                <div className="fixed inset-0 flex items-center justify-center p-4">
                    <Dialog.Panel className='bg-white w-full md:w-1/2 rounded-lg shadow-lg z-10'>
                        <Dialog.Title className='border-b px-4 py-2 text-gray-900 font-semibold text-lg flex items-center gap-2'>
                            <IconMessagePlus strokeWidth={'1.5'} className='w-6 h-6'/> Comment Thread
                        </Dialog.Title>
                        <div className='p-4'>
                            {children}
                        </div>
                    </Dialog.Panel>
                </div>
            </Dialog>
        </Transition>
    )
}