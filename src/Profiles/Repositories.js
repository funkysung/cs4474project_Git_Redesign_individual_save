import '../css-files/Profile.scss';
import {Search} from "@carbon/react";
import { Link } from 'react-router-dom';
import React, { useState } from 'react';
import {TextInput, View} from 'react-native';
import Message from './reusableComponents/Message';
import { Launch, LogoGithub } from '@carbon/icons-react';
import {Card, CardBody, CardTitle, CardSubtitle, CardText} from 'reactstrap'
//import 'bootstrap/dist/css/bootstrap.min.css';
import repoInfo from '../jsonDummyData/Repositories.json'

const Repositories = () => {

    const [filterValue, setFilterValue] = useState("");

    const filterMessages = (event) => {
        setFilterValue(event.target.value);
    }
  
    return (
        <div className='MessagesContent'>
            <div className='searchConstraints'>
                <Search
                    size='lg'
                    placeholder='Search for Repositories'
                    labelText = 'Search'
                    closeButtonLabelText='Clear search'
                    onChange={filterMessages}
                />
            </div>
            
            <div className='cardTable'>

                {repoInfo.filter((value) => value.name.toLowerCase().includes(filterValue.toLowerCase())).map((messageObject) => {
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
        
                            <a className='logoLink' href={'/repository/id=' + messageObject.id}>
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

export default Repositories;