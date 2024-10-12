import '../css-files/Profile.scss';
import {Search} from "@carbon/react";
import React, { useState } from 'react';
import {TextInput, View} from 'react-native';
import Message from './reusableComponents/Message';


const Messages = () => {

    const [filterValue, setFilterValue] = useState("");
    
    const namesToDisplay = [
        {
            name: "John Brown"
        },
        {
            name: "John Brown"
        },
        {
            name: "John Brown"
        },
        {
            name: "Liam Neason"
        },
        {
            name: "Liam Neason"
        },
        {
            name: "Liam Neason"
        },
        {
            name: "Michael Scantlebury"
        },
        {
            name: "Michael Scantlebury"
        },
        {
            name: "Michael Scantlebury"
        }
    ]

    const filterMessages = (event) => {
        setFilterValue(event.target.value);
    }
  
    return (
        <div className='MessagesContent'>
            <div className='searchConstraints'>
                <Search
                    size='lg'
                    placeholder='Search for messages'
                    labelText = 'Search'
                    closeButtonLabelText='Clear search'
                    onChange={filterMessages}
                />
            </div>

            <div className='Messages'>
                {namesToDisplay.filter((value) => value.name.toLowerCase().includes(filterValue.toLowerCase())).map((messageObject) => {
                    return (
                        <>
                            <div className='line'/>
                            <Message 
                                name = {messageObject.name}
                            />
                        </>
                    );
                })}
                <div className='line'/>
                
            </div>

            
        </div>
    );
};

export default Messages;