import React from "react";
import { connect } from "react-redux";
import { deleteUsers } from '../store/slices/UserSlice'

class ClearUsers extends React.Component {

    deleteUsers = () => {
        this.props.deleteUsers();
    }

    render() {
        return (
            <>
                <div className='flex justify-center'>
                    <div className='flex w-1/2 justify-end pt-4'>
                        <button className='text-lg bg-red-600 text-white px-3 py-1 hover:bg-red-500 rounded-lg' onClick={this.deleteUsers}>Clear All Users Class</button>
                    </div>
                </div>
            </>
        )
    }
}

export default connect(null,{ deleteUsers })(ClearUsers);