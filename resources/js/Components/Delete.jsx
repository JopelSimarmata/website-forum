import React from 'react'
import { useForm } from '@inertiajs/react'
import { IconTrash } from '@tabler/icons-react'
import Swal from 'sweetalert2'

export default function Delete({url, id}){

    //define usefrom from inertia
    const { delete: destroy } = useForm();

    //define method destroy
    const deleteData = async (id) => {
        Swal.fire({
            title: 'Apakah kamu yakin ingin menghapus data ini ?',
            text: "Data ini tidak akan bisa dikembalikan!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Ya, tolong hapus!',
            cancelButtonText: 'Tidak'
        }).then((result) => {
            if (result.isConfirmed) {
                destroy('${url}/${id}')

                Swal.fire({
                    title: 'Succes!',
                    text: 'Data kamu berhasil dihapus!',
                    icon: 'success',
                    showConfirmButton: false,
                    timer: 1500
                })
            }
        })
    }

    return (
        <button onClick={() => deleteData(id)} className='bg-rose-100 p-1 rounded-full border border-rose-100 hover:bg-red-200'>
            <IconTrash className='text-rose-500 w-5 h-5' strokeWidth={'1.5'}/>
        </button>
    )
}