import React from "react";
import DisplayInfor from "./DisplayInfor";
import AddUserInfor from "./AddUserInfor";
class MyComponent extends React.Component{
    
    state = {
        listUsers : [
            {id: 1 ,name : "Chau", age : 7},
            {id: 2 ,name : "van", age : 31},
            {id: 3 ,name : "long", age : 35}
        ]
    }
    handleAddNewUser = (userObj) => {
      this.setState({
        listUsers: [userObj, ...this.state.listUsers]
      })
    }
    //JSX
    render(){
        //DRY
        return (
            <div>
                <AddUserInfor  
                    handleAddNewUser = {this.handleAddNewUser}/>
                <br /> <br/>
                <DisplayInfor 
                    listUsers = {this.state.listUsers}/>
                   
                
            </div>
            
        );
    }
}

export default MyComponent;