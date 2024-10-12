// About.js
import '../css-files/Profile.scss';
import {User} from "@carbon/icons-react";
import React, { useState, useEffect, useRef } from 'react';
/*import Dropzone from "react-dropzone";
import avatarEdit from 'react-avatar-edit';
import {Dialog} from 'primereact/dialog'
import {Button} from 'primereact/button'
import {InputText} from 'primereact/inputtext'
import Avatar from 'react-avatar-edit';*/

import ProfileInfo from './ProfileInfo';
import Messages from './Messages';
import Repositories from './Repositories';
import Projects from './Projects';

import useScreenSize from '../HelpfulComponents/useScreenSize';
import { Modal } from '@carbon/react';

const ProfilePageMain = (props) => {

    const inputRef = useRef(null)

    const [img, setImg] = useState(null)
    const [isImgUploaded, setIsImageUploaded] = useState(false);

    const [selectedProfileInformation, setSelectedProfileInformation] = useState(true);
    const [selectedMessages, setSelectedMessages] = useState(false);
    const [selectedRepositories, setSelectedRepositories] = useState(false);
    const [selectedProjects, setSelectedProjects] = useState(false);
    const [selectedSignOut, setSelectedSignOut] = useState(false);

    const screenSize = useScreenSize();

    const [styleProfile, setStyleProfile] = useState(700);
    const [styleMessages, setStyleMessages] = useState(500);
    const [styleRepo, setStyleRepo] = useState(500);
    const [styleProj, setStyleProj] = useState(500);
    const [styleSo, setStyleSo] = useState(500);
   
    const onClick = () => {
        inputRef.current.click();
    }
/*
    {
        font-weight: 700;
        cursor: pointer;
    }
*/
    const changeStyle = () => {
        if (styleProfile == 500) {
            setStyleProfile(700);
        } else {
            setStyleProfile(500)
        }
    }

    const onChange = (event) => {
        const file = event.target.files[0];
        if (file) {
            setImg(file);
            setIsImageUploaded(true);
        }
    }

    const deselectAll = () => {
        setSelectedProfileInformation(false);
        setStyleProfile(500)

        setSelectedMessages(false);
        setStyleMessages(500);

        setSelectedRepositories(false);
        setStyleRepo(500);

        setSelectedProjects(false);
        setStyleProj(500);
    }
    

    return (
        <div className = "profilePage">
            <div className = "sideMenu">
                <div className='profileImgInfo'>
                    <div className = "profileBackground" onClick={onClick}>
                        {!isImgUploaded ? 
                            <>
                                {screenSize >= 850 ? 
                                
                                    <User size = "96" fill = "white"/>
                                    
                                    :
                                    
                                    <User size = "64" fill = "white"/>
                                
                                }
                            </>
                            :
                            
                            <img className= "profileImg" src = {URL.createObjectURL(img)}/>
                        }

            
                        
                    </div>
                    
                    <br/>

                    <input
                        type="file"
                        onChange={onChange}
                        ref={inputRef}
                        style={{display: 'none'}} // Make the file input element invisible
                    /> 
                </div>
                
                <div className='profileSections'>
                    <div 
                        className = "menuFormat"
                        onClick={() => {
                            deselectAll();
                            setSelectedProfileInformation(true);
                            setStyleProfile(700)
                        }}
                        style={{fontWeight: styleProfile}}

                    >Profile</div>
                    <div 
                        className = "menuFormat" 
                        onClick={(event) => {
                            deselectAll();
                            setSelectedMessages(true);
                            setStyleMessages(700);
                        }}
                        style={{fontWeight: styleMessages}}
                    >Messages</div>
                    <div 
                        className = "menuFormat"
                        onClick={(event) => {
                            deselectAll();
                            setSelectedRepositories(true);
                            setStyleRepo(700);
                        }}
                        style={{fontWeight: styleRepo}}
                    >My Repositories</div>
                    <div 
                        className = "menuFormat"
                        onClick={(event) => {
                            deselectAll();
                            setSelectedProjects(true);
                            setStyleProj(700);
                        }}
                        style={{fontWeight: styleProj}}
                    >My Projects</div>
                    <div 
                        className = "menuFormat"
                        onClick={(event) => {
                            setSelectedSignOut(true);
                            setStyleSo(700);
                        }}
                        style={{fontWeight: styleSo}}
                    >Sign Out</div>
            

            </div>
            </div>
            <div className= "content">
                {selectedProfileInformation == true && <ProfileInfo/>}
                {selectedMessages == true && <Messages/>}
                {selectedRepositories == true && <Repositories/>}
                {selectedProjects == true && <Projects/>}
                {selectedSignOut == true &&
                    <Modal 
                        open={selectedSignOut} 
                        onRequestClose={() => {
                            setSelectedSignOut(false);
                            setStyleSo(500);
                        }}
                        danger 
                        modalHeading="Are you sure you want to log out?" 
                        primaryButtonText="Log out" 
                        secondaryButtonText="Cancel"

                        onRequestSubmit={() => {
                            props.signOutFunction(false)
                        }}  
                    />
                }
            </div>
        </div>
    );
};

export default ProfilePageMain;