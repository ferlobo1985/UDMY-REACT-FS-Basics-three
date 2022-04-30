import React,{ useContext } from 'react'
import { MyContext } from '../context';

const UsersItem = () => {
    const context = useContext(MyContext);

    console.log(context)

    return(
        <>
            user item
        </>
    )
}

export default UsersItem;