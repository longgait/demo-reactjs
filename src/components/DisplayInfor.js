import React, { useState } from "react";
import './DisplayInfor.scss';

//stateless k có state
// class DisplayInfor extends React.Component{
  

//     render(){
//         const {listUsers} = this.props;
//         // console.table(listUsers);
//         return(
//            <div className="display-infor">
                
//                 {true &&
//                     <div>
//                         {listUsers.map((user) => {
//                             return (
//                                 <div key={user.id} className = {user.age > 18 ?"green":"red"}>
//                                     <div>My name's {user.name}</div>
//                                     <div>My age's {user.age}</div>
//                                     <hr/>   
//                                 </div>
//                             )
//                         })}
//                     </div>
//                 }
//             </div> 
//         )
//     }
// }

const DisplayInfor = (props) => {
    const {listUsers} = props;         
    // console.table(listUsers);
    const [isShowHideListUsers, setShowHideListUsers] = useState(true);
    const handleShowHideListUser = () => {
        setShowHideListUsers (!isShowHideListUsers);
    }
    return(
        <div className="display-infor">
                        <div>
                            <span onClick={() => {handleShowHideListUser()}}>
                                {isShowHideListUsers === true ? 'Hide list users' : 'Show list users'}
                            </span>
                        </div>
                        {isShowHideListUsers &&
                            <div>
                                {listUsers.map((user) => {
                                    return (
                                        <div key={user.id} className = {user.age > 18 ?"green":"red"}>
                                            <div>My name's {user.name}</div>
                                            <div>My age's {user.age}</div>
                                            <hr/>   
                                        </div>
                                    )
                                })}
                            </div>
                        }
        </div> 
    )
            
}
export default DisplayInfor;