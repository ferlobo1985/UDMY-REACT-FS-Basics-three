import React,{ Component } from 'react';

const MyContext = React.createContext();


class MyProvider extends Component {

    state = {
        users:[
            {id:1,name:'Francis'},
            {id:2,name:'Steve'},
            {id:3,name:'Mark'},
        ]
    }
    

    render(){
        return(
            <MyContext.Provider value={this.state}> 
                {this.props.children}
            </MyContext.Provider>
        )
    }
}


export {MyContext,MyProvider}

