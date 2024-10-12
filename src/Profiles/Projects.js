import '../css-files/Profile.scss';
import {Search} from "@carbon/react";
import React, { useState } from 'react';
import {TextInput, View} from 'react-native';
import Message from './reusableComponents/Message';
import { Launch, LogoGithub } from '@carbon/icons-react';
import {Card, CardBody, CardTitle, CardSubtitle, CardText} from 'reactstrap'
import projectInfo from '../jsonDummyData/Projects.json'

const Projects = () => {

    const [filterValue, setFilterValue] = useState("");
    
    const filterMessages = (event) => {
        setFilterValue(event.target.value);
    }
  
    return (
        <div className='MessagesContent'>
            <div className='searchConstraints'>
                <Search
                    size='lg'
                    placeholder='Search for Projects'
                    labelText = 'Search'
                    closeButtonLabelText='Clear search'
                    onChange={filterMessages}
                />
            </div>
            
            <div className='cardTable'>

                {projectInfo.filter((value) => value.name.toLowerCase().includes(filterValue.toLowerCase())).map((messageObject) => {
                    return (
                        <Card
                            className='cardMain'
                        >
                            <div className='logoGit'>
                                <LogoGithub size='128'/>
                            </div>
                            <CardBody>
                                <CardTitle tag="h5">
                                    {messageObject.name}
                                </CardTitle>
                                <br/>
                                <CardText className='cardText'>
                                    {messageObject.description}
                                </CardText>
                            </CardBody>
        
                            <a className='logoLink' href={'/project/id=' + messageObject.id}>
                                <Launch 
                                    size='32'
                                />
                            </a>
                        </Card>
                    );
                })}
            </div>

        </div>
    );
};

export default Projects;