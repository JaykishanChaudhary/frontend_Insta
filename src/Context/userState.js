import React from "react";
import ABC from "./userContext";

const UserState=(props)=>{
    
    return(
        <UserState.provider >
            {props.children}
        </UserState.provider>
    )
}


export default UserState