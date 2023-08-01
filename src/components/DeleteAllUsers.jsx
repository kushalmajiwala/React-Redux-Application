import React from 'react'
import { deleteUsers } from '../store/slices/UserSlice'
import { useDispatch } from 'react-redux'

const DeleteAllUsers = () => {

    const dispatch = useDispatch();

    const deleteAllUsers = () => {
        dispatch(deleteUsers());
    }

    return (
        <>
            <div className='flex justify-center'>
                <div className='flex w-1/2 justify-end pt-4'>
                    <button className='text-lg bg-red-600 text-white px-3 py-1 hover:bg-red-500 rounded-lg' onClick={() => deleteAllUsers()}>Clear All Users</button>
                </div>
            </div>
        </>
    )
}

export default DeleteAllUsers