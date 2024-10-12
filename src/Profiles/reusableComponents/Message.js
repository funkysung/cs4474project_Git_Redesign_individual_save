
import {Search} from "@carbon/react";
import React, { useState } from 'react';
import {TextInput, View} from 'react-native';
import {User} from "@carbon/icons-react";



const Message = (props) => {
    
    const name = props.name;
  
    return (
        <div className='Message'>

            <div className="leftSide">
                <div className = "profileBackground smallIcon">
                    <User size = "32" fill = "white"/>              
                </div>

                <div className="messageInfo">
                    <div className="name"> {name} </div>
                    <div className="lastMsg">You:  Hi! </div>
                </div>
            </div>

            <div className="rightSide">
                <div className="time">13 hours ago</div>
            </div>
        </div>
    );
};

export default Message;