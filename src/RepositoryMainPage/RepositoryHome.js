import '../css-files/Profile.scss';
import {TextArea} from "@carbon/react";
import React, { useState } from 'react';
import {View} from 'react-native';
import { Launch, LogoGithub, Edit, Checkmark, Warning, Code} from '@carbon/icons-react';
import pullIconBlack from '../resources/pullIconBlack.svg';
import {Card, CardBody, CardTitle, CardSubtitle, CardText} from 'reactstrap'

const RepositoryHome = (props) => {

    const [name, setName] = useState(props.name);
    const [editName, setEditName] = useState(false)
    const [description, setDesctiption] = useState(props.info)   
    const [editDescription, setEditDescription] = useState(false)
   
    const handleEditName = () => {
        setEditName(true);
    }

    const updateName = (event) => {
        setName(event.target.value);
    }

    const handleEditDescription = () => {
        setEditDescription(true);
    }

    const updateDescription = (event) => {
        setDesctiption(event.target.value);
    }

    return (
        <div className='content' style={{width: '100%'}}>
            <div className='repoHomeContent'>
                
                <div className='logoGit'>
                    <LogoGithub size='200'/>
                </div>

                <div className='nameSection'>
                    {editName ?
                        <input 
                            className='title'
                            value={name}
                            type='text'
                            onChange={updateName}
                        />

                        :

                        <div className='title'>{name}</div>
                    }

                    {editName ? 
                        <>
                            <Edit 
                                size={32} 
                                onClick={handleEditName}
                                fill='grey'
                                className='editIcon'
                            />

                            <Checkmark 
                                className='checkIcon'
                                size={32} 
                                onClick={() => {
                                    setEditName(false);
                                }}
                            />

                        </>
                        :

                        <Edit 
                            size={32} 
                            className='editIcon'
                            onClick={handleEditName}
                        />
                    }
                </div>
                
                <div className='infoSection'>
                    {editDescription ?
                        <div className='textFormat'>
                            <TextArea 
                                className='textInput'
                                value={description}
                                type='text'
                                onChange={updateDescription}
                            />
                        </div>

                        :

                        <div className='description'>{description}</div>
                    }

                    <br/>

                    {editDescription ?
                        <> 
                            <Edit 
                                className='editIcon'
                                size={64} 
                                onClick={handleEditDescription}
                                fill='grey'
                            />

                            <br/>

                            <Checkmark 
                                className='checkIcon'
                                size={64} 
                                onClick={() => {
                                    setEditDescription(false);
                                }}
                            />
                        </>
                        
                        :

                        <Edit 
                            size={64} 
                            className='editIcon'
                            onClick={handleEditDescription}
                        />
                    }

                </div>
                
                <div className='optionTable'>
            
                    <Card
                        className='cardMainRepo'
                    >
                        <Code size='200' className='cardIcon'/>
                        <CardBody>
                            <CardTitle tag="h5">
                                Code
                            </CardTitle>
                        </CardBody>
                    </Card>

                    <br/>

                    <Card
                        className='cardMainRepo'
                    >
                        <div className='cardIcon'>
                            <Warning size='200' className='cardIcon'/>
                        </div>
                        <CardBody>
                            <CardTitle tag="h5">
                                Issues
                            </CardTitle>
                        </CardBody>
                    </Card>

                    <br/>

                    <Card
                        className='cardMainRepo'
                    >
                        <img src={pullIconBlack} alt="Icon" className="icon-image-card"/>
                        <CardBody>
                            <CardTitle tag="h5">
                                Pull Requests
                            </CardTitle>
                        </CardBody>
                    </Card>

                </div>
            </div>
        </div>
    );
};

export default RepositoryHome;