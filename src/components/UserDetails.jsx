import React from 'react'
import DeleteAllUsers from './DeleteAllUsers'
import { fakeUserData } from '../api'
import { useDispatch } from 'react-redux'
import { addUser } from '../store/slices/UserSlice'
import DisplayUsers from './DisplayUsers'

const UserDetails = () => {

    const dispatch = useDispatch();

    const addNewUser = (name) => {
        dispatch(addUser(name));
    }

    return (
        <>
            <div>
                <div className='flex justify-center'>
                    <div className='flex w-1/2 justify-between'>
                        <div className='flex justify-evenly text-gray-400 font-medium pt-1'>
                            <h4 className='text-3xl'>List of User Details</h4>
                        </div>
                        <div className='pt-1'>
                            <button className='text-lg bg-blue-600 text-white px-3 py-1 hover:bg-blue-500 rounded-lg' onClick={() => addNewUser(fakeUserData())}>Add New User</button>
                        </div>
                    </div>
                </div>
                <div className='flex justify-center mt-5 mb-5'>
                    <ul className='w-1/2 border-b-2 pb-5'>
                       <DisplayUsers/>
                    </ul>
                </div>
                <DeleteAllUsers />
            </div>
        </>
    )
}

export default UserDetails