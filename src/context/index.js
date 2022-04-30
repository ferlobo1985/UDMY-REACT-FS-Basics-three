import React,{ Component } from 'react';

const MyContext = React.createContext();


class MyProvider extends Component {

    state = {
        users:[
            {id:1,name:'Francis'},
            {id:2,name:'Steve'},
            {id:3,name:'Mark'},
        ],
        active:true
    }
    

    toggleActive = () => {
        this.setState({active:!this.state.active})
    }


    render(){
        const {users,active} = this.state
        return(
            <MyContext.Provider value={{
                users,
                active,
                toggleActive: this.toggleActive                
            }}> 
                {this.props.children}
            </MyContext.Provider>
        )
    }
}


export {MyContext,MyProvider}

