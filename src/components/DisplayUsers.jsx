import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { removeUser } from '../store/slices/UserSlice';

const DisplayUsers = () => {

    const data = useSelector((state) => {
        return state.users;
    });

    const dispatch = useDispatch();

    const deleteUser = (index) => {
        dispatch(removeUser(index));
    }

    console.log(data);

    return (
        <>
            {
                data.map((user, index) => {
                    return (
                        <li className='flex w-full justify-between mt-4' key={index}>
                            <p className='text-lg'>{user}</p>
                            <i className="bi bi-trash-fill text-red-600 cursor-pointer text-xl" onClick={() => deleteUser(index)}></i>
                        </li>
                    )
                })
            }
        </>
    )
}

export default DisplayUsers