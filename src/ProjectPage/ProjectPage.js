import '../css-files/Profile.scss';
import {TextArea} from "@carbon/react";
import React, { useState } from 'react';
import {View} from 'react-native';
import { Launch, LogoGithub, Edit, Checkmark, Warning, Code, Queued, InProgress, TaskView, TaskComplete} from '@carbon/icons-react';
import pullIconBlack from '../resources/pullIconBlack.svg';
import {Card, CardBody, CardTitle, CardSubtitle, CardText} from 'reactstrap'
import ToDo from './toDo';
import InDevelopement from './inProgress';
import UnderReview from './UnderReview';
import Complete from './Complete';

const ProjectPage = (props) => {

    const [name, setName] = useState(props.name);
    const [editName, setEditName] = useState(false);
    const [description, setDesctiption] = useState(props.info);
    const [editDescription, setEditDescription] = useState(false);
    const [data, setData] = useState(props.data);

    const [hideHome, setHideHome] = useState(false)
    const [toDo, setToDo] = useState(false);
    const [inProgress, setInProgress] = useState(false);
    const [underReview, setUnderReview] = useState(false);
    const [complete, setComplete] = useState(false);
   
    const handleHideHome = () => {
        setHideHome(!hideHome);

        if (toDo)
            setToDo(false)

        if (inProgress)
            setInProgress(false)
        
        if (underReview)
            setUnderReview(false)

        if (complete)
            setComplete(false)
    }

    const handleToDo = () => {
        setToDo(!toDo);
    }

    const handleInProgress = () => {
        setInProgress(!inProgress);
    }

    const handleUnderReview = () => {
        setUnderReview(!underReview);
    }

    const handleComplete = () => {
        setComplete(!complete);
    }

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
                    {!hideHome ?
                        <>
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
                                onClick={() => {
                                    handleToDo();
                                    handleHideHome();
                                }}
                            >
                                <Queued size='200' className='cardIcon'/>
                                <CardBody>
                                    <CardTitle tag="h5">
                                        ToDo
                                    </CardTitle>
                                </CardBody>
                            </Card>

                            <br/>

                            <Card
                                className='cardMainRepo'
                                onClick={() => {
                                    handleInProgress();
                                    handleHideHome();
                                }}
                            >
                                <div className='cardIcon'>
                                    <InProgress size='200' className='cardIcon'/>
                                </div>
                                <CardBody>
                                    <CardTitle tag="h5">
                                        InProgress
                                    </CardTitle>
                                </CardBody>
                            </Card>

                            <br/>

                            <Card
                                className='cardMainRepo'
                                onClick={() => {
                                    handleUnderReview();
                                    handleHideHome();
                                }}
                            >
                                <div className='cardIcon'>
                                    <TaskView size='200' className='cardIcon'/>
                                </div>
                                <CardBody>
                                    <CardTitle tag="h5">
                                        Under Review
                                    </CardTitle>
                                </CardBody>
                            </Card>

                            <Card
                                className='cardMainRepo'
                                onClick={() => {
                                    handleComplete();
                                    handleHideHome();
                                }}
                            >
                                <div className='cardIcon'>
                                    <TaskComplete size='200' className='cardIcon'/>
                                </div>
                                <CardBody>
                                    <CardTitle tag="h5">
                                    Done
                                    </CardTitle>
                                </CardBody>
                            </Card>

                        </div>
                    </>

                    :
                    <></>
                }

                {toDo && 
                    <ToDo
                        tasks = {data.ToDo}
                        revealHome = {handleHideHome}
                    />
                }

                {inProgress && 
                    <InDevelopement
                        tasks = {data.InProgress}
                        revealHome = {handleHideHome}
                    />
                }

                {underReview && 
                    <UnderReview
                        tasks = {data.ToReview}
                        revealHome = {handleHideHome}
                    />
                }

                {complete && 
                    <Complete
                        tasks = {data.Complete}
                        revealHome = {handleHideHome}
                    />
                }
                </div>

            {}
        </div>
    );
};

export default ProjectPage;