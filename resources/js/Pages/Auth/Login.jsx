import React from 'react'
import InputGroup from '@/Components/InputGroup'
import AuthLayout from '@/Layouts/AuthLayout'
import { Head, Link, useForm } from '@inertiajs/react'
import { IconLock, IconUser } from '@tabler/icons-react'
export default function Login() {

    // definisikan use form
    const { data, setData, post, errors } = useForm({
        email: '',
        password: '',
    })

    // definisikan sebuah method login
    function login(e){
        e.preventDefault()

        post('/login')
    }

    return (
        <>
            <Head title='Login'/>
            <div className='border bg-white p-10 rounded-lg w-full max-w-lg'>
                <h1 className='text-2xl font-semibold text-black mb-2'>Login</h1>
                <p className='text-gray-500 text-sm mb-5'>
                    Selamat datang, masukan email dan kata sandi anda untuk melanjutkan.
                </p>
                <form onSubmit={login}>
                    <div className='mb-5'>
                        <InputGroup
                            label={'Email'}
                            type={'text'}
                            icon={<IconUser strokeWidth={'1.5'} className='text-gray-400'/>}
                            placeholder={'example@dev.com'}
                            value={data.email}
                            onChange={e => setData('email', e.target.value)}
                            errors={errors.email}
                            />
                    </div>
                    <div className='mb-5'>
                        <InputGroup
                            label={'Kata Sandi'}
                            type={'password'}
                            icon={<IconLock strokeWidth={'1.5'} className='text-gray-400'/>}
                            placeholder={'Secret...'}
                            value={data.password}
                            onChange={e => setData('password', e.target.value)}
                            errors={errors.password}
                            />
                    </div>
                    <div className='flex items-center gap-3'>
                        <button className='rounded-lg px-6 py-2 bg-gray-700 text-gray-50 hover:scale-110 duration-300' type='submit'>
                            Masuk
                        </button>
                        <Link href={'/register'} className='rounded-lg px-6 py-2 bg-sky-700 text-gray-50 hover:scale-110 duration-300'>
                            Daftar
                        </Link>
                    </div>
                </form>
            </div>
        </>
    )
}

Login.layout = page => <AuthLayout children={page}/>