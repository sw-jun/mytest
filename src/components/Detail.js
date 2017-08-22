import React from 'react';
import {Button, Icon, Label, Menu, Table, Rating, Grid, Header, Form, Input, TextArea, Container,
        Segment, Comment} from 'semantic-ui-react';

import Detail_Comment from './Detail_Comment.js';


class Detail extends React.Component{
    render(){
        return(
            <div>
                <Segment.Group>
                    <Segment color='blue' tertiary>
                        <Header as='h2'>나의 첫글</Header>
                        <Header as='h3' color='grey' floated='left'>2017.9.23 조회수 4</Header>
                        <Header as='h3' color='grey' floated='right'>tndk1323</Header>
                        <Header as='h1'></Header>
                    </Segment>
                    <Segment attached>
                        <Container textAlign='left' color='grey'>
                            <p>asdjflksj asdlfkjlaksj laskj f</p>
                        </Container>
                    </Segment>
                </Segment.Group>

                <Detail_Comment _SetMd = {this.props._SetMd}/>
            </div>
        );
    }
}
export default Detail