import React,{ useContext } from 'react'
import { MyContext } from '../context';

const UsersItem = () => {
    const context = useContext(MyContext);

    return(
        <>
           { context.active ? 
                context.users.map((user)=>(
                    <div key={user.id}>
                        <div>Name: {user.name}</div>
                    </div>
                ))   
            :null}
            <hr/>
            <button onClick={context.toggleActive}>Toggle it!!</button>
        </>
    )
}

export default UsersItem;